import React from 'react'
import LandingImage from '../assets/landing.jpg'

const ImageSide = () => {
    return (
        <div className='image-side-container'>
            <div className='image-div'>
                <img className='image' src={LandingImage} alt='landing page shoe' />
            </div>
            <div className='text-side-container-content--line text-side-container-content--line--imageside' />
            <h2 className='image-subcontent'>
                <p>20</p>
                <p>22</p>
            </h2>
        </div>
    )
}

export default ImageSide
