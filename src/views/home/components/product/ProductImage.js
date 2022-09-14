import React, {memo, useState} from "react"

const ProductImage = ({path, attachmentId, styles }) => {
    const [imgURL] = useState(path)

    console.log('path', path)
    console.log('attachmentId', attachmentId)

    return <img src={imgURL} className="img-fluid rounded-start" alt="..."
             style={{...styles}} />
}

export default memo(ProductImage)
