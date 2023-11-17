<script>
import Button from './Button.vue';
export default {
  name: "Promotion",
  props: {
    name: String,
    bgButton: String,
    imageUrl: String,
    buttonText: String,
    icon: Object, 
  },
  components: { Button },
}
</script>

<template>



  <div class="flex justify-center h-[250px] items-center w-[400px] rounded-md shadow-md overflow-hidden text-lg">
    <div class="flex flex-col m-auto px-4 gap-2 flex-1">
      <div class="flex items-center">
        <h3>{{ name }}</h3>
      </div>
      <Button :background="bgButton" :text="buttonText" :iconComponent="icon" />
    </div>
     <div class="relative h-full w-1/2 ">
      <img class=" h-[160px] absolute object-contain transform scale-150 top-20 right-3" :src="imageUrl" :alt="name" />
     </div>
    </div>
   
</template>
<style>


body{
  font-family: 'Quicksand', sans-serif;
    font-weight: bold;
}
</style>