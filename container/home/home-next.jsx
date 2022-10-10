import React, { useState } from 'react';
import { Image, Carousel, Button, Container } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";

export default function Homenext() {
    const [indexCarousel, setIndexCarousel] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndexCarousel(selectedIndex);
    };
    return (
        <>
            <div className='row'>
                <li className="scroll-to-section"><div className="main-red-button-hover"><a href="/contact">Contact Us Now</a></div></li>

            </div>
        </>
    );
}
