import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

import '../../shared/Components/CustomButton.dart';
import '../../shared/Components/CustomInput.dart';

class LoginForm extends StatelessWidget {
  const LoginForm({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Form(
          child: Column(children: [
            CustomInputText(
              placeholder: "Username",
            ),
            CustomInputText(
              placeholder: "Password",
            )
          ]),
        ),
        CustomButton(
          onPress: () {},
          title: "Login",
        )
      ],
    );
  }
}
