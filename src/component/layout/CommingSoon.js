import React from 'react'
import { useSelector } from 'react-redux';
import "./CommingSoon.css";
import BottomTab from './Header/BottomTab';
import Loading from './loader/Loading';
import MetaData from './MetaData';

const CommingSoon = () => {

    const {loading} = useSelector(
        (state) => state.offer
      );

    return (
        <>
        {loading ? (<Loading/>) : (
            <>
        <MetaData title="comming soon" />
            <div>
            <div className='bg'>
                <span dataText="Comming" className='first'>Coming<span dataText="Soon....">Soon....</span></span>
                <div className="one">
                    <div className="circle">

                    </div>
                </div>
            </div>
            </div>
            <BottomTab />
        </>
        )}
        </>
    )
}

export default CommingSoon
