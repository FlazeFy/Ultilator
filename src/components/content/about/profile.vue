<script setup>
  import { ref, computed } from 'vue'
  import { useFetch } from '../../useFetch.js'

  import DocumentationIcon from '../../icons/IconDocumentation.vue'

  const userData = 'https://leonardhors.site/api/user'
  const socialData = 'https://leonardhors.site/api/social'
  const urlUser = computed(() => userData)
  const urlSocial = computed(() => socialData)

  const { data, error, retry } = useFetch(urlUser)
  const { data2, error2, retry2 } = useFetch(urlSocial)
</script>

<template>
    <div class="row mt-4">
      <div class="col-lg-3 text-center">
        <img class="img img-fluid rounded-circle" src="@/assets/avatar.jpg" width="125" height="125" />
      </div>
      <div class="col-lg-9 text-start pt-2">
        <!--Error state-->
        <div v-if="error">
          <p>Oops! Error encountered: {{ error.message }}</p>
        </div>

        <!--Result state-->
        <div v-else-if="data">
          <div v-for="(item, index) in data">
            <h5>Hello there 👋, {{ item.greeting_bio }}. {{ item.mini_bio }}</h5>
            <p>{{ item.long_bio }}</p>
          </div>
        </div>

        <!--Loading state-->
        <div v-else>Loading...</div>
      </div>
    </div>   
</template>
