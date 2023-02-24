const app = Vue.createApp({
    data() {
        return {
            text: '',
            lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        }
    },
});
app.use(Quasar)
app.mount('#app')