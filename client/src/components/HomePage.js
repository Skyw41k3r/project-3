import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';


export default function HomePage() {
    const [ currentPage, setCurrentPage] = useState('Home');
    
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Blog') {
            return <Blog />;
        }
        if (currentPage === 'About'){
            return <About Us />;
        }         
    };

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
            {}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {}
            {renderPage()}
        </div>
    );
}