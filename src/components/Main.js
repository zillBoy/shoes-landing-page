import React from 'react'
import ImageSide from './ImageSide'
import TextSide from './TextSide'

const Main = () => {
    return (
        <div className='main-container'>
            <div className='main-container-content'>
                <TextSide />
            </div>
            <div className='main-container-content'>
                <ImageSide />
            </div>
        </div>
    )
}

export default Main
