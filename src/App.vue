<script setup>

import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
import { storeToRefs } from "pinia";
import { useEStore } from "@/stores/ProductStore";

const store = useEStore();
const { categories, promotions } = storeToRefs(store);
</script>

<template>
  <section class="m-auto">
    <section class="flex flex-col gap-12 items-center justify-center mx-8 mt-8">
    
      <div className="flex gap-4">
        <Category
          :class="fruit.bg"
          v-for="(fruit, index) in categories"
          :key="index"
          :borderBg="fruit.bg"
          :image="fruit.imageUrl"
          :name="fruit.name"
          :description="fruit.description"
        />
      </div>
      <div class="flex justify-center gap-4">
        <Promotion
          :icon="promotion.icon"
          :class="promotion.bg + ` flex justify-center`"
          v-for="(promotion, index) in promotions"
          :key="index"
          :name="promotion.name"
          :bgButton="promotion.bgButton"
          :buttonText="promotion.button"
          :imageUrl="promotion.imageUrl"
        />
      </div>
    </section>
  </section>
</template>
