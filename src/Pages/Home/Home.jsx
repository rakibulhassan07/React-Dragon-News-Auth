import React from 'react';
import Header from './Shared/Header/Header';
import Navbar from './Shared/Navbar/Navbar';
import LeftSideNav from './Shared/LeftSideNav/LeftSideNav';
import RightSideNav from './Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';


const Home = () => {
    const news =useLoaderData();
  //  console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                     <LeftSideNav></LeftSideNav>
                </div>
                {/*News container */}
                <div className='lg:col-span-2'>
                     {
                        news.map(anews=> <NewsCard key={anews._id} news={anews}></NewsCard> )
                     }
                </div>
                <div>
                     <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;