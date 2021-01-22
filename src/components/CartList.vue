<template>
    <div>
        <h2>购物车</h2>
        <ul>
            <li v-for="(item,index) in items" :key="index">
                {{ item.title }} - {{ item.price }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            items() {
                return this.$store.state.cart.items;
            }
        }
};
</script>
