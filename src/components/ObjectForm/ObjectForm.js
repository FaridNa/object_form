import { useState } from "react";
import styles from "./ObjectForm.module.css";

export const InputField = ({ label, type, value, onChange }) => (
  <label className={styles.label}>
    {label}
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  </label>
);

const ObjectForm = () => {
  const [data, setData] = useState({});

  const handleInputChange = (text, name) => {
    setData({ ...data, [name]: text.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputField
        label='Пультовый номер'
        type='number'
        value={data.objectNumber}
        onChange={(e) => handleInputChange(e, "objectNumber")}
      />
      <InputField
        label='Наименование'
        type='text'
        value={data.objectName}
        onChange={(e) => handleInputChange(e, "objectName")}
      />
      <InputField
        label='Адрес'
        type='text'
        value={data.objectAddress}
        onChange={(e) => handleInputChange(e, "objectAddress")}
      />
      <InputField
        label='Вход'
        type='text'
        value={data.objectEntrance}
        onChange={(e) => handleInputChange(e, "objectEntrance")}
      />
      <button type='submit' className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default ObjectForm;
