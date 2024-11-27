import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setcategories]=useState([])
    useEffect(()=>{
      fetch('categories.json')
      .then(res=>res.json())
      .then(data=>setcategories(data))

    },[])

    return (
        <div className='space-y-4'>
                 <h2 className='text-3xl'>All Caterogy </h2>
                 {
                    categories.map(category=> <NavLink className='block ml-4 ' key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)
                 }
        </div>
    );
};

export default LeftSideNav;