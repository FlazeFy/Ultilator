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
                let len = val.length 
                let res = Math.round(Math.random() * len)
                let winner = val[res]
                //random_list.splice(res, 1)

                document.getElementById("result_winner").innerHTML = '<h4 class="mt-4">The winner is <b class="text-primary">' + winner + '</b></h4>';
            }
        }
    }
</script>

<template>
    <div class="container">
        <h6 class="container-title">Random Picker</h6>
        <div class="form-floating">
            <input @change="event => random_list.push(event.target.value)" class="form-control" id="add_data">
            <label for="floatingInput">Add Item</label>
        </div>
        <p class="text-primary mb-3">Press Enter or unhover the input to add new item</p>

        <h6>Showing <b class="text-primary">{{ random_list.length }}</b> item</h6>
        <div v-for="(item, index) in random_list" class="d-inline">
            <button class="btn btn-list-random" @click="event => random_list.splice(index, 1)" >{{ item }}</button>
        </div>

        <div class="mx-auto d-block w-50 my-3 text-center">
            <button class="btn btn-count py-2" @click="randomPick(random_list)">Pick a winner</button>
            <span id="result_winner"></span>
        </div>
    </div>
</template>