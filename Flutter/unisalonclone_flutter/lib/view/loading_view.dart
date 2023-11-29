import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:unisalonclone_flutter/constant/media_query.dart';

class LoadingView extends StatefulWidget {
  const LoadingView({super.key});

  @override
  State<LoadingView> createState() => _LoadingViewState();
}

class _LoadingViewState extends State<LoadingView> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _buildBody,
    );
  }

  Widget get _buildBody {
    return Container(
      width: widthFn(context, 1),
      height: heightFn(context, 1),
      decoration: const BoxDecoration(color: Color(0XFF152259)),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SpinKitCubeGrid(
            itemBuilder: (BuildContext context, int index) {
              return const DecoratedBox(
                decoration: BoxDecoration(
                  color: Colors.white,
                ),
              );
            },
          ),
          const SizedBox(
            height: 30,
          ),
          const Text(
            "Loading...",
            style: TextStyle(fontSize: 18, color: Colors.white, fontWeight: FontWeight.bold),
          )
        ],
      ),
    );
  }
}
