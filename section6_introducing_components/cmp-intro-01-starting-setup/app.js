const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'manuel lopez',
                    phone: '237984923463',
                    email: 'manuel@test.com',
                },
                {
                    id: 'julia',
                    name: 'juliana lopez',
                    phone: '237984923463',
                    email: 'manuel@test.com',
                }
            ],
        }
    },
    methods: {
    },
})

app.component('friend-contact', {
    template: ``,
    data() {
        return{
            detailsAreVisible: false,
        }
    },
        methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
})

app.mount('#app');