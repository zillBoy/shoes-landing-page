import React from 'react'
import Button from './Button'

const TextSide = () => {
    return (
        <div className='text-side-container'>
            <div className='text-side-container-content'>
                <div className='text-side-container-content--line' />
                <div className='text-side-container-content--border'></div>
                <div className='text-side-container-content-mainheading'>
                    <h1 className='text text-mainheader'>New</h1>
                    <p className='text text-subheader'>Collection</p>
                </div>
                <div className='text-side-container-content-subheading'>
                    <p className='text-subheading-header'>Special deals</p>
                    <p className='text-subheading-subheader'>Join our Facebook community and get a 10% discount</p>
                </div>
                <div className='text-side-container-content-buttoncontainer'>
                    <Button text='shop now' />
                </div>
            </div>
        </div>
    )
}

export default TextSide
