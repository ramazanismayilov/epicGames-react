import React, { useEffect } from 'react'

const News: React.FC = () => {
    useEffect(() => {
        document.title = "News - Epic Games";
    }, []);
    
    return (
        <div>News</div>
    )
}

export default News