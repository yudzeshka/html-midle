for (a=1, b=2, c=3; a<=100, b<=100, c<=100; a++, b++, c++  ){
const isTriangle = (a, b, c) =>  a + b > c && a + c > b && b + c > a

const answer = isTriangle (a, b, c) ? "можно" : "нельзя";
const answerPhrase = `на сторонах a= ${a}, b= ${b}, c= ${c} -${answer} построить треугольник`;
console.log (answerPhrase);}