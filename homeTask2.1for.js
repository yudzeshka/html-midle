for (let a=1; a<=100; a++) {
    for (let b=1; b<=100; b++) {
       for (let c=1; c<=100; c++) {
        function isTriangle (a, b, c) { return a + b > c && a + c > b && b + c > a};
        if (isTriangle (a, b, c)) console.log (`На сторонах a= ${a}, b= ${b}, c= ${c} -можно построить треугольник`)
    }
  }
}