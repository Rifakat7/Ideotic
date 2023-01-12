import React from 'react';
import { Route, Routes} from "react-router-dom";
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
const Allrouter = () => {
    return (
      <>
        <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="signup" element={<Signup/>}  />
             <Route path="login" element={<Login/>}  />
             <Route path="detail" element={<Detail/>} />
        </Routes>
      </>
    );
};

export default Allrouter;