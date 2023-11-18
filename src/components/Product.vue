<script>
import { ref } from "vue";
import Rating from "primevue/rating";
import Button from "./Button.vue";
import { PlusIcon } from "@heroicons/vue/20/solid";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Product",
  props: {
    products: [],
  },
  components: {
    Button,
    Rating,
  },
  setup() {
    const count = ref(0);
    const increment = () => {
      this.product.quantity += 1;
    };
    const bannerBg = (p) => {
      if (p === "Hot") {
        return "bg-red-500";
      }
      if (p === "Sale") {
        return "bg-yellow-400";
      }
      return "bg-green-[#4CAE87]";
    };
    return {
      PlusIcon,
      count,
      increment,
      bannerBg,
    };
  },
});
</script>

<template>
  <section
    class="bg-white border-2 relative p-4 rounded-lg border-slate-100 cursor-pointer hover:border-[#4CAE87]"
    v-for="(product, index) in products"
    :key="index"
  >
    <span
      v-if="product.tag !== null"
      :class="
        bannerBg(product.tag) +
        ` absolute bg-green-500 rounded-tr-full text-sm rounded-br-full py-2 px-4 left-0 text-white`
      "
      >{{ product.tag }}</span
    >
    <div class="w-full">
      <img
        class="h-[180px] w-full object-contain mt-6"
        :src="product.image"
        alt="hi"
      />
    </div>
    <span class="text-xs text-slate-500">Hodo Foods</span>
    <h1 class="">{{ product.name }}</h1>
    <div class="flex gap-4">
      <Rating
        class="text-yellow-300 gap-2"
        v-model="product.rate"
        :cancel="false"
      />
      <span class="">({{ product.rate }})</span>
    </div>
    <p class="text-xs text-slate-500">{{ product.description }}</p>
    <div class="flex items-center justify-between">
      <p class="text-xl font-bold text-[#4CAE87]">
        ${{ product.sellPrice }}
        <span class="line-through text-xs text-slate-500 font-normal"
          >${{ product.discountPrice }}</span
        >
      </p>
      <Button
        v-if="product.quantity === 0"
        @click="() => (product.quantity += 1)"
        background="bg-[#DFF9EE]"
        text="Add"
        textColor="text-[#4CAE87]"
        :iconComponent="PlusIcon"
      />
      <input
        class="w-12 text-center"
        v-else
        v-model="product.quantity"
        type="number"
      />
    </div>
  </section>
</template>
