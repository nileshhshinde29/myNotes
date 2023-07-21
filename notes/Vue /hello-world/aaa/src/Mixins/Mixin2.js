export default {
    data() {
        return {
            fetchedData: []
        }
    },
    methods: {

        getData() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(res => this.fetchedData = res)
                .catch(err => console.log(err))
        }
    }
}