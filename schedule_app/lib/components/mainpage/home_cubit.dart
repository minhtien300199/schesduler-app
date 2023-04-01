import 'package:bloc/bloc.dart';

import 'home_cubit_state.dart';

class HomeCubit extends Cubit<HomeCubitState> {
  HomeCubit() : super(HomeCubitState(0));
  changeState(int navigateIndex) {
    var newState = HomeCubitState(state.navigateIndex)
        .copyWith(navigateIndex: navigateIndex);
    emit(newState);
  }
}
