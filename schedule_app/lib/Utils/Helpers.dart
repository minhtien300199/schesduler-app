class Helper {
  static String endpoint = "http://192.168.0.236";
  static int port = 5000;
  static bool isEmail(String input) {
    final pattern = r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$';
    final regex = RegExp(pattern);
    return regex.hasMatch(input);
  }
}
