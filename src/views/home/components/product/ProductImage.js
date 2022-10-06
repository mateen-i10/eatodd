import React, {memo, useEffect, useState} from "react"
import useAPI from "../../../../utility/customHooks/useAPI"

const ProductImage = ({attachment, styles, classes }) => {
    const defaultImage = require("../../../../assets/images/default/defaultImage.png").default
    const [imageURL, setImageURL] = useState(defaultImage)
    const [imagePath, setImagePath] = useState('')

    // hooks
        const [isLoading, response] = useAPI(imagePath, 'get', {}, 'blob')
        console.log('isLoading in image card', isLoading)
        console.log('response in image card', response)
        console.log('attachment in image card', attachment)

    useEffect(() => {
        if (attachment && attachment.path && attachment.extension) {
            setImagePath(`media/getMediaByPath?path=${attachment.path}&&extension=${attachment.extension}`)
        }
    }, [attachment])

    useEffect(() => {
        if (response) {
            setImageURL(URL.createObjectURL(response))
        }
    }, [response])

    return <>
        <img src={imageURL} className={classes} alt="product image" style={{...styles}} />
    </>
}

export default memo(ProductImage)
