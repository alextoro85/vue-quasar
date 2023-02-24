const app = Vue.createApp({
    data() {
        return {
            page: 1,
            total_pages: 0,
            trendingMovies: [],
            loading: false
        }
    },
    created() {
        this.getTrendingMovies()
    },
    watch: {
        page: function (newValue, oldValue) {
            this.getTrendingMovies()
        }
    },
    methods: {
        getTrendingMovies() {
            this.loading = true
            axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=9cb10f61a8cb49ebb5f884873e8cda78&page=' + this.page).
                then(response => {
                    this.trendingMovies = response.data.results
                    this.total_pages = response.data.total_pages
                    setTimeout(() => {
                        this.loading = false
                    }, 1000)
                });
        }
    }
});
app.use(Quasar)
app.mount('#app')