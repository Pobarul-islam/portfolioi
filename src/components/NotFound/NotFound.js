import React from 'react';
import '../NotFound/NotFound.css'
import Footer from '../Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <div className='container col-12'>
                <img className='errorImg' src="https://pixabay.com/images/search/mistake/" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;