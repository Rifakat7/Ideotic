import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios  from 'axios';

const Detail = () => {
    const {state}=useLocation()
    console.log(state)
     const [data, setData] = useState("");
     useEffect(() => {
       getData();
     }, []);

     const getData = () => {
       axios
         .get(`https://dog.ceo/api/breed/${state.e}/images/random`)
         .then((res) => {
        console.log(res)
           setData(res.data.message);
         })
         .catch((err) => console.log(err.message));
     };
     console.log(data);
    return (
        <div className='detailimg' style={{alignItems:"center"}}>
            <img src={data} alt="" />
        </div>
    );
};

export default Detail;