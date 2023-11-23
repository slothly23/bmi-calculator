//menghitung BMI
function hitungBmi(){
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const hasil = document.getElementById('hasil');
    let weight_status = false;
    let height_status = false;

    // validasi input
    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('error_weight').innerHTML = 'please provide a valid weight';
    } else{
        document.getElementById('error_weight').innerHTML = '';
        weight_status = true;
    }

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('error_height').innerHTML = 'please provide a valid height';
    } else{
        document.getElementById('error_height').innerHTML = '';
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
            hasil.innerHTML = 'under weight : ' + bmi;
        } else if(bmi >= 18.5 && bmi <= 24.9){
            hasil.innerHTML = 'normal : ' + bmi;
        } else{
            hasil.innerHTML = 'over weight : ' + bmi;
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