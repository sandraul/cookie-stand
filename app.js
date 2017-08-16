var pioneer = {
  mincust:17,
  maxcust:88,
  avgsale:5.2,
}

var airport = {
  mincust:6,
  maxcust:24,
  avgsale:1.2,
}

var washington = {
  mincust:11,
  maxcust:38,
  avgsale:1.9,
}

var sellwood = {
  mincust:20,
  maxcust:48,
  avgsale:3.3,
}

var pearl = {
  mincust:3,
  maxcust:24,
  avgsale:2.6,
}

function createTable() {
  for (var index = 0; index < pioneer.length; index ++){
    var studentRow = getStudentInfo(students[index]);
    document.getElementById('cookies').innerHTML += studentRow;
  }
}
