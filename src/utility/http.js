import axios from "axios"

export const baseURL = "https://localhost:44308"
export default {
    _post: axios.post,
    _get: axios.get,
    _put: axios.put,
    _delete : axios.delete,
    _request: axios.request
}