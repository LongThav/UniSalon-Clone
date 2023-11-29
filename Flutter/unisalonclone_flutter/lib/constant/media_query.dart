import 'package:flutter/material.dart';

//MediaQuery

double widthFn(BuildContext context, value) {
  double height = MediaQuery.of(context).size.width * value;
  return height;
}

double heightFn(BuildContext context, value) {
  double width = MediaQuery.of(context).size.height * value;
  return width;
}

//push screen
void pushScreen(BuildContext context, dynamic route) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => route));
}

void pushReplace(BuildContext context, dynamic route) {
  Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context) => route), (route) => false);
}

void popScreen(BuildContext context) {
  Navigator.pop(context);
}
