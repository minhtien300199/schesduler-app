import 'package:get_it/get_it.dart';
import 'package:schedule_app/Interfaces/IUserModel.dart';
import 'package:schedule_app/Interfaces/I_login_repository.dart';
import 'package:schedule_app/data/repositories/login.repository.dart';

GetIt serviceLocator = GetIt.instance;

void startUpConfiguration() {
  serviceLocator
      .registerLazySingleton<ILoginRepository>(() => LoginRepository());
}
