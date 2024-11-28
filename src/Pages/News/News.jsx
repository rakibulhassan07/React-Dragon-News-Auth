import React from 'react';
import Header from '../Home/Shared/Header/Header';
import RightSideNav from '../Home/Shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from '../Home/Shared/Navbar/Navbar';

const News = () => {
    const {id}=useParams();
    return (
        <div>
           
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                     <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            
            
        </div>
    );
};

export default News;