const app = Vue.createApp({
    components: {
        'my-button': Vue.defineAsyncComponent(() => loadModule('./button.vue', componentsOptions)),
    },
    data() {
        return {
            showButton: true,
        }
    },
});

app.mount('#app')