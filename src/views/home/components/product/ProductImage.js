import React, {memo, useState} from "react"

const ProductImage = ({path, attachmentId, styles, classes }) => {
    const [imgURL] = useState(path)

    console.log('path', path)
    console.log('attachmentId', attachmentId)
    // hooks
    /*const [isLoading, response] = useAPI('', 'get', {}, 'blob')
    //setProducts([response?.data])
    console.log('isLoading', isLoading)
    console.log('response', response)*/
    return <img src={imgURL} className={classes} alt="product image"
             style={{...styles}} />
}

export default memo(ProductImage)
