import 'dart:convert';

import 'package:schedule_app/data/dataproviders/login_api_provider.dart';
import 'package:schedule_app/models/login_model.dart';

import '../../Interfaces/I_login_repository.dart';

class LoginRepository implements ILoginRepository {
  final loginProvider = LoginAPIProvider();

  @override
  Future<TokenModel> loginAPI(String email, String password) async {
    late TokenModel result;
    try {
      var loginRes = await loginProvider.login(email, password);
      if (loginRes.statusCode == 200) {
        result = TokenModel.fromJson(jsonDecode(loginRes.body));
      }
    } catch (e) {
      print(e);
    }
    return result;
  }
}
