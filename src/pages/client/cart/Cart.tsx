import React, { useEffect } from 'react'

const Cart: React.FC = () => {
    useEffect(() => {
        document.title = "Cart - Epic Games";
    }, []);

    return (
        <div>Cart</div>
    )
}

export default Cart