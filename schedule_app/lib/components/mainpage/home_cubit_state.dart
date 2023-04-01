import 'dart:ffi';

import 'package:animated_bottom_navigation_bar/animated_bottom_navigation_bar.dart';

class HomeCubitState {
  int navigateIndex = 0;
  bool isFloatingButton = false;
  GapLocation floatingLocation = GapLocation.none;
  HomeCubitState(this.navigateIndex,
      {this.isFloatingButton = false,
      this.floatingLocation = GapLocation.none});
  HomeCubitState copyWith(
      {int? navigateIndex,
      GapLocation? floatingLocation,
      bool? isFloatingButton}) {
    return HomeCubitState(navigateIndex ?? this.navigateIndex,
        floatingLocation: floatingLocation ?? this.floatingLocation,
        isFloatingButton: isFloatingButton ?? this.isFloatingButton);
  }
}
