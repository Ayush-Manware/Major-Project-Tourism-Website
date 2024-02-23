import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "./pexels-asad-photo-maldives-1450372.jpg"
import image2 from "./pexels-hey-erry-15293385.jpg"
import image3 from "./pexels-jayesh-singh-15395061.jpg"
import image4 from "./pexels-navneet-shanu-672630.jpg"
import image5 from "./pexels-rahul-2121552.jpg"

const images = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
];

export default function ImageSlider() {
    return (
        <SimpleImageSlider
            width={"100%"} height={400} images={images}
            showBullets={true} showNavs={true}
            slideDuration={0.5} autoPlay />
    )
}