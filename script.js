//menghitung BMI

function hitungBmi(){
    const weight = parseInt(document.getElementById('bmi-weight').value);
    const height = parseInt(document.getElementById('bmi-height').value);
    const bmiScore = document.getElementById('bmi-score');
    const bmiRating = document.getElementById('bmi-rating');
    const desc = document.getElementById('bmi-ratingDesc');
    let weight_status = false;
    let height_status = false;

    // validasi input
    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('error-weight').innerHTML = 'please provide a valid weight';
    } else{
        document.getElementById('error-weight').innerHTML = '';
        weight_status = true;
    }

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('error-height').innerHTML = 'please provide a valid height';
    } else{
        document.getElementById('error-height').innerHTML = '';
        height_status = true;
    }

    // BMI Categories:
    //     Underweight = <18.5
    //     Normal weight = 18.5 – 24.9
    //     Overweight = 25 – 29.9
    //     Obesity = BMI of 30 or greater

    if(weight_status && height_status){
        // BMI = Berat Badan/(Tinggi Badan/100)^2
        bmi = (weight / (Math.pow(height / 100, 2))).toFixed(2);

        // BMI Categories:
        if(bmi < 18.5){
            bmiScore.innerHTML = 'Your BMI score is : ' + bmi;
            bmiRating.innerHTML = 'Underweight';
            desc.innerHTML = 'Your BMI result indicates you are in the underweight category.';
        } else if(bmi >= 18.5 && bmi <= 24.9){
            bmiScore.innerHTML = 'Your BMI score is : ' + bmi;
            bmiRating.innerHTML = 'Healthy Weight';
            desc.innerHTML = 'Great! Your BMI indicates a healthy weight.';
        } else if(bmi >= 25 && bmi <= 29.9){
            bmiScore.innerHTML = 'Your BMI score is : ' + bmi;
            bmiRating.innerHTML = 'Overweight';
            desc.innerHTML = 'Your BMI result indicates you are in the overweight category.';
        } else{
            bmiScore.innerHTML = 'Your BMI score is : ' + bmi;
            bmiRating.innerHTML = 'Obese';
            desc.innerHTML = 'Your BMI result indicates you are in the obese category.';
        }
    } else{
        hasil.innerHTML = '';
    }
} 

//fungsi reset
function resetBmi(){
    document.getElementById('myForm').reset();
    hasil.innerHTML = '';
}
