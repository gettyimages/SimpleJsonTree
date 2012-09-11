Date.fromJson = function (jsonDate) {
  var regex = /-?\d+/;
  return new Date(parseInt(regex.exec(jsonDate)));
};