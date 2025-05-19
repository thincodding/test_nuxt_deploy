<template>
    <div>
        Your page not found {{ error.statusCode }}
    </div>

</template>

<script setup>

defineProps(["error"])

</script>