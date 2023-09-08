/**
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
 */
function bmi(weight, height) {
    console.log(weight, height)
    const bmi = Math.round((weight / height**2) / 0.01) * 0.01;
    if(bmi <= 18.5) {
        return "Underweight"
    } else if(bmi > 18.5 && bmi <= 25) {
        return "Normal"
    } else if(bmi > 25 && bmi <= 30) {
        return "Overweight"
    } else if(bmi > 30) {
        return "Obese"
    }
  }
console.log(bmi(77.34253540899141, 1.7583123458877656))


// 15 +
// 25
// 28
// 34
// Random tests
// 30
// 27
// 16
// 23
// 21
// 31
// 29
// 19
// 34
// 23
// 24
// 29
// 25