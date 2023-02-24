const app = Vue.createApp({
    data() {
        return {
            message: 'Hello World!',
            showMessage: true,
            colorRed: true,
        }
    },
    methods: {
        toggleMessage() {
            this.showMessage = !this.showMessage
        },
        toggleColor() {
            this.colorRed = !this.colorRed
        }
    }
});

app.mount('#app')