import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';


const List = () => {
    const [data,setData]=useState([])
    const navigate=useNavigate()
        useEffect(() => {
          getData();
        }, []);

        const getData = () => {
          axios
            .get("https://dog.ceo/api/breeds/list/all")
            .then((res) =>{ 
                  var newdata = Object.keys(res.data.message);
                  setData(newdata);
            })
            .catch((err) => console.log(err.message));
        };
        // console.log(data)
    return (
      <>
      {data.length>0?data.map((e,i)=>{
      return <button onClick={()=>navigate("/detail",{state:{e}})}>{e}</button> 
    
      }):null}
        
      </>
    );
};

export default List;