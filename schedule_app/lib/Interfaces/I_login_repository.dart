import '../models/login_model.dart';

abstract class ILoginRepository {
  Future<TokenModel> loginAPI(String email, String password);
}
