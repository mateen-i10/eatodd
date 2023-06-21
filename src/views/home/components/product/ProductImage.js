import React, {memo, useEffect, useState} from "react"
import useAPI from "../../../../utility/customHooks/useAPI"
import UILoader from "../../../../@core/components/ui-loader"

const ProductImage = ({attachment, classes, styles}) => {
    const defaultImage = require("../../../../assets/images/default/defaultImage.png").default
    const [imageURL, setImageURL] = useState(defaultImage)
    const [imagePath, setImagePath] = useState('')

    // hooks
    const [isLoading, response] = useAPI(imagePath, 'get', {}, 'blob')

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
        <UILoader blocking={isLoading}>
            <div style={{justifyContent: "center", display: "flex" }} >
                <img src={imageURL} className={classes} alt="product image" style={styles} />
            </div>
        </UILoader>
    </>
}

export default memo(ProductImage)
