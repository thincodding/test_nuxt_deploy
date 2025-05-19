<template>
    <Navbar/>
    <h1 class="title">Hello How are you boy</h1>


    <input type="text" v-model="search">
    <img src="../public/assets/bluess.jfif" alt="">
    <div v-for="data in fileSearch" :key="data">
        <P class="title">{{ data.title }}</P>
    </div>
</template>

<script>
export default {

    setup() {


        useHead({
            title: 'My App',
            meta: [
                { name: 'description', content: 'My amazing site you can test it for free.' },
                { name: 'keywords', content: 'How are you.' }
            ],
            bodyAttrs: {
                class: 'test'
            },
            script: [{ innerHTML: 'console.log(\'Hello world\')' }]
        })


        const datas = ref([])

        const search = ref(null)


        onMounted(async () => {
            await $fetch('https://fakestoreapi.com/products').then(data => {
                datas.value = data
                console.log(datas)
            }).catch(err => {
                console.log(err)
            })


        })


        const fileSearch = computed(() => {
            return datas.value.filter(e =>
                e.title.toLowerCase().includes(search.value.toLowerCase())
            )
        })


        return { datas, search, fileSearch }

    }
}




</script>