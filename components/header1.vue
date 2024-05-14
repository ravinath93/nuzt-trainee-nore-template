<template>
  <div>
    <h2>this is components > header1.vue regg </h2>

     <!-- ################### -->
     <div v-for="p in categories" > 
       
        <h2  v-if=" p.parent_id === '-' " class="hover:" > cat - {{ p.name }}  </h2>        

        <div v-for="c in categories"  >         
          <h2 v-if="p.id !== c.id && p.id == c.parent_id " class=""  >----- sub.c - {{ c.name }} </h2>         
        </div>       

    </div> rtyr
    <!-- ################### -->


    

  </div>
</template>

<!-- script ###  -->
<script setup>
const { data: categories } = await useFetch('https://api.dilferclothing.com/dilferclothing.com/get_product_category_list');

</script>

<style lang="scss" scoped>

</style>