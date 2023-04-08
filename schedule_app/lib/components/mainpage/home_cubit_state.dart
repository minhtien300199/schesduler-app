import 'dart:ffi';

import 'package:animated_bottom_navigation_bar/animated_bottom_navigation_bar.dart';
import 'package:flutter/material.dart';

class HomeCubitState {
  int navigateIndex = 0;
  bool isFloatingButton = false;
  String currentScreen = '';
  GapLocation floatingLocation = GapLocation.none;
  FloatingActionButton? floatingActionBtn;
  HomeCubitState(this.navigateIndex,
      {this.isFloatingButton = false,
      this.floatingLocation = GapLocation.none,
      this.floatingActionBtn});
  HomeCubitState copyWith(
      {int? navigateIndex,
      GapLocation? floatingLocation,
      bool? isFloatingButton,
      FloatingActionButton? floatingActionBtn}) {
    return HomeCubitState(navigateIndex ?? this.navigateIndex,
        floatingLocation: floatingLocation ?? this.floatingLocation,
        isFloatingButton: isFloatingButton ?? this.isFloatingButton,
        floatingActionBtn: floatingActionBtn ?? this.floatingActionBtn);
  }

  static String getNameRoute(index) {
    String screen = '';
    switch (index) {
      case 0:
        screen = 'dashboard';
        break;
      case 1:
        screen = 'schedule';
        break;
      case 2:
        screen = 'user';
        break;
      case 3:
        screen = 'setting';
        break;
      default:
        screen = 'login';
        break;
    }
    return screen;
  }
}
