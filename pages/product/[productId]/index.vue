<template>
    <h1>Product ID {{ route.params.productId }}</h1>
</template>

<script>
export default {

    setup(){

        const route = useRoute()

        const name = "Hello"

        console.log(route.params.productId)

        return {route}
    }
}

</script>