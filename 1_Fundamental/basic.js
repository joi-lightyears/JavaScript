// *********** variable ******************************
/*
var myName = 'Joi';
var age= '18'; // khong co dau cham phay cung duoc
alert(myName);
alert(age);
*/

// *********** comment ******************************
// hotkey: Ctrl + / => // comment on line
// hotkey: Shift + Alt + A => Toggle block comment

// ********** built-in function ********************
/*
1 so ham built-in (ham co san)
 1. Alert
 2. Console
 3. Confirm
 4. Prompt
 5.Set timeout
 6. Set interval
---------------------------------------*/
//2. Console
//onsole.log('Hello'); //display message

//3. Confirm
//confirm('18+ ?'); // show Yes/No

//4. Prompt
//prompt('18+ ?'); //display Input

//5. Set timeout
// meaning: cho 1 doan code chay sau mot khoang thoi gian cho truoc (don vi time: ms)
/* setTimeout(function() {
    alert('notification')
}, 10000) */ //alert after 10s

//6. Set interval
/*meaning: cho 1 doan code chay sau mot khoang thoi gian cho truoc nhung
sau khi chay lan dau no se khong stop (don vi time: ms)*/
/* setInterval(function() {
    alert('notification')
}, 10000); */ // sau khi chay lan dau thi cach 10s no chay 1 lan

// ********** operator ***************************
/*
1. So hoc (Arithmetic)
+ - * /  Cong tru nhan chia
** luy thua
% chia lay so du
++ tang 1 gia tri so
-- tru 1 gia tri so

++ --
Prefix & Postfix (tien to va hau to)
prefix: ++a; --a (tra ve luon a da tang hoac giam gia tri)
profix: a++; a-- (buoc 1 tra ve gia tri nhu cu la a, sau khi do moi tra ve gia tri da tang/giam)
vd: number = 5
output = number++ - --number
meaning: 5 - 5 = 0

2. Toan tu gan (Assignment) a = b (assign b to a)
3. Toan tu so sanh (Comparision) >, <, =, >=, <=
4. Toan tu logic (Logical) && || !
*/

// ******** string operator ************************
// 'Joi' + 'Nguyen' => 'JoiNguyen'

// ******** boolean ********************************
/*
0
false
'' ""
undefined
NaN
null
6 gia tri nay khi duoc convert ra boolean se la false
con lai se la true */

// ******* object ***********************************
//example:
/* var firstObject = {
    name: 'Joi',
    age: '18',
    firstFunction: function () {
        
    }
};
console.log(firstObject); */

// ****** array **************************************
/* var firstArray = [
    'Python',
    'Luca',
    'SpaceX'
];
console.log(firstArray); */

// ***** compare opaerator ***************************
/* 
== (so sanh khong chinh xac du lieu: 8 == 8 => true | 8 == '8' => true)
=== (so sanh chinh xac du lieu: 8 === 8 => true | 8 === '8' => false)
!== (tuong tu ===)
*/

// **** conditional statement ***********************
// a && b && c (xet tu trai qua phai: neu khong co false thi ra c: neu b laf false thi ra b)
// tuong tu || nhung no tim true

// ****** string ************************************
/* 2 cach khai bao string
c1: var name = 'Joi'
c2: var name = new String('Joi')
cach 1 se nhanh hon cach 2
cach 2 new String thuc chat la khai bao 1 doi tuong object name khi typeof name thi ra object
template string (only in ES6)
ex
var name = 'Elon';
var lastname = 'Musk';
console.log(`My name is: ${name} ${lastname}`);*/

