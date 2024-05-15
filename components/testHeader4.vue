<template>
  <div class="sticky top-0 left-0 z-10" >
         
     <!-- start top header ##########  -->
     <div class="w-auto bg-white lg:bg-[#D9D9D9] h-[80px] flex justify-center items-center px-5  " >

      <!-- top header container -->
      <div class="container flex justify-between lg:justify-end items-center  bg-slate-0">
        
       

        <!-- top header logo & mob menu- mob##  -->
        <div  class=" lg:hidden  flex items-center gap-3" >
           
          <i class="fa-solid fa-bars"></i>
          <img src="../assets/img/logo4.png" alt=""  class="h-[50px] " >

        </div>
        
        <!-- serach bar lg screen  -->
        <div class="   w-[520px] h-[51px] rounded-[22px] bg-white hidden lg:flex justify-between items-center px-[25px]">
          <input type="text" placeholder="I am looking for..." class="w-full h-[51px] outline-none " >
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <!-- top icons  -->
        <div class="bg-green-0 flex gap-5 ml-[20px] " >
          <div>LKR</div>
          <div>  <i class="fa-regular fa-user"></i>  </div>
          <div>  <i class="fa-regular fa-heart"></i> </div>
          <div>  <i class="fa-solid fa-cart-shopping"></i> ( <span> 0 </span>  )</div>
          <div class=" lg:hidden" >  <i class="fa-solid fa-magnifying-glass"></i> </div>
        
        </div>
        </div>



     </div>
     <!-- end  top header ##########  -->


      <!-- start bottom header   -->
      <div class=" hidden lg:flex h-[80px] bg-yellow-200 mx-auto " >

          <!-- start dynamic menu #####  -->
          <div  class=" flex justify-end gap-1"  >
              <div v-for="p in categories">   
            
                <NuxtLink :to="`/`"  v-if=" p.parent_id === '-' "  class="catM hover:" > #{{ p.name }} </NuxtLink>       

                <div v-for="c in categories"  >         
                  
                  <NuxtLink :to="`/`" v-if="p.id !== c.id && p.id == c.parent_id " class="catS " > *{{ c.name }} </NuxtLink>        
                </div> 
              </div>
          </div>
          <!-- end dynamic menu #####  -->

      </div>
      <!-- start bottom header  -->   


  
      

   

     <!-- <div v-for="p in categories" > 

       
        <h2  v-if=" p.parent_id === '-' "  class="hover:" > cat - {{ p.name }}  </h2>        

        <div v-for="c in categories"  >         
          <h2 v-if="p.id !== c.id && p.id == c.parent_id " class="hidden"  >----- sub.c - {{ c.name }} </h2>         
        </div>       

    </div> -->
    <!-- ################### -->


    

  </div>
</template>

<!-- script ###  -->
<script setup lang="ts" >
const { data: categories } = await useFetch('https://api.dilferclothing.com/dilferclothing.com/get_product_category_list');















</script>



<style scoped>

</style>