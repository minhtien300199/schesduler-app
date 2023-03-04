class ReturnResult<T> {
  T? result;
  String? message;

  ReturnResult({this.result, this.message});

  ReturnResult.fromJson(Map<String, dynamic> json) {
    result = json['result'];
    message = json['message'];
  }
}
