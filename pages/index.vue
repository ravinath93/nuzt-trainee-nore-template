<template>
  <div>
  
  <!-- start Hero Area ###############  -->
  <div class="heroSection  h-[80vh] flex justify-center items-center" >
  </div>
  <!-- end Hero Area ###############  -->


   <!-- NEW ARRIVALS ###############  -->
   <!-- titiel  -->
   <div class="flex justify-center border py-10">
    <h1 class="text-[48px] font-bold text-center"> NEW ARRIVALS </h1>    
   </div> 

   <newarrivals />



   <!-- OUR BEST SELLERS ###############  -->
   <!-- titiel  -->
   <div class="flex justify-center border py-10">
    <h1 class="text-[48px] font-bold text-center"> OUR BEST SELLERS </h1>    
   </div>

   

   <!-- instagram section ###############  -->
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