import React from 'react';
import Header from './Header';
import FeaturedPosts from '../sictions/FeaturedPosts';



const Layout = ({children}) => {
  return (
    <>
        <Header />
        <FeaturedPosts />
        {children} 
    </>
  )
        
}

export default Layout