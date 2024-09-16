let name = 'John';
function sayHi() {
  alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); 
// * Hi, Pete เนื่องจาก name มีการ reassign ค่าจาก John => Pete