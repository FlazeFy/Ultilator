<script>
    export default {
        data() {
            return {
                name: 'Vue.js',
                random_list: [],
            }
        },
        methods: {
            randomPick(val) {
                let len = val.length - 1 
                let res = Math.round(Math.random() * len)
                let winner = val[res]
                //random_list.splice(res, 1)

                document.getElementById("result_winner").innerHTML = '<h4 class="mt-4">The winner is <br><span class="winner-text">' + winner + '</span></h4>';
                document.getElementById("result_value").value = res;
            }
        }
    }
</script>

<template>
    <div class="container">
        <h6 class="container-title">Random Picker</h6>
        <div class="form-floating">
            <input @change="event => random_list.push(event.target.value)" class="form-control" id="add_data" required>
            <label for="floatingInput">Add Item</label>
        </div>
        <p class="text-primary mb-3">Press Enter or unhover the input to add new item</p>

        <h6>Showing <b class="text-primary">{{ random_list.length }}</b> item</h6>
        <div v-for="(item, index) in random_list" class="d-inline">
            <button class="btn btn-list-random" @click="event => random_list.splice(index, 1)" title="Remove this item">{{ item }}</button>
        </div>

        <div class="mx-auto d-block w-50 my-3 text-center" v-if="random_list.length > 1">
            <button class="btn btn-count py-2" @click="randomPick(random_list)" data-bs-toggle="modal" data-bs-target="#exampleModal">Pick a winner</button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Congratulations 🎉</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" title="Select again with same value"></button>
                        </div>
                        <div class="modal-body position-relative">
                            <img class="img img-fluid" src="https://leonardhors.site/public/assets/img/content/others/congratulations.png" width="280" height="280" />
                            <span id="result_winner"></span>
                            <h6 class="mt-4">Try again?</h6>
                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-count py-2" id="result_value" type="button" @click="event => random_list.splice(event.target.value, 1)" value="1" 
                                        data-bs-dismiss="modal" title="Select again with different value">Remove winner</button>
                                </div>
                                <div class="col">
                                    <button class="btn btn-count py-2" type="button" @click="randomPick(random_list)" 
                                        title="Select again with different value">With same value</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>