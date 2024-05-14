<template>
  <div>
  
  <!-- start Hero Area ###############  -->
  <div class="heroSection  h-[80vh] flex justify-center items-center" >
  </div>
  <!-- end Hero Area ###############  -->


  <instagram />

  </div>
</template>

<script setup>

</script>


<!-- style #############  -->
<style scoped>

.heroSection{
  background-image: url(../assets/img/hero/desktop-img1-1677307033228.jpeg);
  /* background-image: url(../assets/img/hero-img-2.png); */
  background-repeat: none;
  background-position: center;
  background-size: cover;
  position: relative;
}

/* hero mob image change ###  */
@media only screen and (max-width: 1023px) {
  .heroSection{
  background-image: url(../assets/img/heroM/mobile-img1-1708580536037.jpeg);
  
  background-repeat: none;
  background-position: center;
  background-size: cover;
  position: relative;
}
}

</style>