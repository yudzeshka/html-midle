const a = 188;
const b = 302;
const c= 218;
const lowerBound = 16;
const upperBound = 74;
const isBetween = (value, lower, upper) => value >= lower && value <= upper;
const isValid = (value) => isBetween (value, lowerBound + 1, upperBound);

const getErrorMessage = (sideName, sideLength) => `Значение ${sideLength} стороны ${sideName} не может быть использовано для стороны треугольника`

let isValidSide = true;

const isSideValid = (sideLength, sideName) => {
    if (!isValid (sideLength)) {
        console.log (getErrorMessage (sideName, sideLength));
        return false;
    }
    return  true;
};
const sides ({sideName : "a" , sideLength : 188}, {sideName : "b" , sideLength : 302}, {sideName : "c" , sideLength : 218});
for (let i=1; i < sides.Length; i++ )

isValidSide = isSideValid  (a, "a") ,
isValidSide = isSideValid  (b, "b") ,
isValidSide = isSideValid  (c, "c") ,
console.log ()

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