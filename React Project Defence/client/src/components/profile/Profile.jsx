import { useContext, useState } from "react";
import OwnListings from "../ownListings/OwnListings";

import splitName from "../../utils/splitName";
import Photo from "../photo/Photo";
import AuthContext from "../../context/authContext";
import PhotoContext from "../../context/photoContext";



export default function Profile() {
   
    const [click,setClick] = useState(false);
    // const [photoUrl,setPhotoUrl] = useState('');
    const {photoUrl,setPhotoHandler : photoHandler} = useContext(PhotoContext);
    const ctx = useContext(AuthContext);

    const handleClick = () => setClick(!click);
    const closeModal = () => setClick(false);
    const setPhotoHandler = (url) => {
        photoHandler(url);
        //to do add photo to database
    };

    return (
        <>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="p-16">
                    <div className="p-8 bg-white shadow mt-24">
                        {" "}
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {" "}
                            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                                {" "}

                            </div>{" "}
                            <div className="relative">
                                {" "}
                                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                {photoUrl ? (
                                        <img
                                            src={photoUrl}
                                            alt="Profile"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-24 w-24 text-indigo-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </div>{" "}
                            </div>{" "}
                            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                                <button onClick={handleClick} className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                    {" "}
                                    Add Photo
                                </button>{" "}

                            </div>
                        </div>{" "}
                        <div className="mt-20 text-center  pb-12">
                            {" "}
                            <h1 className="text-4xl font-medium text-gray-700">
                            {splitName(ctx.email)}
                            </h1>{" "}

                        </div>{" "}

                    </div>
                </div>
            </div>
            <OwnListings />
            {click && <Photo closeModal={closeModal} setPhoto={setPhotoHandler}/>}
           
        </>
    );
}