import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

export default function Footer() {
    const ctx = useContext(AuthContext);
    return (
        <footer className="relative bg-blueGray-200 pt-8 pb-6 border-t-2 border-gray-800 shadow-lg mt-8 p-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-blueGray-700">
                            Let's keep in touch!
                        </h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">

                            <a href="http://twitter.com">
                                <button
                                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <i className="fab fa-twitter" />
                                </button>
                            </a>

                            <a href="http://facebook.com">
                                <button
                                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <i className="fab fa-facebook-square" />
                                </button>
                            </a>

                            <a href="http://github.com">
                                <button
                                    className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <i className="fab fa-github" />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Useful Links
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link

                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            to="/"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link

                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            to="/catalog"
                                        >
                                            Catalog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link

                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            to="/search"
                                        >
                                            Search
                                        </Link>
                                    </li>
                                    {ctx.isAuthenticated && (
                                        <>
                                            <li>
                                                <Link

                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    to="/profile"
                                                >
                                                    My Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link

                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    to="/create"
                                                >
                                                    Create new
                                                </Link>
                                            </li>
                                        </>
                                    )}

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </footer>

    );
}