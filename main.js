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


// var a; a=1; nhất định nghĩa biến lên trên đầu, var được hỗ trợ hoisting còn let/ const không được

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


// viết sẽ rối khi có quá nhiều thuộc tính,phương thức, biến 
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


function logger321(log) {
    if (typeof log === 'undefined') {
        log = 'Gia tri mac dinh'
    }
    console.log(log)
}
logger321()
logger321(undefined)

// default parameter values 
function logger123(log = 'Gia tri mac dinh') {
    console.log(log)
    }
logger123(undefined)

// tham số thứ 2 không bắt buộc phải truyền vào
function logger222(log, type = 'log'){
    console[type](log);
}
logger222('Message ...', 'warn')



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

// Sử dụng rest trong việc định nghĩa ra tham số, còn khi truyền đối số, gọi 
// đến hàm truyền đối số thì nó sẽ spread, khi sử dụng nó trong việc giải nó trong
// 1 array, hoặc 1 object khác.

var array = ['Javscript', 'PHP','Ruby','ReactJS']

function logger8(a,b, ...rest){
    console.log(rest)
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
    console.log('values',values) // ['Javasciprt', 'F8']
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

// import viết thẳng chữ mà không có destructuring thì hiểu ngay chúng ta đang
// import cái mà module đang export default

import logger11 from './logger/index.js'
 
// import constants from './constants.js' nó sẽ báo lôi vì không phải là export default 
// nên không thể import constant được. 

// Nếu không muốn sử dụng destructuring thì có thể sử dụng * as ... nó lấy ra tất cả các
// export con thành 1 object dạng module, bên trong cung cấp các value đã import ra ngoài
 import * as constants from './constants.js'

 console.log(constants);
 logger11('Test message...',constants.TYPE_ERROR)
 
// Khi import destructuring như sau thì hiểu là đang import những cái không phải là 
// export defautl mà chỉ là export const
import  {
    TYPE_LOG,
    TYPE_WARN, 
    TYPE_ERROR
 } from './constants.js'
logger11('Test message...',TYPE_WARN)
 
// ý tưởng là không muốn import logger từ file logger.js nữa
//  import {logger12} from './logger/index.js'
// logger12('Test message...',constants.TYPE_WARN)


//Optional chaining cú pháp bao gồm ? và . (?.)

var obj = {
    name: 'Alice',
    cat: {
        name:'Dinah',
        cat2: {
            name:'Dinah2',
            cat3: {
                name:'Dinah3',
            }
        }
    }
};

//thường thì dùng obj.cat nhưng cũng có thể dùng
obj['cat']?.['cat2']

if(obj.cat?.cat2?.cat3){
    console.log(obj.cat.cat2.cat3.name)
}


//enhanced object literal
var obj = {
    getName(value){
        console.log(value)
    }
}

obj.getName?.(123)


// thêm thuộc tính cho obj
var course = {
    a: {},
    chenvoobject :function(){
        this.a['Key1'] = true
},
    // aaa: function(){Object.defineProperty(course,"fff",{value: "123"})},
    defi: function(){
        Object.defineProperty(course, "key2", {
            configurable: false,
            value: "2"
        });
    },
    start(){
        course.chenvoobject()
        course.defi()
    }
}

course.a['Key3'] = false
Object.defineProperty(course, "Key4", {
    configurable: false,
    value: "4"
});
course.key0 = false
course.start()
console.log(course)

var test1 = {a:'aaa',b:{'bb':'bbb'}, c:{'cc':'ccccc'},d:{'dd':'ddd'},f:'fff',
    g:'gg',h:{'hh':'hhhhh'},
        currentI : 0,
        songs: [
            {ccc:'ccc'},
            {ddd:'ddd'},
            {eee:'eee'},
        ],
        zzz:{
            vvv:{
                qqq:[
                    {rrr:'rrr'},
                    {ttt:'ttt'},
                    {yyy:'yyy'}
                ]
            }
        },
        abc: function(){
            console.log(test1.songs[1])
            return test1.songs[test1.currentI]
        }
}
var test2 = {}
console.log(test1.a)
console.log(test1.b.bb) // bbb
console.log(test1.b['bb']) // bbb
console.log(test1.b)
console.log(test1['b'])
console.log(test1.songs[test1.currentI])
console.log(test1.zzz.vvv.qqq[1])
test2[test1.a] =[test1.b]
test2[test1.a].push(test1.c)
test2[test1.d] =test1.c
test2[test1.f] =test1.c
test2[test1.g]=[test1.h]
test1.f ='abc'
console.log(test1)
console.log(test2)
console.log(test1.a)
test1.abc()
for(var key in test1) {console.log(test1[key])}
for(var key in test1) {console.log(key)}

var test3 = [{name:'JS',price:10},{name:'React',price:10}]
for(var key in test3) {console.log(key)} //0 1
for(var key of test3) {console.log(key)} // {} {}


console.log(new Date().getFullYear())
console.log(new Date())

function getRandNumbers(min,max,length){
    
    var arr = [];
    for (var i = 0; i < length ; i++){
        var valueRandom = Math.random() * (max-min) + min;
        arr[i] = valueRandom;
    }
    return arr;
}

console.log(getRandNumbers(1,10,3))

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(sports){
    return sports.filter(function(sport){
        return sport.like > 5
    })
}


// Kỳ vọng
console.log(getMostFavoriteSport(sports))


var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  
  function calculateRating(watchList){
    var cn = watchList.filter(function(list){return list.Director === 'Christopher Nolan'})
    var totalIMDB = cn.reduce(function(total,point){return total += Number(point.imdbRating)},0)
    console.log(totalIMDB)
    var avg = totalIMDB / cn.length
    return avg
  }
  
  // Expected results
  console.log(calculateRating(watchList));


  let password = 'short';
  console.log(password.length > 7 &&  'Strong' || 'Weak');


  var person = {
    name:'hue',
    getName: function(){
        return this.name
     }
}

console.log(person.getName()) // 'hue'

var getNamePerson = person.getName.bind(person)
console.log(getNamePerson())

// Từ khóa this trong js đề cập đến đối tượng mà nó thuộc về
// Đặc tính
// 1. Trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
// 2. Đứng ngoài phương thức, this tham chiếu tới đối tượng global (window)

// Lưu ý
// this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
// this trong 1 hàm là undefined khi ở strict mode
// Các phương thức bind() call() apply() có thể tham chiếu this tới đối tượng khác


// Khi 1 thuộc tính là 1 hàm nhưng nó thuộc 1 đối tượng thì thuộc tính đó sẽ được 
// gọi là phương thức
// This trỏ đến đối tượng mà nó thuộc về

// phân biệt các hàm/method được gọi. Được gọi qua object.method() thì this là object.
// Được gọi theo tenHam() thì this là window. Mỗi hàm luôn có context riêng, hàm trong method 
//cũng có context riêng của nó.
 function Car (name, color, weight) {
    this.name = name
    this.color = color
    this.weight = weight
    this.run = function() {
        console.log('Running ...', this)
    }
 }

 Car.prototype.play = function() {
        console.log(this)
 }

 var mercedesS450 = new Car('Mercedes S450', 'Black', '1000kg')
 
  console.log(mercedesS450.run())
  console.log(mercedesS450.play())
// Ví dụ về this trong arrow function
  Car.prototype.play = function() {
    // console.log(this.name)
    // Context, mỗi hàm luôn có context riêng, môi trường để chạy hay ngữ cảnh là context
    // Arrow function không có context riêng của nó, nó sẽ sử dụng context của
    // đối tượng bên ngoài chứa nó
    // Đối với arrow function thì thằng this sẽ trả về chính cái this bên ngoài
    // chính là ô tô
    var test = () => {
        console.log(this)
    }
    test()
 }

 console.log(mercedesS450.play())

 // Ví dụ về this trong function

 Car.prototype.play = function() {
    // Context
    function test() {
        console.log(this) // this sẽ là đối tượng window
    }
    test()
 }

 var mercedesS4501 = new Car('Mercedes S450', 'Black', '1000kg')

 console.log(mercedesS4501.play())


 console.log('JS ABC'.indexOf('JS',1) !== -1)
 console.log(-1 !== -1)


// So sánh ===
// 1. If type(x) is different from type(y), return false
// 2. If type(x) is Number or BigInt, then
//      a. Return !Type(x)::equal(x,y)
// 3. Return !SameValueNonNumeric(x,y) nghĩa là chúng ta so sánh === của những giá trị không phải là number

// Number::equal(x,y)

// 1. If x is NaN, return false.
// 2. If y is NaN, return false.

// Ví dụ NaN === 'asdasd' false
// NaN === 423423 false
// NaN === NaN false

// So sánh == 
// Nếu cùng kiểu dữ liệu thì nó sẽ chuyển từ == về thành ===
// 1. If type(x) is the same as type(y)
// return the result of performing Strict Equality Comparison x === y

// Nếu khác kiểu dữ liệu
// 2. If x is null and y is undefined, return true
// 3. If x is undefined and y is null, return true

// Nếu x là số, y là chuỗi, thì sẽ ép kiểu y về số: 1 == '1'
// 5. If type(x) is Number and type(y) is String, return the result of the comparison x ==! ToNumber(y)

// Nếu x là kiểu dữ liệu boolean nó sẽ ép kiểu về số rồi so sánh với y
// 9. If type(x) is Boolean, return the result of comparison ToNumber(x) ==! y
// Ví dụ Number(true) == 1, Number(false) == 0

var inputArray = [3, 6, -2, -5, 7, 3]
let adjacentElementsProduct = (inputArray) =>{
    let len = inputArray.length;
    let max = 0;
    for(let i = 0; i < len - 1; i++){
        let largets = inputArray[i] * inputArray[i+1];
        if(max < largets) max = largets;
    }
    return max;
    
}

console.log(adjacentElementsProduct(inputArray))

let adjacentElementsProduct1 = (inputArray, len = inputArray.length, guard = inputArray[0] * inputArray[1]) => {
    for(let i = 1; i < len - 1; i++){
        guard = Math.max(guard, inputArray[i] * inputArray[i+1]);
    }
    return guard;
}

console.log(adjacentElementsProduct1(inputArray))


console.log(Number(false))

console.log(Number(true))

var score = [700, 8, 9, 10, 3];

score.sort(function(a,b){
    console.log(`comparing ${a},${b}`)
    return a-b
})

console.log(score)

//  Nếu compareFunction(a, b) trả về < 0 thì a sẽ đứng trước b.
// Nếu compareFunction(a, b) trả về > 0 thì a sẽ đứng sau b.
// Nếu compareFunction(a, b) trả về = 0 thì không sắp xếp (giữ nguyên thứ tự).
var yyy=['a','A','a', 'Apples', 'Watermelon', 'Bananas', 'cherries','b', 'Ba', 'c', 'd', 'CC']
console.log(yyy.sort(function(a,b){return a.localeCompare(b,'en',{sensitivity:'base'})}))
console.log(yyy.sort((a,b)=> a.localeCompare(b,'en',{ sensitivity:'base'})))
console.log( 0 ||  'weak')

console.log('aaa'.localeCompare('A','en',{sensitivity:'base'}))

