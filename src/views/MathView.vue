<script setup>
  import SimpleMath from "../components/content/math/simpleMath.vue"
  import TwoDGeo from "../components/content/math/2dgeometry.vue"
  import ThreeDGeo from "../components/content/math/3dgeometry.vue"
  import Statistics from "../components/content/math/statistics.vue"
</script>

<template>
  <div>
    <h2 class="text-primary brand">Math</h2>
    <SimpleMath class="mb-4"></SimpleMath>
    <TwoDGeo class="mb-4"></TwoDGeo>
    <ThreeDGeo class="mb-4"></ThreeDGeo>
    <Statistics></Statistics>
  </div>
</template>
