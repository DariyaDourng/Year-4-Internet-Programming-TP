<template>
  <button class="h-[150px] w-[108px] rounded-xl shadow-md overflow-hiddens ">
   
     <img class="h-[100px] w-full object-contain" :src="image" :alt="image" />
      <h3 class="text-center font-semibold ">{{ name }}</h3>
      <p class="text-center text-xs text-[#B6B6B6] ">{{ description }}</p>
  
  </button>
</template>

<script>

  export default {
      name: "Category",
      props: {
          image: String,
          name: String,
          description: String,
      }
  }
</script>

