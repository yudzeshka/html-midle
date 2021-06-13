const a = 18;
const b = 302;
const c= 21;
let isValidSide = true;
const lowerBound = 16;
const upperBound = 74;
const isBetween = (value, lower, upper) => value >= lower && value <= upper;
const isValid = (value) => isBetween (value, lowerBound + 1, upperBound);
if (!isValid (a)) {
    console.log (`Значение ${a} стороны a не может быть использовано для стороны треугольника`);
    isValidSide = false;
}
if (!isValid (b)) {
    console.log (`Значение ${b} стороны a не может быть использовано для стороны треугольника`);
    isValidSide = false;
}
if (!isValid (c)) {
    console.log (`Значение ${c} стороны a не может быть использовано для стороны треугольника`);
    isValidSide = false;
}
if (!isValidSide){
    console.log(`Допустимый диапазон значений (${lowerBound}; ${upperBound}]`);
    return;
}
// function isTriangle (a, b, c) {
// const condAbc = a + b > c;
// const condAcb = a + c > b;
// const condBca = b + c > a;
//     return condAbc && condAcb && condBca;
// }
const isTriangle = (a, b, c) =>  a + b > c && a + c > b && b + c > a

const answer = isTriangle (a, b, c) ? "можно" : "нельзя";
const answerPhrase = `на сторонах a= ${a}, b= ${b}, c= ${c} -${answer} построить треугольник`;
console.log (answerPhrase);