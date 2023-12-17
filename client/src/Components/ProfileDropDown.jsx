import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../redux/feature/users";
import { useNavigate } from "react-router-dom";

export default function ProfileDropDown() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const TransactionList = ({ size, fill }) => {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={fill}>
        <path d="M18 2.25H6A1.76 1.76 0 0 0 4.25 4v15.13A1.75 1.75 0 0 0 7 20.59l1-.67 1.28.95a1.23 1.23 0 0 0 1.5 0l1.22-.93 1.25.93c.216.164.48.252.75.25.27.003.535-.085.75-.25l1.25-.95 1 .67a1.75 1.75 0 0 0 2.72-1.46V4A1.76 1.76 0 0 0 18 2.25Zm.25 16.88a.23.23 0 0 1-.13.22.24.24 0 0 1-.26 0l-1.44-1a.75.75 0 0 0-.87 0L14 19.56l-1.55-1.16a.75.75 0 0 0-.9 0L10 19.56 8.45 18.4a.75.75 0 0 0-.87 0l-1.44 1a.24.24 0 0 1-.26 0 .23.23 0 0 1-.13-.22V4A.25.25 0 0 1 6 3.75h12a.25.25 0 0 1 .25.25v15.13Z" />
        <path d="M15.5 6.25h-7a.75.75 0 0 0 0 1.5h7a.75.75 0 1 0 0-1.5Zm0 4h-7a.75.75 0 1 0 0 1.5h7a.75.75 0 1 0 0-1.5Zm-3.5 4H8.5a.75.75 0 1 0 0 1.5H12a.75.75 0 1 0 0-1.5Z" />
      </svg>
    );
  };
  const username = useSelector((state) => state.user.username);
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="text-black" variant="light">
          Hai, {username}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {/* <DropdownItem key="new">Transaction</DropdownItem> */}
        <DropdownItem key="setting">
          <div className="flex items-center gap-2 p-2">
            <TransactionList fill={"fill-text -ml-[0.8px]"} size={24} />
            <h4 className="font-medium text-body-lg">Transaction History</h4>
          </div>
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          onClick={() => {
            dispatch(onLogout());
            navigate("/login");
          }}
        >
          <div className="flex items-center gap-2 p-2">
            <IoLogOutOutline size={24} />
            <h4 className="font-medium text-body-lg">Logout</h4>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
