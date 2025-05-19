// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  // seo meta
  // app: {
  //   head: {
  //     title: "Project Tutorial",
  //     meta: [
  //       {
  //         name: "description",
  //         content: "this is My Project test"
  //       }
  //     ]
  //   }
  // }
  

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in"
    }

    
  }
})
