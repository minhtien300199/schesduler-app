import 'package:bloc/bloc.dart';
import 'package:schedule_app/business_logics/cubits/login_cubit_state.dart';
import 'package:schedule_app/data/repositories/login.repository.dart';
import 'package:schedule_app/models/login_model.dart';

import '../../Interfaces/I_login_repository.dart';

class LoginCubit extends Cubit<LoginCubitState> {
  final ILoginRepository loginRepository;
  LoginCubit(this.loginRepository)
      : super(LoginCubitState(true, LoginModel(), showSuccessPop: null));
  void toggleLoading() {
    var newState = LoginCubitState(state.loading, state.loginModel,
        showSuccessPop: state.showSuccessPop);
    emit(newState);
  }

  Future<bool> submitForm(LoginModel model) async {
    var response =
        await loginRepository.loginAPI(model.email!, model.password!);
    if ((response?.token?.isNotEmpty ?? false)) {
      var newState = LoginCubitState(state.loading, model)
          .copyWith(loading: false, showSuccessPop: true);
      emit(newState);
      return true;
    } else {
      // notify login fail!
      var newState = LoginCubitState(state.loading, model)
          .copyWith(loading: false, showSuccessPop: false);
      emit(newState);
      return false;
    }
  }

  setDisableForm(bool value) {
    var newState = LoginCubitState(state.loading, state.loginModel)
        .copyWith(disabledSubmit: value);
    emit(newState);
  }
}
