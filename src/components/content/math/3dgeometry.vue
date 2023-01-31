<script>
    export default {
        data() {
            return {
                name: 'Vue.js',
                a_geo: "Side",
                active: "cub",

                img_geo: "cube.png",
                base_assets: "https://leonardhors.site/public/assets/img/content/math/"
            }
        },
        methods: {
            count3dgeo(method) {
                let a = parseInt(document.getElementById("number_a_3dgeo").value);
                let a_style = document.getElementById("number_a_3dgeo").style;
                let b = "null"
                let b_style
                let c = "null"
                let c_style
                let single_side = method != "cub" && method != "sph";

                //FIx this shit...
                //Input id cant be detected
                if(single_side){
                    b = parseInt(document.getElementById("number_b_3dgeo").value);
                    b_style = document.getElementById("number_b_3dgeo").style;
                }
                if(method == "cbd"){
                    c = parseInt(document.getElementById("number_c_3dgeo").value);
                    c_style = document.getElementById("number_c_3dgeo").style;
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
                    
                    if(method == "cub"){
                        res = 6 * a * a;
                    } else if(method == "cbd"){
                        res = 2 * ((a * b) + (a * c) + (b * c));
                    } else if(method == "sph"){
                        res = 4 * 3.14 * a * a;
                    } else if(method == "cyl"){
                        res = 2 * 3.14 * a * (b + a);
                    } else if(method == "con"){
                        res = 3.14 * a * (a + b);
                    } else if(method == "spy"){
                        res = a * a + (1/2 * a * b * 4);
                    } else if(method == "pri"){
                        res = 2 * ( 1/2 * a * b) + (a * 3) * b; //Equilateral Triangular Prism  
                    } 
                }

                document.getElementById("result_3dgeo").value = res;
            },
        }
    }
</script>

<template>
    <div class="container">
        <h6 class="container-title">3D Geometry</h6>
        <h6 class="container-title">Method</h6>

        <!--Toogle geometry-->
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" 
                    @click="a_geo='Side'; active='cub'; img_geo='cube.png'; count3dgeo(active);"
                    >Cube</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" 
                    @click="a_geo='Length'; b_geo='Width'; c_geo='Height'; active='cbd'; img_geo='cuboid.png'; count3dgeo(active);"
                    >Cuboid</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" 
                    @click="a_geo='Radius'; active='sph'; img_geo='sphere.png'; count3dgeo(active);"
                    >Sphere</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" 
                    @click="a_geo='Radius'; b_geo='Height'; active='cyl'; img_geo='cylinder.png'; count3dgeo(active);"
                    >Cylinder</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" 
                    @click="a_geo='Radius'; b_geo='Slant'; active='con'; img_geo='cone.png'; count3dgeo(active);"
                    >Cone</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" 
                    @click="a_geo='Base'; b_geo='Height'; active='spy'; img_geo='squarepyramid.png'; count3dgeo(active);"
                    >Square Pyramid</button>
            </div>
            <div class="col-lg-4 col-sm-6">
                <button class="btn btn-count" 
                    @click="a_geo='Base'; b_geo='Height'; active='pri'; img_geo='prism.png'; count3dgeo(active);"
                    >Prism</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 col-md-7 col-sm-12">
                <h6 class="container-title">Geometry</h6>

                <!--Geometry view-->
                <div class="geo-holder">
                    <img class="img img-fluid" :src="base_assets + img_geo" width="280" height="280" />
                    <template v-if="active == 'cub' || active == 'sph'">
                        <div class="geo-input" style="bottom:100px; right:10%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_a_3dgeo">
                                <label for="floatingInput">{{ a_geo }}</label>
                            </div>
                        </div>
                    </template>
                    <template v-if="active == 'cyl' || active == 'con' || active == 'pri'">
                        <div class="geo-input" style="bottom:10px; right:40%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_a_3dgeo">
                                <label for="floatingInput">{{ a_geo }}</label>
                            </div>
                        </div>
                        <div class="geo-input" style="bottom:100px; right:10%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_b_3dgeo">
                                <label for="floatingInput">{{ b_geo }}</label>
                            </div>
                        </div>
                    </template>
                    <template v-if="active == 'spy'">
                        <div class="geo-input" style="bottom:10px; right:40%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_a_3dgeo">
                                <label for="floatingInput">{{ a_geo }}</label>
                            </div>
                        </div>
                        <div class="geo-input" style="bottom:120px; right:30%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_b_3dgeo">
                                <label for="floatingInput">{{ b_geo }}</label>
                            </div>
                        </div>
                    </template>

                    <template v-if="active == 'cbd'">
                        <div class="geo-input" style="bottom:0px; left:25%;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_a_3dgeo">
                                <label for="floatingInput">{{ a_geo }}</label>
                            </div>
                        </div>
                        <div class="geo-input" style="bottom:15px; right:20px;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_b_3dgeo">
                                <label for="floatingInput">{{ b_geo }}</label>
                            </div>
                        </div>
                        <div class="geo-input" style="bottom:50px; left:0px;">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="numberGeo_c_3dgeo">
                                <label for="floatingInput">{{ c_geo }}</label>
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
                            <input type="number" class="form-control" id="number_a_3dgeo" @change="count3dgeo(active)">
                            <label for="floatingInput">{{ a_geo }}</label>
                        </div>
                        <div v-if="active == 'cbd'">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="number_c_3dgeo" @change="count3dgeo(active)">
                                <label for="floatingInput">{{ c_geo }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <div v-if="active == 'cbd' || active == 'con' || active == 'cyl' || active == 'spy' || active == 'pri'">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="number_b_3dgeo" @change="count3dgeo(active)">
                                <label for="floatingInput">{{ b_geo }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="result_3dgeo" disabled>
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