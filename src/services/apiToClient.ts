import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '85fd8b08e5cc4949afb7cc8e2abaeb74'
    }
})