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