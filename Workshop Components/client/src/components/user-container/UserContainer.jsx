import { useEffect, useState } from "react";
import CreateEdit from "../user/CreateEdit";
import UserDelete from "../user/UserDelete";
import UserDetails from "../user/UserDetails";
import Pagination from "./pagination/Pagination";
import Search from "./search/Search";
import TableWrapper from "./table-wrapper/TableWrapper";

export default function UserContainer() {
    const [users, setUsers] = useState([]);
    const [create, setCreate] = useState(false);
    const [view, setView] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userDelete, setDelete] = useState(false);

    const baseUrl = "http://localhost:3030/jsonstore/users";
    useEffect(() => {
        // TO DO Add error handling ....
        fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => {
                setUsers(Object.values(data));
            });
    }, []);


    const createClickHandler = () => {
        setCreate(true);
    };

    const closeModal = () => {
        setCreate(false);
        setView(false);
    };

    const createUser = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newUser = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phoneNumber: formData.get("phoneNumber"),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            imageUrl: formData.get("imageUrl"),
            address: {
                country: formData.get("country"),
                city: formData.get("city"),
                street: formData.get("street"),
                streetNumber: formData.get("streetNumber"),
            },
        };
        fetch(baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers((prevState) => [...prevState, data]);
                setCreate(false);
            });
    };

    const viewDetails = (id) => {
        const user = users.find(user => user._id === id);
        setSelectedUser(user);
        setView(true);
    };

    return (
        <>
            <Search />
            <TableWrapper
                users={users}
                createClickHandler={createClickHandler}
                viewDetails={viewDetails}
            />
            <Pagination />
            {view && <UserDetails user={selectedUser} close={closeModal} />}
            {create && <CreateEdit close={closeModal} create={createUser} />}
            {userDelete && <UserDelete />}
        </>
    );
}