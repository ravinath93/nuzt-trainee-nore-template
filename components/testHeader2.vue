<template>
  <div>

    <!-- header  ################ -->
<div class=" bg-purple-950 pb-4 ">

<!-- header container ################ -->
<div class="container mx-auto  bg-purple-950 text-gray-100 py-0 md:px-6  md:flex justify-between items-center">
<!-- logo ### -->
<div class=" flex items-center ">
 <span class="text-green-500 text-xl mr-1">
   <i class="bi bi-messenger"></i>
 </span>
 <!-- logo ###  -->      
 <NuxtLink to="/">  <img src="/assets/img/logo2.png" alt="Discover Nuxt 3" class="h-[100px]" /> </NuxtLink>       
</div>   

<!-- menu  ###  -->
<ul id="myTopnav" class="topnav hidden  md:flex md:items-center md:px-0 px-5 md:static absolute md:w-auto w-full duration-700 ease-in  bg-[#92BB3A] md:bg-purple-950 ">

 <!-- main menu static  -->
 <li class=" md:px-[8px] md:py-[4px] mx-5 md:mr-2 md:ml-10 md:my-0 my-1 font-semibold capitalize hover:text-[#000] hover:bg-white active:bg-white focus:outline-none"> <NuxtLink to="/"> Home  </NuxtLink> </li>
 <li class=" md:px-[8px] md:py-[4px] mx-5 md:mx-2 md:my-0 my-1 font-semibold capitalize hover:text-[#730E86] hover:bg-white active:bg-white focus:outline-none"> <NuxtLink to="/about"> About </NuxtLink> </li>
 <li class=" md:px-[8px] md:py-[4px] mx-5 md:mx-2 md:my-0 my-1 font-semibold capitalize hover:text-[#730E86] hover:bg-white active:bg-white focus:outline-none"> <NuxtLink to="/products"> Products </NuxtLink> </li> 

 <!-- dynamic category menu  -->
 <li class="mx-5  md:mx-[20px] md:border-[1px] md:px-[8px] md:py-[4px] md:my-0 my-4 hover:text-[#730E86] hover:bg-white active:bg-white focus:outline-none  " v-for="c in category">
   <NuxtLink :to="`/products/categories/${c}`" class="font-semibold capitalize"> {{ c }}</NuxtLink>
 </li>
       
</ul> 

<!-- cart logo ##  -->
<div   class=" absolute top-7 right-[100px] md:static">
 <NuxtLink to="/"> <img src="../assets/img/cart-svg.svg" alt="" class="min-w-[32px]"> </NuxtLink> 
</div>


<!-- Mobile hanburger icon ##  -->
<div  v-on:click="myFunction" class="md:hidden absolute top-7 right-7">        
 <NuxtLink to=""> <img src="../assets/img/bars-solid.svg" alt="" class="min-w-[28px]"> </NuxtLink> 
</div>

<!-- Mobile hanburger icon ##  -->
<!-- <div v-on:click="myFunction" class="md:hidden ">
 <h1>XXX</h1>      
</div> -->

</div>

</div>
<!-- header end ################ -->

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>