import React from 'react'
import "./Rules.css";
import Header from "../layout/Header/Header";
import Footer from './Footer/Footer';
import BottomTab from './Header/BottomTab';
import MetaData from './MetaData';

const Rules = () => {
    return (
        <>
        <MetaData title="Rules" />
        <Header />
        <div className='rules' style={{
            padding:"50px 30px",
            display:"flex",
            width:"95%",
            overflow:"hidden"
        }}>
            <ul className='rules'>
                <span style={{
                    color:"#000",
                    fontSize:"1.3rem",
                    fontWeight:"800",
                    fontFamily:"Roboto",
                }}>Our Rules:</span>
                <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                <li>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                <li>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                <li>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                <li>5. Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                <li>6. Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                <li>7. Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                <li>8. Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            </ul>
        </div>
        <Footer />
        <BottomTab />
        </>
    )
}

export default Rules
