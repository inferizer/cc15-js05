function sayHi(age) {
    if (age < 12) alert("Hi kid");
  }
  console.log(sayHi); 
  // * show function body และไม่ทำงาน เพราะไม่ได้เรียกใช้อย่างถูกต้อง
  console.log(sayHi(10)); 
  // ** Hi Kid (side effect) //คืนค่าเป็น undefined

function sayHi(name) {
    if (name) {
      alert("Hi " + name);
      return;
    } else {
      return "Who are you";
    }
  }
  console.log(sayHi("John")); 
  // *** Hi John (side effect) //คืนค่าเป็น undefined
  console.log(sayHi()); 
  // **** Who are you // ไม่ได้ให้ค่า parameter