// ****** JS string methods ***************************
/* length: myString.length
find index: myString = 'Joi'; myString.indexOf('J')| incase not found index it will return -1
2nd parameter myString.indexOf('J', 3) nghia la tim bat dau tu vi tri index 3
lastIndexOf('J') tra ve vi tri xuat hien lan cuoi cua J trong string
search('J') giong nhu indexOf nhung khong ho tro 2nd parameter va khac thu 2 laf nos tim theo bieu thuc chinh quy
cut string
myString.slice(start, end);
replace
myString.replace('J', 'K') => Koi | chi thay duoc J xuat hien lan dau
neu muon thay tat ca J trong string phai dung toi bieu thuc chinh quy
tim bang bieu thuc chinh quy: replace(/J/g, 'K')
convert to upper case
myString.toUpperCase()
convert to lower case
myString.toLowerCase()
trim
myString.trim(): loai bo blankspace thua
split
quy doi danh sach dang string sang array
ex
var list = 'Milk, Avocado, Watermelon'
list.split(', ') | diem chung la ", " dua vao do no se tach
truong hop muon tach tat ca cac chu trong mot tu
ex name = 'Coco'
name.split('') => ["C", "o", "c", "o"]
get a character by index
myString.charAt(index) */
// *** JS number methods ********************
//console.log(Number.parseFloat('237,22'));

// **** Array *******************************
// JavaScript Array methods
// var languages = ['A', 'B', 'C']
// 1. To string
// console.log(languages.toString()) //=> A,B,C tu them dau ,
// 2. Join
// console.log(languages.join()) //giong toString nhung co them 1 parameter de dieu chinh ngan cach
//ex
// console.log(languages.join('')) //=> ABC
// console.log(languages.join('|')) //=> A|B|C
// 3. Pop
// console.log(languages.pop()) //xoa phan tu cuoi mang va tra ve phan tu da xoa
// console.log(languages) //=> ["A", "B"]
// khi khong con phan tu de xoa no se tra ve undefined
// 4. Push
// console.log(languages.push('D')) //tra ve do dai moi them
// console.log(languages) //=> ["A", "B", "C", "D"]
// 5. Shift
// console.log(languages.shift()) // xoa va tra ve phan tu dau mang
// console.log(languages) //=> ["B", "C"]
// khi khong con de xoa se tra ve undefined
// 6. Unshift
// console.log(languages.unshift('D')) // them D vao dau mang va tra ve do dai moi
// console.log(languages) //=> ["D", "A", "B", "C"]
// 7. Splicing
// xoa 1 phan tu bat ky trong array
// console.log(languages.splice(index, deleteCount)) //tu vi tri index se xoa di deleteCount phan tu cua mang
// languages.splice(1) //=> ["A"]
// languages.splice(1,1) //=> ["A", "C"]
// languages.splice(1,2) //=> ["A"]
// languages.splice(1, 0, 'E') // chen E vao vi tri index 1 => ["A", "E", "B", "C"]
// languages.splice(1, 1, 'E') //xoa B thay bang E => ["A", "E", "C"]
// languages.splice(1, 2, 'E', 'F') //=> ["A", "E", "F"]
// console.log(languages)
// 8. concat
// noi array
// var a1 = ['A', 'D'],
//     a2 = ['C', 'D']
// console.log(a1.concat(a2)) //=> ["A", "B", "C", "D"] | a1 goi la mang goc va mang a2 duoc noi them vao
// console.log(a2.concat(a1)) //=> ["C", "D", "A", "B"]
// 9.Slicing
// var a1 = ['A', 'B', 'C']
// console.log(a1.slice(start, end))
// console.log(a1.slice(1, 2)) //=> ["B"]
// console.log(a1.slice(1)) //=> ["B", "C"]
// console.log(a1.slice(0)) //=> ['A', 'B', 'C'] (copy mang)
// console.log(a1.slice(-2, -1)) //=> ["B"]
// ******* function ****************************
/* function nameFunction(){
    ...
}
call: nameFunction() */
// var x = 1, y = 2;
// function write(a, b) { // a,b are parameters
//     console.log(a + b)
// }
// write(x, y) // a,b are arguments

//doi tuong arguments
/* ex
function consoleLog(){
    console.log(arguments)
}
consoleLog('A') //=> ["A"] */

// function consoleLog(){
//     var myString = ''
//     for (var par of arguments){
//         myString +=`${par} - `
//     }
//     console.log(myString)
// }
// consoleLog('A','B','C') //=> A - B - C -

// ****** return in function ****************
// giong c++
