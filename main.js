// 1. Let, const
// 2. Template Literals
// 3. Multi-line String
// 4. Arrow function
// 5. Classes
// 6. Default parameter values
// 7. Destruring
// 8. Rest parameters
// 9. Spread
// 10. Enhanced object literals
// 11. Tagged template literal
// 12. Modules

// 1. Var / Let, Const: Scope(phạm vi truy cập các biến), Hosting khái niệm đưa lên trên đầu
// 2. Const / Var, Let: Assignment gán lại giá trị cho các biến khi sử dụng các từ khóa đó

// Code block: if else, loop, {}, ...

// Code thuần: Var
// Thư viện Babel: Const, Let
// Sử dụng const khi định nghĩa biến và không gán lại biến đó
// Sử dụng let khi cần gán lại giá trị cho biến
if(true){
    var course = 'Javascript basic!';
    // let/const course = 'Javascript basic!'; sẽ báo lỗi is not defined sẽ không thể truy cập
    // được từ bên ngoài block nhưng var thì được, block con bên trong const let vẫn truy cập được
 }

 console.log(course)

 {
    const course = 'Javascript basic!';
    // const course = 123;  sẽ bị báo lỗi
    {
        {   
            // nó sẽ ưu tiên ở trong block gần nhât đồng thời không báo lỗi
            const course = 123;
            console.log(course)
        }
    }
 }


// var a; a=1; nhất định nghĩa biến lên trên đầu, var được hỗ trợ hosting còn let/ const không được

a =1;
var a;
// let a; không thể truy cập được a trước khi khởi tạo nó
// const a; thiếu định nghĩa ra thằng const
console.log(a);

var a =1;
// let a=1; var là let đều gán lại được 100
// const a=1; thì không được vì không thể sử dụng toán tử gán lần thứ 2 cho chính cái biến a
a=100;
console.log(a);

const b = {
    name:'JS'
};
//gán được thuộc tính name của obj gán cho b
b.name ='PHP'; 
console.log(b.name)

const courseName = 'JavaScript';
const courseName2 = 'PHP';
// const description = 'Course name: ' + courseName;
// sử dụng toán tử + để nối chuỗi, còn template string dùng nội suy
// `\n` là xuống dòng `\\` là \
const description = `Course name: ${courseName} ${courseName2}`
// const description = `Template string noi suy voi: \${}`
console.log(description);

//multi-lines string
const lines = 'Line 1\n' 
    + 'Line 2\n'
    + 'Line 3\n'
console.log(lines)
//template string
const lines1 = `Line 1
Line 2
Line 3
`;
console.log(lines1);


// Function Declaration
function logger(log){
    console.log(log);
}

logger('Mesage...')

// expression function
const logger1 = function(log){
    console.log(log);
}

logger1('Mesage...1')

// arrow function, với 1 tham số có thể bỏ ()
const logger2 = log => {
    console.log(log);
}

logger2('Message...arrow function')

//sẽ được hiểu sau dấu => là return a+b, nhưng cú pháp =>{} sẽ sai nên nếu
const sum = (a,b)=>a+b;
console.log(sum(2,2));
// muốn đặt bên trong 1 obj thì phải có () bọc 
const sum1 = (a,b)=> ({a:a,b:b});
console.log(sum1(2,2));

//this chính là course2
const abc = {
    name: 'Javascript basic!',
    getName:()=>{
        return this;
    }
};
//undefined
console.log(abc.getName());

const Course3 = function(name, price){
    this.name = name;
    this.price = price;
    this.changeName = function(name){
        this.name = name
    }
}

const jsCourse3 = new Course3('Javascript',1000);
console.log(jsCourse3);
jsCourse3.changeName("PHP")
console.log(jsCourse3);


//Lỗi course4 is not a constructor
// const Course4 = (name, price)=>{
//     this.name = name;
//     this.price = price;
// }

// const jsCourse4 = new Course4('Javascript',1000);
// console.log(jsCourse4);


// viết sẽ rối khi có quá nhiều phương thức, thuộc tính, biến 
function Course4(name,price){
    this.name = name;
    this.price = price;

    this.getName = function(){
        return this.name;
    }

    const isSuccess = false;
}

// class Course4 {
//     constructor(name,price) {
//         this.name = name;
//         this.price = price;
//     }

//     getName(){
//         return this.name;
//     }

//     getPrice(){
//         return this.price;
//     }

//     // run(){
//     //     const isSuccess = false;
//     //     if(...) {
//     //         isSuccess = true;
//     //     }
//     // }
// }

const phpCourse = new Course4('PHP',1000);
const jsCourse = new Course4('JS',1000);

console.log(phpCourse);
console.log(jsCourse);




function Person(name,age){
    this.name = name;
    this.age = age;
}
var person = new Person('Long', 22);
console.log(`Tên: ${person.name}, tuổi: ${person.age}`);

