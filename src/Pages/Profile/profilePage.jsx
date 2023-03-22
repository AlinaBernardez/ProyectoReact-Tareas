import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {

    const history = useNavigate();

    const navigate = (path) => {
        history(path);
    }

    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={ () => navigate('/tasks') }>Yout tasks</button>
        </div>
    );
}

export default ProfilePage;
