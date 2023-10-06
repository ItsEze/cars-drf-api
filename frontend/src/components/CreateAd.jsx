import {useState, useEffect } from 'react'



export default function CreateAd() {
    return (
        <div className='createAdContainer'>
            <div className='adInput'>
                <div className='singleInput'>
                    <label>Registration Number</label>
                    <input type='text'></input>
                </div>
            </div>
            <div className='adInput'>
                <div className='singleInput'>
                    <label>Year</label>
                    <input type='text'></input>
                </div>
                <div className='singleInput'>
                    <label>Make</label>
                    <input type='text'></input>
                </div>
                <div className='singleInput'>
                    <label>Model</label>
                    <input type='text'></input>
                </div>
            </div>
            <div className='adInput'>
                <div className='singleInput'>
                    <label>Milage</label>
                    <input type='text'></input>
                </div>
                <div className='singleInput'>
                    <label>Number of Owners</label>
                    <input type='text'></input>
                </div>
                <div className='singleInput'>
                    <label>Number of doors</label>
                    <input type='text'></input>
                </div>
            </div>
            <div className='create-btn'>
                <button>Cancel</button>
                <button>Create Advertisement</button>
            </div>
        </div>
    )
}