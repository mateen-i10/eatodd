import axios from "axios"
//export const baseURL = /*process.env.REACT_APP_API_BASEURL*/ "https://localhost:7102/api/"
export const baseURL = "https://devapi.eatomg.com/api/"
export default {
    _post: axios.post,
    _get: axios.get,
    _put: axios.put,
    _delete: axios.delete,
    _request: axios.request,
    _patch: axios.patch
}
