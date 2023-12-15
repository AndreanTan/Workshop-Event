import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function ProfileDropDown() {
  const username = useSelector((state) => state.user.username);
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{username}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">Transaction</DropdownItem>
        <DropdownItem key="copy">
          <Button color="danger">Logout</Button>
        </DropdownItem>
        {/* <DropdownItem key="edit">Edit file</DropdownItem> */}
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
