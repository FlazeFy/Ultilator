<script>
    export default {
        data() {
            return {
                name: 'Vue.js'
            }
        },
        methods: {
            countAll() {
                var list = document.getElementById("number_list").value.trim().split(",").map(Number); 

                //Length of list
                var n = list.length

                //Mean or average
                var mean = list.reduce((x, a) => x + a, 0) / n
                mean = (Math.round(mean * 100) / 100).toFixed(2)

                //Largest number
                var largest = 0
                for(var i = 0; i < n; i++){
                    if(largest < list[i]){
                        largest = list[i]
                    }
                }

                //Smallest number
                var smallest = 0
                for(var i = 0; i < n; i++){
                    if(smallest > list[i] || i == 0){
                        smallest = list[i]
                    }
                }

                //Sorting the list
                var sort = list.sort((a, b) => a - b);
                var index_median = Math.round(n / 2) - 1
                var median = 0
                
                //Median
                //Even number
                if(n % 2 != 0){
                    var median = sort[index_median];
                } else { //Odd number
                    var median = (sort[index_median] + sort[index_median + 1]) / 2;
                }

                //Mode
                var mode = 0
                var mode_len = 0
                var unique = list.filter((val, i, a) => a.indexOf(val) === i);
                
                for(var i = 0; i < unique.length; i++){
                    var check = unique[i]
                    var check_len = list.filter(x => x === check).length
                    if(check_len > mode_len){
                        mode = check
                        mode_len = check_len
                    }
                }

                //Standard Deviation
                var dev = 0
                for(var i = 0; i < n; i++){
                    dev += (list[i] - mean) * (list[i] - mean) 
                }

                dev = Math.sqrt(dev / n).toFixed(4)

                //Confidence interval
                var sample = n - 1
                var confidence_level = 0.95 // for now
                var t_distribution = 2.262 // must be inputed by user
                var sdeviation = dev / Math.sqrt(n)
                var upperLimit = mean - t_distribution * sdeviation
                var bottomLimit = mean + t_distribution * sdeviation
                var confidence = parseFloat(upperLimit).toFixed(4) + " to " + parseFloat(bottomLimit).toFixed(4)

                //Quartiles
                //Check this shit!!!
                var q1_index = Math.round((n + 1) / 4) - 1
                var q2_index = Math.round((n + 1) / 2) - 1
                var q3_index = Math.round(3 * (n + 1) / 4) - 1
                
                if(n % 2 != 0){ //Even number
                    if((n + 1) % 4 == 0){
                        q1_index = Math.round((((n - 1) / 4) + ((n + 3) / 4)) / 2)
                        q2_index = Math.round((2 * (n + 1)) / 4)
                        q3_index = Math.round((((3 * n + 1) / 4) + ((3 * n + 5) / 4)) / 2)

                        var q1 = sort[q1_index - 1]
                        var q2 = (sort[q2_index - 2] + sort[q2_index - 1]) / 2
                        var q3 = (sort[q3_index - 2] + sort[q3_index - 1]) / 2
                    } else {
                        var q1 = (sort[q1_index - 1] + sort[q1_index]) / 2
                        var q2 = sort[q2_index]
                        var q3 = (sort[q3_index - 1] + sort[q3_index]) / 2
                    }
                } else { //Odd number
                    if(n % 4 == 0){
                        q1_index = Math.round((n + 2 )/ 4)
                        q2_index = Math.round(((n / 2) + (n / 2 + 1)) / 2)
                        q3_index = Math.round((((3 * n + 1) / 4) + ((3 * n + 5) / 4)) / 2)

                        var q1 = (sort[q1_index - 2] + sort[q1_index - 1]) / 2
                        var q2 = (sort[q2_index - 2] + sort[q2_index - 1]) / 2
                        var q3 = (sort[q3_index - 2] + sort[q3_index - 1]) / 2
                    } else {
                        var q1 = sort[q1_index]
                        var q2 = (sort[q2_index - 1] + sort[q2_index]) / 2
                        var q3 = sort[q3_index]
                    }
                }

                var quartiles = "Q1 : " + q1 + ", Q2 : " + q2 + ", Q3 : " + q3

                document.getElementById("result_mean").value = mean
                document.getElementById("result_median").value = median
                document.getElementById("result_mode").value = mode
                document.getElementById("result_ndata").value = n
                document.getElementById("result_largest").value = largest
                document.getElementById("result_smallest").value = smallest
                document.getElementById("result_range").value = largest - smallest
                document.getElementById("result_confidence").value = confidence
                document.getElementById("result_sdeviation").value = dev
                document.getElementById("result_quartiles").value = quartiles
            }
        }
    }
</script>

<template>
    <div class="container">
        <h6 class="container-title">Statistics</h6>
        <div class="form-floating">
            <textarea @change="countAll()" class="form-control" id="number_list"></textarea>
            <label for="floatingInput">List Number</label>
        </div>
        <p class="text-primary">To separate number, you can use comma "," between two number</p>

        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="result_mean" disabled>
                    <label for="floatingInput">Mean</label>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="result_median" disabled>
                    <label for="floatingInput">Median</label>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="result_mode" disabled>
                    <label for="floatingInput">Mode</label>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="result_ndata" disabled>
                    <label for="floatingInput">N data</label>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="result_smallest" disabled>
                    <label for="floatingInput">Smallest</label>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="result_largest" disabled>
                    <label for="floatingInput">Largest</label>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="result_range" disabled>
                    <label for="floatingInput">Range</label>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="result_sdeviation" disabled>
                    <label for="floatingInput">Standard Deviation</label>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="form-floating">
                    <input type="text" class="form-control" id="result_confidence" disabled>
                    <label for="floatingInput">Confidence Interval</label>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="form-floating">
                    <input type="text" class="form-control" id="result_quartiles" disabled>
                    <label for="floatingInput">Quartiles</label>
                </div>
            </div>
        </div>
    </div>
</template>