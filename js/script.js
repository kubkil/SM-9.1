function getTriangleArea (a, h) {
  if (a < 0 || h < 0) {
    return 'Nieprawidłowe dane';
  } else {
    return a*h/2;
  }
}
console.log(getTriangleArea(10, 6));

let getTriangleArea1 = getTriangleArea(-5, 1);
let getTriangleArea2 = getTriangleArea(10, 3);
let getTriangleArea3 = getTriangleArea(4, 6);
