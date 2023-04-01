import 'package:schedule_app/Utils/Helpers.dart';

extension EmailValidator on String {
  bool isValidEmail() {
    return RegExp(
            r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')
        .hasMatch(this);
  }
}

String? requireValidator(String? value, {Function(bool)? validateCallback}) {
  if (value?.isEmpty ?? true) {
    if (validateCallback != null) validateCallback(true);
    return 'This field is required';
  } else {
    if (validateCallback != null) validateCallback(false);
    return null;
  }
}
