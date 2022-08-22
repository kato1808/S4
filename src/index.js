/**
 * 19. const、let等の変数宣言
 */

//  var val1 = "var変数";
//  console.log(val1);

//  //var変数は上書き可能
//  val1 = "var変数は上書き可能";
//  console.log(val1);

//  //var変数は再宣言可能
//  var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数は上書き可能";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数は再宣言不可能"；

// const val3 = "const変数";
// console.log(val3);

// // constは上書き不可
// // val3 = "const変数は上書き不可"

// // constは再宣言不可
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ビオレ",
//   age: 40,
// };
// val4.name = "Biore";
// val4.adress = "meguro";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = 'bird'
// val5.push ("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "加藤";
// const age = "51";
// //名前は加藤です。年齢は51歳です。
// const message1 = "名前は" + name + "です。年齢は"　+ age +"歳です。";
// console.log(message1);

// // テンプレート文字列を用いる方法
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str){
//   return str;
// };
const func1 = function (str) {
  return str;
};
console.log(func1("ファンクション1です。"));

//アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("ファンクション2です。"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 30));
