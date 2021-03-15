module.exports = function check(str, bracketsConfig) {
  let arr = str;
  while (/\{\}|\(\)|\|\||\[\]|12|34|56|77|88/.test(arr)) {
    arr = arr.replace(/\{\}|\(\)|\|\||\[\]|12|34|56|77|88/ig, '');
  }
  if (arr.length == 0){
    return true;
  } else if (arr.length > 0) {
    return false;
  }
};
