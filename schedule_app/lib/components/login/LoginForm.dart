import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:motion_toast/motion_toast.dart';
import 'package:schedule_app/business_logics/cubits/login_cubit_cubit.dart';
import 'package:schedule_app/business_logics/cubits/login_cubit_state.dart';

import '../../models/login_model.dart';
import '../../shared/Components/CustomButton.dart';
import '../../shared/Components/CustomInput.dart';
import '../../shared/validators/validator.dart';

class LoginForm extends StatefulWidget {
  LoginForm({super.key});

  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final _formKey = GlobalKey<FormState>();
  TextEditingController _emailController = TextEditingController();
  TextEditingController _passwordController = TextEditingController();

  Future<bool> onPressLogin(LoginCubit loginCubit) async {
    if (_formKey.currentState != null && _formKey.currentState!.validate()) {
      var model = LoginModel(
          email: _emailController.text, password: _passwordController.text);
      loginCubit.toggleLoading();
      var result = await loginCubit.submitForm(model);
      loginCubit.toggleLoading();
      return result;
    }
    // var resLogin = await loginCubit.submitForm(model)
    return false;
  }

  @override
  Widget build(BuildContext context) {
    final loginCubit = BlocProvider.of<LoginCubit>(context);
    return Container(
      width: MediaQuery.of(context).size.width * 0.9,
      child: Column(
        children: [
          Form(
            key: _formKey,
            child: Column(children: [
              Stack(
                children: [
                  Container(
                    height: 48,
                  ),
                  CustomInputText(
                    controller: _emailController,
                    placeholder: "Username",
                    validator: (input) {
                      if (input!.isValidEmail()) {
                        loginCubit.setDisableForm(false);
                        return null;
                      } else {
                        loginCubit.setDisableForm(true);
                        return "Invalid email!";
                      }
                    },
                    onChanged: (val) => {},
                  ),
                ],
              ),
              const SizedBox(
                height: 15,
              ),
              CustomInputText(
                controller: _passwordController,
                placeholder: "Password",
                obscureText: true,
                validator: (input) {
                  return requireValidator(input,
                      validateCallback: (bool invalid) {
                    loginCubit.setDisableForm(invalid);
                  });
                },
              )
            ]),
          ),
          const SizedBox(
            height: 15,
          ),
          BlocConsumer<LoginCubit, LoginCubitState>(
            listener: (_, state) {
              if (state.showSuccessPop == true) {
                // show success pop:
                MotionToast.success(
                  title: const Text("Login success!"),
                  description: Text("Welcome back ${state.loginModel.email}"),
                ).show(context);
              } else if (state.showSuccessPop == false) {
                MotionToast.error(
                        title: Text("Error"),
                        description: Text(
                            "Password or Username is not correct. Please try again"))
                    .show(context);
              }
            },
            builder: (context, state) {
              if (state.disabledSubmit) {
                return CustomButton(
                  title: "Login",
                );
              } else {
                // loading
                return CustomButton(
                  onPress: () async {
                    var res = await onPressLogin(loginCubit);
                    if (res) {
                      // ignore: use_build_context_synchronously
                      if (!context.mounted) return;
                      Navigator.of(context).pushNamed('/home');
                    }
                  },
                  title: "Login",
                );
              }
            },
          )
        ],
      ),
    );
  }
}
