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