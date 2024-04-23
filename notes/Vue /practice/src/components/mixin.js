export default ({

    data() {
        return {
            apidata: "",
            count: 0
        }
    },
    mounted() {

    },
    methods: {
        fetchApi() {
            this.apidata = "data fetched"
        },
        inc() {
            this.count = this.count + 1
        }
    },
})