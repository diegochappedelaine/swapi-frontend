import { useState } from "react";
import { API_SEARCH } from "api/end-points";

type FormProps = {
  handleSubmit: (url: string) => Promise<void>;
};

const Form: React.FC<FormProps> = ({ handleSubmit }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSearch(e.target.value);

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!search.trim().length) return;
    handleSubmit(`${API_SEARCH}?value=${search}`);
    setSearch("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={search} onChange={handleChange} type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
