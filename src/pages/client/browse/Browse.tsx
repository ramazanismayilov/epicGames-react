import React, { useEffect } from 'react'

const Browse: React.FC = () => {
    useEffect(() => {
        document.title = "Browse - Epic Games";
    }, []);
    return (
        <div>Browse</div>
    )
}

export default Browse