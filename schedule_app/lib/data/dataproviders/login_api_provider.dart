import 'package:http/http.dart' as http;

import 'package:schedule_app/Utils/Helpers.dart';
import 'package:schedule_app/models/return_result.dart';

import '../../models/login_model.dart';

class LoginAPIProvider {
  String controllerName = '/auth';
  LoginAPIProvider();
  Future<http.Response> login(String email, String password) {
    var loginUri =
        Uri.parse('${Helper.endpoint}:${Helper.port}$controllerName/login');
    var login = LoginModel(email: email, password: password);
    return http.post(loginUri,
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: login.toJson());
  }
}

// https://pub.dev/packages/http_interceptor ,