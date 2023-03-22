import React from 'react';
import { useLocation } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();

    return (
        <div>
            <h1>About | FAQs Page</h1>
            <div>
                <button>Go Home</button>
                <button>Go back</button>
            </div>
        </div>
    );
}

export default AboutPage;
