<template>
    <div>
        Your page not found Boy i love you {{ error.statusCode }}
    </div>

</template>

<script setup>

defineProps(["error"])

</script>