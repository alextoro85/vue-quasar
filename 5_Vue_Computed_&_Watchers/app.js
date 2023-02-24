const app = Vue.createApp({
    data() {
        return {
            val1: 0,
            val2: 0,
            updateMessage1: '',
            updateMessage2: '',
        }
    },
    computed: {
        addition: function () {
            return this.val1 + this.val2
        },
        subtraction: function () {
            return this.val1 - this.val2
        },
    },
    watch: {
        val1: function (newValue, oldValue) {
            this.updateMessage1 = "val1 was updated from " + oldValue + " to " + newValue
        },
        val2: function (newValue, oldValue) {
            this.updateMessage2 = "val2 was updated from " + oldValue + " to " + newValue
        }
    }
});

app.mount('#app')