//tạm hiểu lược bỏ chữ function vì nó trùng rồi
class Person1 {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person1('Long', 22);
console.log(`Tên: ${person1.name}, tuổi: ${person1.age}`);


class meo {
    constructor(ten,mausac){
        this.ten = ten,
        this.mausac = mausac
    }
    keu(){
        console.log(`${this.ten} ${this.mausac} kêu meo meo`)
    }
}

var boo = new meo('boo','đen');
boo.keu()
boo.mausac = 'trắng';
boo.keu()


function logger(log) {
    if (typeof log === 'undefined') {
        log = 'Gia tri mac dinh'
    }
    console.log(log)
}
logger()
logger(undefined)

// default parameter vaules 
function logger(log = 'Gia tri mac dinh') {
    console.log(log)
    }
logger(undefined)

// tham số thứ 2 không bắt buộc phải truyền vào
// function logger(log, type = 'log'){
//     console[type](log);
// }
// logger('Message ...', 'warn')



// Enhanced object literals
//1. Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3. Định nghĩa key cho object dưới dạng biến

var name ='Javascript';
var price = 1000;

var course = {
    name,
    price,
    getName(){
        return name;
    }
}

console.log(course.getName())


var fieldName ='new-name';
var fieldPrice ='price';

var course = {
    //chỉ định javascript là name
    name: 'Javascript',
    //lấy value từ biến fieldName
    [fieldName]:'Javascript',
    [fieldPrice]:1000
};
console.log(course)


//Destructuring với object và array

var array = ['JavaScript1','PHP','Ruby']

var [a] = array;

console.log(a)

var [a, ,c] = array
console.log(a,c)
//rest parameters lấy ra phần còn lại, sử dụng nó khi kết hợp với Destructuring
// và sử dụng nó trong việc định nghĩa ra tham số
var [d, ...rest] = array
console.log(rest)


var course = {
    name:'javascript',
    price:1000,
    image: 'image-address',
    children:{
        name:'ReactJS',
    }
}

var {name,... newObject} = course;
console.log(name)
console.log(newObject)

var {name:parentName,children:{name: childrenName}} = course;
console.log(parentName);
console.log(childrenName);

var {name, description1 = ' default description'} = course

console.log(description1)


function logger5(a, ...params){
    //khi sử dụng toán tử rest thì nó là 1 array
    console.log(params);
    console.log(a)
    // console.log(arguments) 
}

console.log(logger5(1,2,3,4,5))


function logger6({name, price, ...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest);
}

logger6({
    name : 'Javascript',
    price: 1000,
    description: 'Description content'
})

function logger7([a,b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

logger7([2, 6, 12, 3, 4, 5])


// Toán tử giải Spread (...)

var array1 = ['javascript', 'Ruby','PHP']

var array2 = ['ReactJS','Dart']

var array3 = [...array2, ...array1]

console.log(array3)


var object1 = {
    name:'Javascript'
};

var object2 = {
    price: 1000
}

var object3 = {
    ...object1, ...object2
}

console.log(object3);


var array = ['Javscript', 'PHP','Ruby','ReactJS']

function logger8(a,b, ...rest){
    for (var i = 0; i<rest.length;i++){
        console.log(rest[i])
        // Ruby, ReactJS
    }
}
// Khi gọi đến hàm, truyền đối số, là spreads, giải nó trong 1 array hoặc 1 object khác
// bỏ đi dấu []
logger8(...array)

function logger9(...a){
    for(var i = 0; i<a.length;i++){
        console.log(a[i])
    }
    console.log(a)
}

logger9(...array)


var logger0 =[...array]
console.log(logger0)


//Tagged template literals

function highlight(...rest){
    console.log(rest)
}

var brand = 'F8';
var course = 'Javascript';

highlight`Học lập trình ${course} tại ${brand}!`;


function highlight1([first, ...strings], ...values){
    console.log('first',first)
    console.log('strings',strings)
    console.log('values',values)
    // console.log(strings.shift())
    return values.reduce(
        // giải [first] bỏ ngoặc vuông
        (acc,curr) =>[...acc,`<span>${curr}</span>`,strings.shift()],
        [first])
        .join('')
    // => {return abc} viết ngắn là => abc
    // return strings.reduce(
    //     (acc,curr) =>[...acc,`<span>${values.shift()}</span>`,curr],
    //     [first])
    
}
  
var brand = 'F8';
var course = 'Javascript';  

var html = highlight1`Học lập trình ${course} tại ${brand}!`;

console.log(html)


// Modules: Import / Export

// logger11 chính là giá trị import default của logger js
 import logger11 from './logger/index.js'
//  import {logger12} from './logger/index.js'
//  {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
//  }
 import * as constants from './constants.js'

console.log(constants);
logger11('Test message...',constants.TYPE_ERROR)
// logger12('Test message...',constants.TYPE_WARN)
 