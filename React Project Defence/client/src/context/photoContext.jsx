import { createContext, useState } from "react";

const PhotoContext = createContext();

export default PhotoContext;


export const PhotoProvider = ({ children }) => {
    const [photoUrl,setPhotoUrl] = useState('');

    const setPhotoHandler = (url) => {
        setPhotoUrl(url);
    }
    
    const contextData = {
        photoUrl,
        setPhotoHandler
    }

    return (
        <PhotoContext.Provider value={contextData} >
            {children}
        </PhotoContext.Provider>
    );
}