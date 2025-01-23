import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const id = useId();

  const StatusFilter = useSelector((state) => state.filters.name);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchbox}>
      <label htmlFor={id} className={s.label}>
        Find contacts by name
        <input
          id={id}
          type="text"
          value={StatusFilter}
          onChange={handleSearch}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
