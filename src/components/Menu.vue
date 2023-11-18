<script>
    export default {
        name: "Menu",
        props: {
            title: String,
            element: String,
            menus: []
        }
    }
</script>
<template>
    <div class="flex items-center justify-between w-full">
        <h1 class="font-bold text-2xl">{{ title }}</h1>
        <div class="flex gap-4">
            <span class="font-bold">All</span>
            <p v-for="menu in menus" class="text-slate-700">{{ menu }}</p>
        </div>
    </div>
</template>