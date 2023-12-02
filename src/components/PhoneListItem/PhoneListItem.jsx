import { useDispatch } from "react-redux"
import { ButtonItem, ListItem } from "./PhoneListItem.style"
import { deleteContact } from "redux/contacts/operations"


export const PhoneListItem = ({ id, name, number}) =>
{
const dispatch = useDispatch()
  const handleRemove = () => {
dispatch(deleteContact(id))
  }

    return (
      <ListItem key={id} >
        {name}: {number}
        <ButtonItem
          onClick={handleRemove}>
          Remove
        </ButtonItem>
      </ListItem>
    )}
  
