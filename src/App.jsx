import { PiAddressBookDuotone } from "react-icons/pi";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  return (
    <div className="phonebook-box">
      <h1 className="phonebook-title">
        Phonebook
        <PiAddressBookDuotone className="icon" />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
