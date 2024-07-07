import CreateEdit from "../user/CreateEdit";
import UserDelete from "../user/UserDelete";
import UserDetails from "../user/UserDetails";
import Pagination from "./pagination/Pagination";
import Search from "./search/Search";
import TableWrapper from "./table-wrapper/TableWrapper";


export default function UserContainer() {
    const flag = false
  return (
    <>
    <Search />
    <TableWrapper />
    <Pagination />
    {flag && <UserDetails />}
    {flag && <CreateEdit />}
    {flag && <UserDelete />}
    </>
  );
}