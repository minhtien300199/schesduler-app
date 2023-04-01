import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:schedule_app/business_logics/cubits/login_cubit_cubit.dart';

import '../../Interfaces/I_login_repository.dart';
import '../../data/repositories/ServiceLocator.dart';
import '../login/login.dart';
import '../mainpage/home.dart';

class AppRouter {
  var loginRepository = serviceLocator<ILoginRepository>();
  Route? onGenerateRoute(RouteSettings routes) {
    final LoginCubit _loginCubit = LoginCubit(loginRepository);
    switch (routes.name) {
      case '/home':
        return MaterialPageRoute(
          builder: (_) => HomePage(),
        );
        break;
      case '/':
        return MaterialPageRoute(
          builder: (_) => BlocProvider.value(
            value: _loginCubit,
            child: Login(),
          ),
        );
        break;
      default:
        return null;
    }
  }

  void dispose() {}
}
