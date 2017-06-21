function pigIt(str){
  var splited = [];
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    var first = arr[i].slice(0,1);
    var rest = arr[i].substring(1);
    var pig = rest + first + "ay";
    splited.push(pig);
  }
  var joined = splited.join(' ');
  return joined;
}
