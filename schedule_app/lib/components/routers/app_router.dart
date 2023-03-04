import 'package:flutter/material.dart';

import '../login/login.dart';
import '../mainpage/home.dart';

class AppRouter {
  Route? onGenerateRoute(RouteSettings routes) {
    switch (routes.name) {
      case '/login':
        return MaterialPageRoute(
          builder: (_) => HomePage(),
        );
        break;
      case '/':
        return MaterialPageRoute(
          builder: (_) => Login(),
        );
        break;
      default:
        return null;
    }
  }

  void dispose() {}
}
