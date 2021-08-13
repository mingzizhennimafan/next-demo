import React from "react"

import Footer from "./Footer"
import Header from "./Header"

const Layout: React.FC = ({ children }) => {
    // Render
    return (
        <>
            <Header />
            <main style={{
                minHeight: 'calc(100vh - 108px)',
            }}>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
