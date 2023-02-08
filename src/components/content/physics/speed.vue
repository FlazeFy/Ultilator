<script>
    export default {
        data() {
            return {
                name: 'Vue.js',
                active: [],
                time: "seconds",
                dis: "meters",
                speed: "m/s"
            }
        },
        methods: {
            countSpeed(active, time, dis, speed) {
                let speed_v = parseInt(document.getElementById("speed_value").value)
                let speed_style = document.getElementById("speed_value").style
                let time_v = parseInt(document.getElementById("time_value").value)
                let time_style = document.getElementById("time_value").style
                let dis_v = parseInt(document.getElementById("dis_value").value)
                let dis_style = document.getElementById("dis_value").style

                let speed_u = parseInt(document.getElementById("speed_unit").value)
                let time_u = parseInt(document.getElementById("time_unit").value)
                let dis_u = parseInt(document.getElementById("dis_unit").value)

                function unborderAll() {
                    speed_style.border = "none"
                    time_style.border = "none"
                    dis_style.border = "none"
                }

                function blockAll(){
                    document.getElementById("speed_value").disabled = true
                    document.getElementById("time_value").disabled = true
                    document.getElementById("dis_value").disabled = true
                }

                function convertSpeed(val, from) {
                    //To m/s
                    if(from == "km/h"){ //From kmh
                        return val / 3.6
                    } else if(from == "mp/h"){ //From mph
                        return val / 2.237
                    } else {
                        return val //From m/s
                    }
                }

                function convertTime(val, from) {
                    //To seconds
                    if(from == "minutes"){ //From minute
                        return val * 60
                    } else if(from == "hour"){ //From hour
                        return val * 3600
                    } else {
                        return val //From seconds
                    }
                }

                function convertDis(val, from) {
                    //To meters
                    if(from == "kilometers"){ //From kilometers
                        return val * 1000
                    } else if(from == "miles"){ //From miles
                        return val * 1609
                    } else {
                        return val //From meters
                    }
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
                    res = convertSpeed(speed_v, speed) * convertTime(time_v, time)
                    if(dis == "kilometers"){
                        res = res / 1000
                    } else if(dis == "miles"){
                        res = res / 1609
                    }

                    document.getElementById("dis_value").value = (Math.round(res * 100) / 100).toFixed(2)
                    blockAll()
                }
                if(!isNaN(time_v) && !isNaN(dis_v)){
                    unborderAll()
                    res = convertSpeed(dis_v, dis) / convertTime(time_v, time)
                    if(speed == "km/h"){
                        res = res * 3600
                    } else if(speed == "mp/h"){
                        res = res * 2237
                    }

                    document.getElementById("speed_value").value = (Math.round(res * 100) / 100).toFixed(2)
                    blockAll()
                }
                if(!isNaN(speed_v) && !isNaN(dis_v)){
                    unborderAll()
                    res = convertSpeed(dis_v, dis) / convertTime(speed_v, speed)
                    if(time == "hour"){
                        res = res / 3600
                    } else if(time == "minutes"){
                        res = res / 60
                    }

                    document.getElementById("time_value").value = (Math.round(res * 100) / 100).toFixed(2)
                    blockAll()
                }
            }, 
            resetValue(){
                var speed_v = document.getElementById("speed_value")
                var dis_v = document.getElementById("dis_value")
                var time_v = document.getElementById("time_value")

                speed_v.value = null
                dis_v.value = null
                time_v.value = null
                speed_v.disabled = false
                time_v.disabled = false
                dis_v.disabled = false
            }
        }
    }
</script>

<template>
    <div class="container">
        <h6 class="container-title">Speed, Time, Distance</h6>
        <ul class="text-primary mb-3">
            <li>Fill the value of 2 known variable. and you will know the remaining value</li>
        </ul>
        <div class="row">
            <div class="col-lg-3 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" @change="countSpeed(active, time, dis, speed)" id="time_value">
                    <label for="floatingInput">Time in {{time}}</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4">
               <div class="form-floating">
                    <select class="form-select" id="time_unit" @change="countSpeed(active, time, dis, speed); time=$event.target.value" aria-label="Floating label select example">
                        <option value="seconds" selected>Seconds</option>
                        <option value="minutes">Minutes</option>
                        <option value="hour">Hour</option>
                    </select>
                    <label for="time_unit">Unit (Time)</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="form-floating">
                    <input type="number" class="form-control" id="dis_value" @change="countSpeed(active, time, dis, speed)">
                    <label for="floatingInput">Distance in {{dis}}</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4">
               <div class="form-floating">
                    <select class="form-select" id="dis_unit" @click="countSpeed(active, time, dis, speed); dis=$event.target.value" aria-label="Floating label select example">
                        <option value="meters" selected>Meters</option>
                        <option value="kilometers">Kilometers</option>
                        <option value="miles">Miles</option>
                    </select>
                    <label for="time_unit">Unit (Distance)</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4">
                <div class="form-floating">
                    <input type="number" class="form-control" @change="countSpeed(active, time, dis, speed)" id="speed_value">
                    <label for="floatingInput">Speed in {{speed}}</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4">
                <div class="form-floating">
                    <select class="form-select" id="speed_unit" @click="countSpeed(active, time, dis, speed); speed=$event.target.value" aria-label="Floating label select example">
                        <option value="m/s" selected>m/s</option>
                        <option value="km/h">km/h</option>
                        <option value="mp/h">mph</option>
                    </select>
                    <label for="speed_unit">Unit (Speed)</label>
                </div>
            </div>
            <div class="col-lg-3 col-sm-4 py-3">
                <button class="btn btn-danger w-100 h-100" @click="resetValue">Reset</button>
            </div>
        </div>
    </div>
</template>