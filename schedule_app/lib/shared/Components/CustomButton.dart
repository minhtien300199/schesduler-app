import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class CustomButton extends StatelessWidget {
  CustomButton({super.key, required this.onPress, this.title = "Button"});
  void Function() onPress;
  String title;
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ButtonStyle(
        backgroundColor: MaterialStateProperty.all<Color>(
            const Color.fromRGBO(77, 172, 77, 1)),
      ),
      onPressed: onPress,
      child: Text(title),
    );
  }
}
