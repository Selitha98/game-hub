import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'c8198bdb49094f23b866a02a79662de9'
    }
}) 