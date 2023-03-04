import 'package:flutter/material.dart';
import 'package:schedule_app/components/mainpage/home.dart';
import 'package:schedule_app/components/routers/app_router.dart';

import 'components/login/login.dart';
import 'data/repositories/ServiceLocator.dart';

void main() {
  startUpConfiguration();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});
  final AppRouter _appRouter = new AppRouter();

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      onGenerateRoute: _appRouter.onGenerateRoute,
    );
  }
}
