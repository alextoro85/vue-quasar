const app = Vue.createApp({
    data() {
        return {
            tableInfo: [
                {
                    company: 'Apple',
                    contact: 'Steve Jobs',
                    country: 'USA'
                },
                {
                    company: 'Samsung',
                    contact: 'Lee Byung-chul',
                    country: 'South Korea'
                },
                {
                    company: 'Huawei',
                    contact: 'Ren Zhengfei',
                    country: 'China'
                },
                {
                    company: 'Xiaomi',
                    contact: 'Lei Jun',
                    country: 'China'
                },
                {
                    company: 'LG',
                    contact: 'Koo Bon-moo',
                    country: 'South Korea'
                },
            ],
        }
    },
});

app.mount('#app')