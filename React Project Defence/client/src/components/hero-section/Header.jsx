"use client";

import { useContext, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";



export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    let navigation = [
        { name: "Home", href: "/" },
        { name: "Catalog", href: "/catalog" },
        { name: "Search", href: "/search" },
        { name: "About", href: "/about" },
        { name: "Create New", href: "/create" },

    ];

    const authContext = useContext(AuthContext);

    if (!authContext.isAuthenticated) {
        navigation = navigation.slice(0, 4);
    } else {
        navigation = navigation.slice(0, 6);
    }

    return (

        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                aria-label="Global"
                className="flex items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <Link
                        to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="../public/React-icon.svg.png"
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                {authContext.isAuthenticated ? (
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
                        <Link to="/profile" className="text-sm font-semibold leading-6 text-gray-900">
                            My Profile
                        </Link>
                        <button
                            onClick={authContext.logout}
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Log out
                        </button>
                    </div>
                ) : (
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
                        <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in
                        </Link>
                        <Link to="/register" className="text-sm font-semibold leading-6 text-gray-900">
                            Register
                        </Link>
                    </div>
                )}

            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="../public/React-icon.svg.png"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon
                                aria-hidden="true"
                                className="h-6 w-6"
                            />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            {!authContext.isAuthenticated ? (
                                <div className="py-6">
                                    <Link
                                        to="/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Register
                                    </Link>
                                </div>)
                                :
                                (<div className="py-6">
                                    <Link
                                        to="/profile"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        My Profile
                                    </Link>
                                    <button
                                        onClick={authContext.logout}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Logout
                                    </button>
                                </div>)}

                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>

    );
}
