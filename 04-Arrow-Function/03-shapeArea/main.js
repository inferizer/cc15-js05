const square = (n) => {
    n ** 2;
  };
console.log(square(7)); 
  // * undefined // เพราะ {} ต้องมี return สำหรับ return result


const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); 
// ** 28.274333882308138 // ได้ผลลัพธ์ เพราะเขียนบรรทัดเดียวจะ return ค่าหลัง =>