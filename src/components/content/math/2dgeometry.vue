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

                //FIx this shit...
                //Input id cant be detected
                if(method != "squ"){
                    b = parseInt(document.getElementById("number_b_2dgeo").value);
                    b_style = document.getElementById("number_b_2dgeo").style;
                } 
                var res

                //Check input value
                if(isNaN(a)){
                    a_style.border = "2px solid #3EAF7C";
                    res = "-";
                } else if(method != "squ" && isNaN(b)){
                    b_style.border = "2px solid #3EAF7C";
                    res = "-";
                } else {
                    a_style.border = "none";
                    if(method != "squ"){
                        b_style.border = "none";
                    }
                    
                    if(method == "squ"){
                        res = a * a;
                    } else if(method == "tri"){
                        res = 0.5 * a * b;
                    } else if(method == "rec"){
                        res = a * b;
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
                    >Square {{active}}</button>
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
                <button class="btn btn-count">Trapezoid</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count">Diamond</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count">Parallelogram</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count">Kite</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count">Circle</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count">Pentagon</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count">Hexagon</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 col-md-7 col-sm-12">
                <h6 class="container-title">Geometry</h6>

                <!--Geometry view-->
                <div class="geo-holder">
                    <img class="img img-fluid" :src="base_assets + img_geo" width="240" height="240" />
                    <template v-if="active == 'squ'">
                        <div class="geo-input" style="top:0px; left:37%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_a_2dgeo">
                                <label for="floatingInput">{{ a_geo }}</label>
                            </div>
                        </div>
                    </template>
                    <template v-else-if="active == 'tri'">
                        <div class="geo-input" style="top:0px; left:37%;">
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
                    <template v-else-if="active == 'rec'">
                        <div class="geo-input" style="top:0px; left:37%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_a_2dgeo">
                                <label for="floatingInput">{{ a_geo }}</label>
                            </div>
                        </div>
                        <div class="geo-input" style="bottom:80px; left:10px;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_b_2dgeo">
                                <label for="floatingInput">{{ b_geo }}</label>
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
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <div v-if="active == 'tri' || active == 'rec' ">
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
        max-width: 75px;
    }
</style>