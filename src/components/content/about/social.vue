<script setup>
  import { ref, computed } from 'vue'
  import { useFetch } from '../../useFetch.js'

  import DocumentationIcon from '../../icons/IconDocumentation.vue'

  const socialData = 'https://leonardhors.site/api/social'
  const urlSocial = computed(() => socialData)

  const { data, error, retry } = useFetch(urlSocial)
</script>

<template>
  <div>
    <!--Error state-->
    <div v-if="error2">
      <p>Oops! Error encountered: {{ error.message }}</p>
    </div>

    <!--Result state-->
    <div v-else-if="data">
      <div v-for="(item, index) in data">
        <a class="btn btn-icon social" title="Github" :href="item.github"><DocumentationIcon /></a>
        <a class="btn btn-icon social" title="Personal Website" href="https://leonardhors.site"><DocumentationIcon /></a> 
        <a class="btn btn-icon social" title="LinkedIn" :href="item.linkedin"><DocumentationIcon /></a> 
        <a class="btn btn-icon social" title="Instagram" :href="item.instagram"><DocumentationIcon /></a>
        <a class="btn btn-icon social" title="Email" :href="'mailto: '+ item.email"><DocumentationIcon /></a>  
      </div>
    </div>

    <!--Loading state-->
    <div v-else>Loading...</div>     
  </div>
</template>
