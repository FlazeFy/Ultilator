<script setup>
  import Navbar from './components/navigation/Bar.vue'
</script>

<template>
  <main>
    <div class="row">
      <div class="col-3">
        <Navbar/>
      </div>
      <div class="col-9">
        <!--Content-->
        <router-view/>
      </div>
    </div>
  </main>
</template>

<style scoped>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>