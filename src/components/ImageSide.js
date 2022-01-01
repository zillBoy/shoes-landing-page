import React from 'react'
import LandingImage from '../assets/landing.jpg'

const ImageSide = () => {
    return (
        <div className='image-side-container'>
            <div className='image-div'>
                <img className='image' src={LandingImage} alt='landing page shoe' />
            </div>
        </div>
    )
}

export default ImageSide
