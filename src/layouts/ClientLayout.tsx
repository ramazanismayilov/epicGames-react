import React from 'react'
import Header from '../shared/components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/components/Footer'

const ClientLayout: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default ClientLayout