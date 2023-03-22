import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    const history = useNavigate();

    console.log('We are in route:', location.pathname);

    const navigate = (path) => {
        history(path);
    }
    const goBack = () => {
        history(-1);
    }

    return (
        <div>
            <h1>About | FAQs Page</h1>
            <div>
                <button onClick={ () => navigate('/') }>Go Home</button>
                <button onClick={ goBack }>Go back</button>
            </div>
        </div>
    );
}

export default AboutPage;
