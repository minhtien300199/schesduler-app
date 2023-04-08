import 'package:bloc/bloc.dart';
import 'package:flutter/material.dart';

import '../../models/enums/screen_enums.dart';
import 'home_cubit_state.dart';

class HomeCubit extends Cubit<HomeCubitState> {
  HomeCubit() : super(HomeCubitState(0));
  changeState(int navigateIndex) {
    bool isAddFloatingBtn = false;
    if (navigateIndex == ScreenNameEnum.scheduleEnum.index) {
      isAddFloatingBtn = true;
    }
    var newState =
        HomeCubitState(state.navigateIndex, isFloatingButton: isAddFloatingBtn)
            .copyWith(navigateIndex: navigateIndex);
    emit(newState);
  }

  setFloatingBtn(FloatingActionButton btn) {
    var newState = HomeCubitState(state.navigateIndex)
        .copyWith(floatingActionBtn: btn, isFloatingButton: true);
    emit(newState);
  }
}
