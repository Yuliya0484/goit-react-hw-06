import s from "./Contact.module.css";
import { BsPersonSquare } from "react-icons/bs";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const Contact = ({ item, onDelete }) => {
  return (
    <>
      <li className={s.item}>
        <div>
          <p>
            <BsPersonSquare className={s.card_icon} />
            {item.name}
          </p>
          <p>
            <LiaPhoneVolumeSolid className={s.card_icon} />
            {item.number}
          </p>
        </div>
        <button
          className={s.button}
          type="button"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
