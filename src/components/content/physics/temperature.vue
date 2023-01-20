<script>
    export default {
        data() {
            return {
                name: 'Vue.js'
            }
        },
        methods: {
            countTemp() {
                let a = parseInt(document.getElementById("number_a_temp").value);
                let opt = document.getElementById("tempFrom").value;
			    let opt2 = document.getElementById("tempTo").value;
                let a_style = document.getElementById("number_a_temp").style;
                var res

                if(isNaN(a)){
                    a_style.border = "2px solid #3EAF7C";
                    res = "-";
                } else {
                    a_style.border = "none";

                    // Celcius to Fahrenheit
                    if((opt == 'c') && (opt2 == 'f')){
                        res = (a * 9/5) + 32;
                    // Celcius to Kelvin
                    } else if((opt == 'c') && (opt2 == 'k')){
                        res = (a + 273.15);
                    // Celcius to Reamur
                    } else if((opt == 'c') && (opt2 == 'r')){
                        res = (a * 4 / 5);

                    // Fahrenheit to Celcius
                    } else if((opt == 'f') && (opt2 == 'c')){
                        res = (5/9 * (a-32));
                    // Fahrenheit to Reamur
                    } else if((opt == 'f') && (opt2 == 'r')){
                        res = (a - 32) * 4/9;
                    // Fahrenheit to Kelvin
                    } else if((opt == 'f') && (opt2 == 'k')){
                        res = (a - 32) * 5/9 + 273.15;
                    
                    // Reamur to Celcius
                    } else if((opt == 'r') && (opt2 == 'c')){
                        res = (a / 4 * 5);	
                    // Reamur to Fahrenheit
                    } else if((opt == 'r') && (opt2 == 'f')){
                        res = (a * 9/4) + 32;
                    // Reamur to Kelvin
                    } else if((opt == 'r') && (opt2 == 'k')){
                        res = (a / 4 * 5) + 273.15;

                    // Kelvin to Celcius
                    } else if((opt == 'k') && (opt2 == 'c')){
                        res = (a - 273.15);
                    // Kelvin to Fahrenheit
                    } else if((opt == 'k') && (opt2 == 'f')){
                        res = (a - 273.15) * 9/5 + 32;
                    // Kelvin to Reamur
                    } else if((opt == 'k') && (opt2 == 'r')){
                        res = (a - 273.15) * 4/5;
                    }

                    //Same unit
                    if(typeof res == "undefined"){
                        res = a;
                    }
                }

                document.getElementById("result_temp").value = res;
            }
        }
    }
</script>

<template>
    <div class="container">
        <h6 class="container-title">Temperature</h6>
        <div class="row">
            <div class="col-lg-3 col-sm-4">
                <div class="form-floating">
                    <input type="number" class="form-control" @change="countTemp" id="number_a_temp">
                    <label for="floatingInput">Number</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4">
                <div class="form-floating">
                    <select class="form-select" id="tempFrom" @click="countTemp" aria-label="Floating label select example">
                        <option value="c" selected>Celcius</option>
                        <option value="f">Fahrenheit</option>
                        <option value="k">Kelvin</option>
                        <option value="r">Reamur</option>
                    </select>
                    <label for="tempFrom">Unit (From)</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4">
               <div class="form-floating">
                    <select class="form-select" id="tempTo" @click="countTemp" aria-label="Floating label select example">
                        <option value="c">Celcius</option>
                        <option value="f" selected>Fahrenheit</option>
                        <option value="k">Kelvin</option>
                        <option value="r">Reamur</option>
                    </select>
                    <label for="tempTo">Unit (To)</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="form-floating">
                    <input type="text" class="form-control" id="result_temp" disabled>
                    <label for="floatingInput">Result</label>
                </div>
            </div>
        </div>
    </div>
</template>