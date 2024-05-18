<template>
  <div>

    <div  v-for="p in item" :key="p.id" > 
      <p>{{ p.id }}</p>
      <p>{{ p.description }}</p>
      <p>{{ p.web_price }}</p>
    </div>

  </div>
</template>


<!-- script ################  -->
<script setup lang="ts" >


let fulllist = "";
  const list = document.getElementById("list");

  fetch('https://gcp-store-shared1.greencloudpos.com/norareedfashion.com/store_data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      currency_code: "LKR",
      is_master: true,
      item_size: "",
      maxprice: 1000000,
      minprice: 0,
      order: "NEWEST",
      p: 1,
      size: 8,
      type: "new_arrivals"
    })
  })
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data)    
    if (data && Array.isArray(data.list)) {
      data.list.forEach(item => {
        fulllist += `<li>${item.id}</li>`;
        fulllist += `<li>${item.description}</li>`;
        fulllist += `<li>${item.web_price}</li>`;  
        fulllist += `<li>${item.web_price}</li>`;  
      });
      list.innerHTML = `<ul>${fulllist}</ul>`;
    } else {
      console.error('Unexpected data format:', data);
    }
  })
  .catch(error => console.log('ERROR:', error));

</script>
<!-- end - script ################  -->



<style scoped>
</style>