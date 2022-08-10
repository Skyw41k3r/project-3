import React, { usestate } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Contact from './pages/Contact';


export default function HomePage() {
    const [ currentPage, setCurrentPage] = usestate('Home');
    
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
            {}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}
             />
            {}
            {renderPage()}
        </div>
    )
}