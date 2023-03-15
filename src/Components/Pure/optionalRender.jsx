import React, { useState } from 'react';

// Log buttons

const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} className='btn' onClick={loginAction}>LogIn</button>
    )
}
const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} className='btn' onClick={logoutAction}>LogOut</button>
    )
}

const loggedStyle = {
    backgroundColor: `rgb(0,200,150)`,
    color: 'white',
    fontWeight: 'bold'
};
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessage, setNMessage] = useState(0);

    // function updateAccess() {
    //     setAccess(!access);
    // }
    
    function loginAction() {
        setAccess(true);
    }
    function logoutAction() {
        setAccess(false);
    }

    let accessButton;
    // access ? 
    // accessButton = <button className='btn btn-warning' onClick={updateAccess}>LogOut</button> :
    // accessButton = <button className='btn btn-info' onClick={updateAccess}>LogIn</button>

    access ? 
    accessButton = <LogoutButton propStyle={ unloggedStyle } logoutAction={ logoutAction }/> :
    accessButton = <LoginButton propStyle={ loggedStyle } loginAction={ loginAction }/>

    function addMessage() {
        setNMessage(nMessage + 1)
    }

    return (
        <div>
            {/* Optional Button*/}
            { accessButton }
            {/* N Messages unread*/}
            { access ? 
                (<div>
                    { nMessage === 1 && <p>You have {nMessage} new message...</p> }
                { nMessage > 1 && <p>You have {nMessage} new messages...</p> }
                { nMessage === 0 && <p>No new messages</p> }

                { nMessage > 0 ?
                    <p>You have {nMessage} new message{nMessage > 1 ? 's' : null}...</p> :
                    <p>No new messages</p> }
            <button onClick={addMessage}>Add new message</button>
                </div>) : null}
            
        </div>
    );
}

export default OptionalRender;
