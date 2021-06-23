const sides = [
  { sideName: "a", sideLength: -3 },
  { sideName: "b", sideLength: 400 },
  { sideName: "c", sideLength: 500 },
];

const lowerBound = 0;
const upperBound = 74;
const isBetween = (value, lower, upper) => value >= lower && value <= upper;
const isValid = (value) => isBetween(value, lowerBound + 1, upperBound);

const getErrorMessage = (sideName, sideLength) =>
  `Значение ${sideLength} стороны ${sideName} не может быть использовано для стороны треугольника`;

const getHelpText = (lowerBound, upperBound) =>
  `Допустимый диапазон значений (${lowerBound}, ${upperBound}].`;

const validateSide = (side) =>
  isValid(side.sideLength)
    ? { isValid: true, errorMessage: "" }
    : {
        isValid: false,
        errorMessage: getErrorMessage(side.sideName, side.sideLength),
      };

const validateTriangle = (sides) => {
  const validationResults = sides.map((side) => validateSide(side));
  return {
    isValid: !validationResults.some((result) => result.isValid === false),
    errorMessages: validationResults.map((result) => result.errorMessage),
  };
};
const validationResult = validateTriangle(sides);

if (!validationResult.isValid) {
  console.log(validationResult.errorMessages.join("\n"));
  console.log(getHelpText(lowerBound, upperBound));
  return;
}

const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

const answer = isTriangle(
  sides[0].sideLength,
  sides[1].sideLength,
  sides[2].sideLength
);

const answerToText = (answer) => (answer ? "можно" : "нельзя");

const sideToText = (side) => `${side.sideName} = ${side.sideLength}`;

const triangleToText = (sides) =>
  sides.map((side) => sideToText(side)).join(", ");

const getAnswerPhrase = (sides, answer) => {
  return `на сторонах ${triangleToText(sides)} -${answerToText(
    answer
  )} построить треугольник`;
};
triangleToText(sides);
console.log(getAnswerPhrase(sides, answer));
