app = Vue.createApp({
    data() {
        return {
            text: '',
            confirmedText: ''
        }
    },
    methods: {
        setText(event){
            this.text = event.target.value;
        },
        confirmText(){
            this.confirmedText = this.text;
        },
        showAlert(){
            alert('hola mundo!');
        }
    },
})

app.mount('#assignment')