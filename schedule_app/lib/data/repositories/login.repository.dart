import 'dart:convert';

import 'package:schedule_app/data/dataproviders/login_api_provider.dart';
import 'package:schedule_app/models/login_model.dart';

import '../../Interfaces/I_login_repository.dart';
import '../../models/return_result.dart';

class LoginRepository extends ILoginRepository {
  final loginProvider = LoginAPIProvider();

  @override
  Future<TokenModel?> loginAPI(String email, String password) async {
    TokenModel result = TokenModel();
    try {
      var loginRes = await loginProvider.login(email, password);
      if (loginRes.statusCode == 200 || loginRes.statusCode == 201) {
        Map<String, dynamic> token =
            ReturnResult.fromJson(json.decode(loginRes.body)).result;
        if (token.isNotEmpty) {
          return TokenModel.fromJson(json.encode(token));
        } else {
          return null;
        }
      }
    } catch (e) {
      print(e);
    }
    return result;
  }
}
