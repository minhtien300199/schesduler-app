import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class CustomInputText extends StatefulWidget {
  CustomInputText(
      {super.key, required this.placeholder, this.icon, this.label});
  String placeholder = "Input";
  Icon? icon;
  String? label;
  @override
  State<CustomInputText> createState() => _CustomInputTextState();
}

class _CustomInputTextState extends State<CustomInputText> {
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      decoration: InputDecoration(
          hintText: widget.placeholder,
          icon: widget.icon,
          label: widget.label != null ? Text(widget.label!) : null,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(30))),
    );
  }
}
