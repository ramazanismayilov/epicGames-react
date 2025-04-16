import React, { useEffect } from 'react'

const Wishlist: React.FC = () => {
        useEffect(() => {
            document.title = "Wishlist - Epic Games";
        }, []);

    return (
        <div>Wishlist</div>
    )
}

export default Wishlist