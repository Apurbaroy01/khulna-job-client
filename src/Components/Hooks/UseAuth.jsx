import React, { useContext } from 'react';
import AuthConText from '../../Firebase/Context/AuthConText';

const UseAuth = () => {
    const Context =useContext(AuthConText)
    return Context;
};

export default UseAuth;