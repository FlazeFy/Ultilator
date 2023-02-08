<script>
    export default {
        data() {
            return {
                name: 'Vue.js',
                active: []
            }
        },
        methods: {
            countSpeed(active) {
                let speed_v = parseInt(document.getElementById("speed_value").value)
                let speed_style = document.getElementById("speed_value").style
                let time_v = parseInt(document.getElementById("time_value").value)
                let time_style = document.getElementById("time_value").style
                let dis_v = parseInt(document.getElementById("dis_value").value)
                let dis_style = document.getElementById("dis_value").style

                function unborderAll() {
                    speed_style.border = "none"
                    time_style.border = "none"
                    dis_style.border = "none"
                }
                
                var res

                //Input validator
                if(isNaN(speed_v)){
                    speed_style.border = "2px solid #3EAF7C"
                } else {
                    speed_style.border = "none"
                }

                if(isNaN(time_v)){
                    time_style.border = "2px solid #3EAF7C"
                } else {
                    time_style.border = "none"
                }

                if(isNaN(dis_v)){
                    dis_style.border = "2px solid #3EAF7C"
                } else {
                    dis_style.border = "none"
                }

                //Count result
                if(!isNaN(speed_v) && !isNaN(time_v)){
                    unborderAll()
                }
                if(!isNaN(time_v) && !isNaN(dis_v)){
                    unborderAll()
                }
                if(!isNaN(speed_v) && !isNaN(dis_v)){
                    unborderAll()
                }
            

                //document.getElementById("result_temp").value = res;
            }
        }
    }
</script>

<template>
    <div class="container">
        <h6 class="container-title">Speed, Time, Distance {{active.length}}</h6>
        <ul class="text-primary mb-3">
            <li>Fill the value of 2 known variable. and you will know the remaining value</li>
        </ul>
        <div class="row">
            <div class="col-lg-3 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" @change="countSpeed(active)" id="time_value">
                    <label for="floatingInput">Time</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4">
               <div class="form-floating">
                    <select class="form-select" id="time_unit" @click="countSpeed(active)" aria-label="Floating label select example">
                        <option value="1" selected>Seconds</option>
                        <option value="2">Minutes</option>
                        <option value="3">Hour</option>
                    </select>
                    <label for="time_unit">Unit (Time)</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="dis_value" @change="countSpeed(active)">
                    <label for="floatingInput">Distance</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4">
               <div class="form-floating">
                    <select class="form-select" id="dis_unit" @click="countSpeed(active)" aria-label="Floating label select example">
                        <option value="1" selected>Meters</option>
                        <option value="2">Kilometers</option>
                        <option value="3">Miles</option>
                    </select>
                    <label for="time_unit">Unit (Distance)</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4">
                <div class="form-floating">
                    <input type="number" class="form-control" @change="countSpeed(active)" id="speed_value">
                    <label for="floatingInput">Speed</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4">
                <div class="form-floating">
                    <select class="form-select" id="speed_unit" @click="countSpeed(active)" aria-label="Floating label select example">
                        <option value="1" selected>m/s</option>
                        <option value="2">km/h</option>
                        <option value="3">mph</option>
                    </select>
                    <label for="speed_unit">Unit (Speed)</label>
                </div>
            </div>
        </div>
    </div>
</template>