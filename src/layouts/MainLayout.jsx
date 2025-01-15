import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <main className="min-h-screen bg-gray-50">
            {children}
        </main>
    );
};

export default MainLayout;