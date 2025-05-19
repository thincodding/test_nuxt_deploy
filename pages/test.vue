<template>
    <h1>Test</h1>

</template>

<script>

useHead({
    title: "Profile"
})


definePageMeta({
    pageTransition: {
        name: 'rotate'
    }
})
</script>


<style scoped>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    /* filter: blur(1rem); */
    transform: rotate3d(1, 1, 1, 15deg);
}
</style>