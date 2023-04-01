import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

// ignore: must_be_immutable
class CustomInputText extends StatefulWidget {
  CustomInputText(
      {super.key,
      required this.placeholder,
      required this.controller,
      this.icon,
      this.label,
      this.validator,
      this.onChanged,
      this.obscureText});
  String placeholder = "Input";
  Icon? icon;
  String? label;
  String? Function(String?)? validator;
  bool? obscureText = false;
  void Function(String)? onChanged;
  TextEditingController controller;
  @override
  State<CustomInputText> createState() => _CustomInputTextState();
}

class _CustomInputTextState extends State<CustomInputText> {
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      obscureText: widget.obscureText ?? false,
      controller: widget.controller,
      decoration: InputDecoration(
          hintText: widget.placeholder,
          icon: widget.icon,
          isDense: true,
          contentPadding:
              const EdgeInsets.symmetric(vertical: 10, horizontal: 10),
          label: widget.label != null ? Text(widget.label!) : null,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(30))),
      validator: widget.validator,
      onChanged: widget.onChanged,
      autovalidateMode: AutovalidateMode.onUserInteraction,
    );
  }
}
