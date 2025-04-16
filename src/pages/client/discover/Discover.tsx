import React, { useEffect } from 'react'

const Discover: React.FC = () => {
    useEffect(() => {
        document.title = "Discover - Epic Games";
    }, []);
    
    return (
        <div>Discover</div>
    )
}

export default Discover