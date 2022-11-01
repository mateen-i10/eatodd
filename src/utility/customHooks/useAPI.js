import {useEffect, useState} from "react"
import http, {baseURL} from "../http"
import {toast} from "react-toastify"

const useAPI = (url, method, data, responseType, isErrorToast = false, isSuccessToast = false) => {
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
            if (url && url !== '') {
                setIsLoading(true)
                 http._request({baseURL, url, method, data, responseType, signal: controller.signal })
                    .then(res => {
                        if (res && res.status === 200 && (res.data instanceof Blob || res.data.statusCode === 200)) {
                            setIsLoading(false)
                            setResponse(res.data)
                            if (isSuccessToast) toast.success(res.data.message)
                        } else {
                            if (isErrorToast) toast.error(res.data.message)
                            setIsLoading(false)
                        }
                    }
                ).catch(e => {
                         setIsLoading(false)
                         if (isErrorToast) toast.error(e.message)
                     })
            }
        return () => {
            controller.abort()
        }

    }, [url])

    return [isLoading, response]
}

export default useAPI
