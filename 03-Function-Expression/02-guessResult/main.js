const showModal = alert;
showModal("Execute modal"); 
// * Execute modal

const showModal = alert();
showModal("Execute modal"); 
// ** Error เพราะ function expression ไม่มี hosting