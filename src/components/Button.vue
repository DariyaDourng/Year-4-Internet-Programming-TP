<template>
  <button :class="background+ ` flex gap-1 text-xs text-white justify-center items-center rounded-md w-[120px] p-2`">
    {{ text }}
    <component :is="iconComponent" class="icon w-5 h-5" />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    background: String,
    iconComponent: Object,
  },
};
</script>

<style>
body{
  font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    color:#253D4E;
}
</style>