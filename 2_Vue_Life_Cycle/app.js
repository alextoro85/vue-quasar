const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            message: 'Hello World!'
        }
    },
    beforeCreate() {
        console.log('beforeCreate', document.querySelector('#app span'))
    },
    created() {
        console.log('created()', document.querySelector('#app span'))
    },
    beforeMount() {
        console.log('beforeMount()', document.querySelector('#app span'))
    },
    mounted() {
        console.log('mounted()', document.querySelector('#app span'))
    },
    beforeUpdate() {
        console.log('beforeUpdate()', document.querySelector('#app span').innerHTML)
    },
    updated() {
        console.log('updated()', document.querySelector('#app span').innerHTML)
    }
})

app.mount('#app')