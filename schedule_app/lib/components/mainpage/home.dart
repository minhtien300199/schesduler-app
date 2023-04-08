import 'dart:async';

import 'package:animated_bottom_navigation_bar/animated_bottom_navigation_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:schedule_app/components/dashboard/cubits/dashboard_cubit.dart';
import 'package:schedule_app/components/dashboard/dashboard.dart';
import 'package:schedule_app/components/mainpage/home_cubit.dart';
import 'package:schedule_app/components/mainpage/home_cubit_state.dart';
import 'package:schedule_app/components/setting/setting.dart';
import 'package:schedule_app/components/user/user.dart';
import 'package:schedule_app/models/enums/screen_enums.dart';

import '../schedule/schedule.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final List<IconData> iconList = List<IconData>.of({
    Icons.dashboard_customize,
    Icons.schedule_outlined,
    Icons.person_rounded,
    Icons.settings
  });
  List<Widget> screens = List<Widget>.of(
      [const Dashboard(), const Schedule(), const User(), const Setting()]);
  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(
          create: (context) => HomeCubit(),
        ),
        BlocProvider(
          create: (context) => DashboardCubit(),
        ),
      ],
      child: BlocBuilder<HomeCubit, HomeCubitState>(
        builder: (context, state) {
          return Scaffold(
            body: screens[state.navigateIndex],
            floatingActionButton:
                state.isFloatingButton ? state.floatingActionBtn : null,
            floatingActionButtonLocation:
                FloatingActionButtonLocation.centerDocked,
            bottomNavigationBar: AnimatedBottomNavigationBar(
              icons: iconList,
              activeIndex: state.navigateIndex,
              gapLocation: GapLocation.none,
              notchSmoothness: NotchSmoothness.sharpEdge,
              leftCornerRadius: 0,
              rightCornerRadius: 0,
              onTap: (index) => {
                context.read<HomeCubit>().changeState(index),
                if (index == ScreenNameEnum.scheduleEnum.index)
                  {
                    context.read<HomeCubit>().setFloatingBtn(
                        FloatingActionButton.small(onPressed: () => {}))
                  }
              },
              //other params
            ),
          );
        },
      ),
    );
  }
}
