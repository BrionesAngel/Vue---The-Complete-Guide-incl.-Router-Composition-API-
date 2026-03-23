const app = Vue.createApp({
    data() {
        return {
            myName: 'Angel',
            myAge: 25,
            randomNumber: Math.random(),
            urlImage: 'https://gettyimages.com.mx/fotos/image'
        }
    },
})

app.mount('#assignment')