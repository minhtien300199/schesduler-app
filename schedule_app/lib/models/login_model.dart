import 'dart:convert';

import 'package:collection/collection.dart';

class LoginModel {
  String? email;
  String? password;

  LoginModel({this.email, this.password});

  @override
  String toString() => 'LoginModel(email: $email, password: $password)';

  factory LoginModel.fromMap(Map<String, dynamic> data) => LoginModel(
        email: data['Email'] as String?,
        password: data['Password'] as String?,
      );

  Map<String, dynamic> toMap() => {
        'Email': email,
        'Password': password,
      };

  /// `dart:convert`
  ///
  /// Parses the string and returns the resulting Json object as [LoginModel].
  factory LoginModel.fromJson(String data) {
    return LoginModel.fromMap(json.decode(data) as Map<String, dynamic>);
  }

  /// `dart:convert`
  ///
  /// Converts [LoginModel] to a JSON string.
  String toJson() => json.encode(toMap());

  LoginModel copyWith({
    String? email,
    String? password,
  }) {
    return LoginModel(
      email: email ?? this.email,
      password: password ?? this.password,
    );
  }

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    if (other is! LoginModel) return false;
    final mapEquals = const DeepCollectionEquality().equals;
    return mapEquals(other.toMap(), toMap());
  }

  @override
  int get hashCode => email.hashCode ^ password.hashCode;
}

class TokenModel {
  TokenModel({this.token});
  String? token;
  factory TokenModel.fromMap(Map<String, dynamic> data) => TokenModel(
        token: data['token'] as String?,
      );

  factory TokenModel.fromJson(String data) {
    return TokenModel.fromMap(json.decode(data) as Map<String, dynamic>);
  }
}
