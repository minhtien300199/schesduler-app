import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:schedule_app/components/login/LoginForm.dart';

class Login extends StatelessWidget {
  Login({super.key});
  String _title = "Login";
  late int profile;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Column(children: [
          Expanded(
              flex: 40,
              child: LayoutBuilder(
                  builder: (BuildContext bc, BoxConstraints constraints) {
                return Stack(
                  children: [
                    Image.asset(
                      "assets/login.jpg",
                      fit: BoxFit.cover,
                      width: constraints.maxWidth,
                      height: constraints.maxHeight,
                    ),
                    Positioned(
                      bottom: 0,
                      child: Container(
                        width: MediaQuery.of(context).size.width,
                        height: constraints.maxHeight * 0.3,
                        decoration: const BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(20),
                              topRight: Radius.circular(20)),
                        ),
                        child: const Center(child: Text("Login")),
                      ),
                    )
                  ],
                );
              })),
          const Expanded(
            flex: 50,
            child: LoginForm(),
          ),
          Expanded(
              flex: 10,
              child: Stack(
                children: [Container()],
              ))
        ]),
      ),
    );
  }
}
