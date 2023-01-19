<script>
    function countSimpleMath(method) {
        a = document.getElementById("number_a_simpleMath").value;
        b = document.getElementById("number_b_simpleMath").value;

        if(method == "py"){
			res = Math.sqrt(a*a + b*b);
        } else if(method == "+"){
            res = (a + b);
        } else if(method == "-"){
            res = (a - b);
        } else if(method == "*"){
            res = (a * b);
        } else if(method == "/"){
            res = (a / b);
        } else if(method == "mod"){
            res = (a + b);
        } else if(method == "gcd"){
            a = Math.abs(a);
			b = Math.abs(b);
			while(b) {
				var c = b;
				b = a % b;
				a = c;
			}
            res = a;
        } else if(method == "lcm"){
            a = Math.abs(a);
			b = Math.abs(b);
			function gcd_2(){
				while(b) {
					var c = b;
					b = a % b;
					a = c;
				}
				return a;
			}
			res = Math.abs((a * b) / gcd_2(a, b));
        }

        document.getElementById("result_simpleMath").value = Math.sqrt(res);
    }
</script>

<template>
    <div class="container">
        <h6 class="container-title">Simple Math</h6>
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="number_a_simpleMath">
                    <label for="floatingInput">Number A</label>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="number_b_simpleMath">
                    <label for="floatingInput">Number B</label>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="result_simpleMath" disabled>
                    <label for="floatingInput">Result</label>
                </div>
            </div>
        </div>
        <h6 class="container-title">Method</h6>
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" @click="countSimpleMath('py')">Pythagoras</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" @click="countSimpleMath('+')">Sum</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" @click="countSimpleMath('-')">Subtraction</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" @click="countSimpleMath('*')">Multiplication</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" @click="countSimpleMath('/')">Division</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" @click="countSimpleMath('mod')">Modulo</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" @click="countSimpleMath('gcd')">GCD</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" @click="countSimpleMath('lcm')">LCM</button>
            </div>
        </div>
    </div>
</template>