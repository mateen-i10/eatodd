import React, {memo, useEffect, useState} from "react"
import useAPI from "../../../../utility/customHooks/useAPI"

import wineBottle from "../../../../assets/images/wineClub/Duckhorn Vinyards red.png"

const ProductImage = ({attachment, classes}) => {
    const [imageURL, setImageURL] = useState(wineBottle)
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
        <div style={{justifyContent: "center", display: "flex"}} >
            <img src={imageURL} className={classes} alt="product image" style={{width: "85%", marginTop: "14px", height: "170px"}} />
        </div>
    </>
}

export default memo(ProductImage)
