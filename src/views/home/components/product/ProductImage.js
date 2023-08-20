import React, { useEffect, useState } from "react"

const ProductImage = ({ attachment, classes, styles }) => {
    const defaultImage = require("../../../../assets/images/default/defaultImage.png").default
    const [imageURL, setImageURL] = useState(defaultImage)

    useEffect(() => {
        if (attachment && attachment.path) {
            // Replace backslashes with forward slashes, then split the path into segments
            const pathSegments = attachment.path.replace(/\\/g, '/').split('/')

            // Extract the last two segments (subfolder and image name)
            const subfolder = pathSegments[pathSegments.length - 2]
            const imageName = pathSegments[pathSegments.length - 1]

            // Form the direct URL to the image
            const directImageUrl = `https://devapi.eatomg.com/Media/${subfolder}/${imageName}`

            // Set the image URL directly
            setImageURL(directImageUrl)
        } else {
            // Fallback to default image if attachment is not valid
            setImageURL(defaultImage)
        }
    }, [attachment])

    return (
        <div style={{ justifyContent: "center", display: "flex" }}>
            <img src={imageURL} alt="Product" className={classes} style={styles} />
        </div>
    )
}

export default ProductImage
