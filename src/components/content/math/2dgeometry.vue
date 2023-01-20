<script>
    export default {
        data() {
            return {
                name: 'Vue.js',
                a_geo: "Side",
                active: "squ",

                img_geo: "square.png",
                base_assets: "src/assets/content/math/"
            }
        },
        methods: {
            count2dgeo(method) {
                let a = parseInt(document.getElementById("number_a_2dgeo").value);
                let a_style = document.getElementById("number_a_2dgeo").style;
                let b = "null"
                let b_style
                let c = "null"
                let c_style
                let single_side = method != "squ" && method != "cir" && method != "pen" && method != "hex";

                //FIx this shit...
                //Input id cant be detected
                if(single_side){
                    b = parseInt(document.getElementById("number_b_2dgeo").value);
                    b_style = document.getElementById("number_b_2dgeo").style;
                }
                if(method == "tra"){
                    c = parseInt(document.getElementById("number_c_2dgeo").value);
                    c_style = document.getElementById("number_c_2dgeo").style;
                }
                
                var res

                //Check input value
                if(isNaN(a)){
                    a_style.border = "2px solid #3EAF7C";
                    res = "-";
                } else if((single_side) && isNaN(b)){
                    b_style.border = "2px solid #3EAF7C";
                    res = "-";
                } else {
                    a_style.border = "none";
                    
                    if(single_side){
                        b_style.border = "none";
                    }
                    
                    if(method == "squ"){
                        res = a * a;
                    } else if(method == "tri" || method == "dia" || method == "kit"){
                        res = 0.5 * a * b;
                    } else if(method == "rec" || method == "par"){
                        res = a * b;
                    } else if(method == "tra"){
                        res = 0.5 * (a + b) * c;
                    } else if(method == "pen"){
                        res = 1/4 * 2.24 * (5 + 2 * 2.24) * a * a;
                    } else if(method == "hex"){
                        res = 3/2 * 1.73 * a * a;
                    } else if(method == "cir"){
                        res = 3.14 * a * a;
                    } 
                }

                document.getElementById("result_2dgeo").value = res;
            },
        }
    }
</script>

<template>
    <div class="container">
        <h6 class="container-title">2D Geometry</h6>
        <h6 class="container-title">Method</h6>

        <!--Toogle geometry-->
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" 
                    @click="a_geo='Side'; active='squ'; img_geo='square.png'; count2dgeo(active);"
                    >Square</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" 
                    @click="a_geo='Base'; b_geo='Height'; active='tri'; img_geo='triangle.png'; count2dgeo(active);"
                    >Triangle</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" 
                    @click="a_geo='Length'; b_geo='Width'; active='rec'; img_geo='rectangle.png'; count2dgeo(active);"
                    >Rectangular</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count"
                    @click="a_geo='Top Base'; b_geo='Bottom Base'; c_geo='Height'; active='tra'; img_geo='trapezoid.png'; count2dgeo(active);"
                    >Trapezoid</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count"
                    @click="a_geo='Diagonal 1'; b_geo='Diagonal 2'; active='dia'; img_geo='diamond.png'; count2dgeo(active);"
                    >Diamond</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count"
                    @click="a_geo='Base'; b_geo='Height'; active='par'; img_geo='parallelogram.png'; count2dgeo(active);"
                    >Parallelogram</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count"
                    @click="a_geo='Diagonal 1'; b_geo='Diagonal 2'; active='kit'; img_geo='kite.png'; count2dgeo(active);"
                    >Kite</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count"
                    @click="a_geo='Radius'; active='cir'; img_geo='circle.png'; count2dgeo(active);"
                    >Circle</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count"
                    @click="a_geo='Base'; active='pen'; img_geo='pentagon.png'; count2dgeo(active);"
                    >Pentagon</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count"
                    @click="a_geo='Side'; active='hex'; img_geo='hexagon.png'; count2dgeo(active);"
                    >Hexagon</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 col-md-7 col-sm-12">
                <h6 class="container-title">Geometry</h6>

                <!--Geometry view-->
                <div class="geo-holder">
                    <img class="img img-fluid" :src="base_assets + img_geo" width="280" height="280" />
                    <template v-if="active == 'tri'">
                        <div class="geo-input" style="bottom:0px; left:37%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_a_2dgeo">
                                <label for="floatingInput">{{ a_geo }}</label>
                            </div>
                        </div>
                        <div class="geo-input" style="top:120px; left:37%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_b_2dgeo">
                                <label for="floatingInput">{{ b_geo }}</label>
                            </div>
                        </div>
                    </template>
                    <template v-else-if="active == 'rec' || active == 'dia'">
                        <div class="geo-input" style="top:10px; left:36%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_a_2dgeo">
                                <label for="floatingInput">{{ a_geo }}</label>
                            </div>
                        </div>
                        <div class="geo-input" style="bottom:100px; left:30px;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_b_2dgeo">
                                <label for="floatingInput">{{ b_geo }}</label>
                            </div>
                        </div>
                    </template>
                    <template v-else-if="active == 'tra'">
                        <div class="geo-input" style="top:10px; left:35%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_a_2dgeo">
                                <label for="floatingInput">{{ a_geo }}</label>
                            </div>
                        </div>
                        <div class="geo-input" style="bottom:10px; left:35%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_b_2dgeo">
                                <label for="floatingInput">{{ b_geo }}</label>
                            </div>
                        </div>
                        <div class="geo-input" style="bottom:100px; left:50px;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_c_2dgeo">
                                <label for="floatingInput">{{ c_geo }}</label>
                            </div>
                        </div>
                    </template>
                    <template v-else-if="active == 'par' || active == 'kit'">
                        <div class="geo-input" style="top:10px; left:45%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_a_2dgeo">
                                <label for="floatingInput">{{ a_geo }}</label>
                            </div>
                        </div>
                        <div class="geo-input" style="bottom:100px; left:50px;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_b_2dgeo">
                                <label for="floatingInput">{{ b_geo }}</label>
                            </div>
                        </div>
                    </template>
                    <template v-else-if="active == 'cir' || active == 'pen' || active == 'hex' || active == 'squ'">
                        <div class="geo-input" style="top:100px; right:50px;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_a_2dgeo">
                                <label for="floatingInput">{{ a_geo }}</label>
                            </div>
                        </div>
                    </template>
                </div>

            </div>
            <div class="col-lg-6 col-md-5 col-sm-12">
                <h6 class="container-title">Value</h6>

                <!--Geometry value-->
                <div class="row">
                    <div class="col-lg-6 col-sm-6">
                        <div class="form-floating">
                            <input type="number" class="form-control" id="number_a_2dgeo" @change="count2dgeo(active)">
                            <label for="floatingInput">{{ a_geo }}</label>
                        </div>
                        <div v-if="active == 'tra'">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="number_c_2dgeo" @change="count2dgeo(active)">
                                <label for="floatingInput">{{ c_geo }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <div v-if="active == 'tri' || active == 'rec' || active == 'tra' || active == 'dia' || active == 'par' || active == 'kit'">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="number_b_2dgeo" @change="count2dgeo(active)">
                                <label for="floatingInput">{{ b_geo }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="result_2dgeo" disabled>
                            <label for="floatingInput">Result</label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
    .geo-holder{
        text-align: center;
        justify-content: center;
        position: relative !important;
    }
    .geo-input{
        position: absolute !important;
    }
    .geo-input .form-floating{
        max-width: 90px;
    }
    .form-floating label{
        font-size: 14px;
        white-space: nowrap;
        padding-inline: 10px;
        padding-top: 10px;
    }
</style>