<template>
    <div id="app" style="text-align: left;">
        <router-link to="/home"><h2>主页</h2></router-link>

        <h1>购物车示例</h1>
        <p>姓名: {{ $store.state.userInfo.username }}</p>
        <hr />
        <h2>产品</h2>
        <ProductList />
        <hr />
        <CartList/>
    </div>
</template>

<script>
    import ProductList from "../../components/ProductList";
    import CartList from "../../components/CartList";
    export default {
        // name: "App",
        components: { ProductList , CartList }
    };
</script>
