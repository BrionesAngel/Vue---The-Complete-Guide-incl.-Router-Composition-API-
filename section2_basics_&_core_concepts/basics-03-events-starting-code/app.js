const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      nameWithLastname: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name
    },
    submitForm(event){
      //event.preventDefault();
      alert('Submitted!');
    },
    setName(event){
      this.name = event.target.value;
    },
    setName_and_lastName(event, lastName){
      this.nameWithLastname = event.target.value + ' ' + lastName;
    },
    add(num){
      this.counter+=num;
    },
    reduce(){
      this.counter--;
    }
  },
});

app.mount('#events');
