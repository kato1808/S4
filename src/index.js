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
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("ファンクション1です。"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("ファンクション2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 30));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "加藤",
//   age: 51
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['加藤',51];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${[name]}です。年齢は${age}歳です`
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name　= "ゲスト") => console.log(`こんにはー${name}さん！！`);
// sayHello ('加藤');

/**
 * スプレッド構文　...
 */
// const arr1 = [1,3];
// // console.log(arr1);
// // console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);
//まとめる
// const arr2 = [1,2,3,4,5,];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// 配列のコピー、結合
// const arr4 = [30, 40];
// const arr5 = [50, 60];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
/**
 * mapやfilterを使った配列処理
 */
//for文を使った処理
// const nameArr = ["塩見", "青木", "山田"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(`${index　+1}番は${nameArr[index]}です`);
// }
//mapを使った葉入れt処理
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
//   console.log(nameArr2);
// nameArr.map((name, index) => console.log(`${index+1}番は${name}です`));

//fillterを使った配列処理
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
//   console.log(newNumArr);
/**
 * 三項演算子
 */
//ある条件　条件がtrueの時：　条件がfalseの時
// const val1 = 1 > 0 ? 'trueです'　: 'falseです'
// console.log(val1);
//
//
/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;
// if (flage1 || flage2){
//   console.log('1か2はtrueです')；
//   }
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

const num2 = num1;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
