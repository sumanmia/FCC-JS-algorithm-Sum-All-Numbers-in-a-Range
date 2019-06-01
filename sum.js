function sumAll(arr) {
  arr.sort((a, b) => a - b);
  var length = arr.length - 1;
  var total = 0;
  for (var i = arr[0]; i <= arr[length]; i++) {
    total += i;
  }
  return total;
}
