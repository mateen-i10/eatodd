import axios from "axios"

export const baseURL = "https://localhost:7102/api/"
export default {
    _post: axios.post,
    _get: axios.get,
    _put: axios.put,
    _delete : axios.delete,
    _request: axios.request
}
