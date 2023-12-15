import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const ArrowLink = () => {
    return (
        <Link to="projects" smooth={true} duration={500} offset={-100}>
            <HiArrowNarrowRight className='ml-3 cursor-pointer'/>
        </Link>
    );
};

export default ArrowLink;
