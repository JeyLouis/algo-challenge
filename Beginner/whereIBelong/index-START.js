/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/



function whereIBelong(arr, num) {
  if(arr.length == 0) return 0
  let inFunc = Number(arr.findIndex(element => element >= num))
  if(inFunc === -1){
    return 0
  }else{
    return inFunc
  }
}



module.exports = whereIBelong
