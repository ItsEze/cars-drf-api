import {useState, useEffect, useContext } from 'react'
import AutoInput from './ui/AutoInput'
import { AuthContext } from '../context/AuthContext';
import DisabledInput from './ui/DisabledInput';


export default function CreateAd() {

    const [exists, setExists] = useState(false)
    const sharedState = useContext(AuthContext);
    const { authToken, handleToken, ads, setAds } = sharedState;

    return (
        <div className='createAdContainer'>
            <div className='adInput'>
                <div className='singleInput'>
                    <label>Registration Number</label>
                    <AutoInput />
                </div>
                {exists && (
                <div className='conditionalInput'>
                    <div className='adInput'>
                        <div className='singleInput'>
                            <label>Year</label>
                            <DisabledInput />
                        </div>
                        <div className='singleInput'>
                            <label>Make</label>
                            <DisabledInput />
                        </div>
                        <div className='singleInput'>
                        <label>Model</label>
                            <DisabledInput />
                        </div>
                    </div>
                    <div className='adInput'>
                        <div className='singleInput'>
                            <label>Milage</label>
                            <DisabledInput />
                        </div>
                        <div className='singleInput'>
                            <label>Number of Owners</label>
                            <DisabledInput />
                        </div>
                        <div className='singleInput'>
                            <label>Number of doors</label>
                            <DisabledInput />
                        </div>
                    </div>
                </div>
                )}
                {exists || (
                <div className='conditionalInput'>
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
            </div>
                )}
        </div>
            {/* <div className='adInput'>
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
            </div> */}
            <div className='create-btn'>
                <button className='btn'>Cancel</button>
                <button className='btn'>Create Advertisement</button>
            </div>
        </div>
    )
}