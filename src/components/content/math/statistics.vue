<script>
    export default {
        data() {
            return {
                name: 'Vue.js'
            }
        },
        methods: {
            countAll() {
                var list = [10, 21, 49, 23, 14, 31, 14, 19, 14, 57, 38, 28, 68, 88]

                //Length of list
                var n = list.length

                //Mean or average
                var mean = list.reduce((x, a) => x + a, 0) / n

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
                 

                document.getElementById("result_mean").value = (Math.round(mean * 100) / 100).toFixed(2)
                // document.getElementById("result_median").value = median
                // document.getElementById("result_modus").value = modus
                document.getElementById("result_ndata").value = n
                document.getElementById("result_largest").value = largest
                document.getElementById("result_smallest").value = smallest
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
                    <input type="number" class="form-control" id="result_modus" disabled>
                    <label for="floatingInput">Modus</label>
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
        </div>
    </div>
</template>