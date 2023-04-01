import 'package:schedule_app/models/login_model.dart';

class LoginCubitState {
  bool loading = false;
  bool? showSuccessPop;
  bool disabledSubmit = true;
  LoginModel loginModel = LoginModel();
  LoginCubitState(this.loading, this.loginModel,
      {this.showSuccessPop, this.disabledSubmit = true});
  LoginCubitState copyWith(
      {bool? loading,
      bool? showSuccessPop,
      LoginModel? loginModel,
      bool? disabledSubmit}) {
    return LoginCubitState(
        loading ?? this.loading, loginModel ?? this.loginModel,
        showSuccessPop: showSuccessPop ?? this.showSuccessPop,
        disabledSubmit: disabledSubmit ?? this.disabledSubmit);
  }
}
