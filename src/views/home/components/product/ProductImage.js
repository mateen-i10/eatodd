import React, {memo, useState} from "react"

const ProductImage = ({path, attachmentId, styles, classes }) => {
    const [imgURL] = useState(path)

    console.log('path', path)
    console.log('attachmentId', attachmentId)

    return <img src={imgURL} className={classes} alt="..."
             style={{...styles}} />
}

export default memo(ProductImage)
