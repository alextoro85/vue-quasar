const app = Vue.createApp({
    data() {
        return {
            message: 'Hello World!',
            inputText: 'Sample text',
            classVar: 'rectangle',
            widthValue: '400px'
        }
    }
})

app.mount('#app')