import { useState } from "react";
import styles from "./ObjectForm.module.css";
import InputField from "./InputField";

const address = [
  { label: "Улица", type: "text", name: "street" },
  { label: "д.", type: "text", name: "house" },
  { label: "этаж", type: "number", name: "floor" },
  { label: "этажное здание", type: "number", name: "maxFloor" },
  { label: "жилого", type: "checkbox", name: "residential" },
  { label: "административного", type: "checkbox", name: "administrative" },
  { label: "стоящего отдельно", type: "checkbox", name: "standAlone" },
  { label: "материал стен здания", type: "text", name: "walls" },
  { label: "цвет", type: "text", name: "color" },
  {
    label: "на пересечении примерно",
    type: "number",
    name: "lenghtFromCrossroad",
  },
  { label: "м. перекрестка ул.", type: "text", name: "crossroad" },
  { label: "Вход", type: "text", name: "entry" },
  { label: "Подъезд с улицы", type: "text", name: "entrance" },
  {
    label: "Ближайшие ориентиры (рядом находящиеся магазины, вывески и т.д.)",
    type: "text",
    name: "landmark",
  },
];

const equipment = [
  { label: "Считыватель у", type: "text", name: "TM" },
  { label: "Вид оборудования", type: "text", name: "hardware" },
  { label: "Наличие ББП", type: "text", name: "UPS" },
  { label: "Номер блока", type: "text", name: "blockNumber" },
  { label: "Год изготовления", type: "date", name: "yearOfConstruction" },
  { label: "Дата монтажа", type: "date", name: "mountDate" },
  { label: "Замена (батареек, АКБ)", type: "text", name: "battery" },
];

const facade = [
  { label: "отделан", type: "text", name: "decoration" },
  { label: "вывеска", type: "text", name: "sign" },
  { label: "выходит", type: "text", name: "goes" },
  { label: "на окнах", type: "text", name: "onWindos" },
  { label: "козырек", type: "text", name: "visor" },
];

const back = [
  { label: "выходит", type: "text", name: "backExit" },
  { label: "Как осмотреть?", type: "text", name: "inspecting" },
];

const sides = [{ label: "выходит", type: "text", name: "sideExit" }];

const video = [
  {
    label: "Количество внутренних",
    type: "number",
    name: "numberOfVideoInside",
  },
  { label: "внешних", type: "number", name: "numberOfVideoOutside" },
  { label: "Емкость диска", type: "text", name: "diskCapacity" },
  { label: "удаленный доступ", type: "text", name: "remoteControl" },
  { label: "Видеорег. канал", type: "text", name: "videoChannal" },
];

const loops = [
  { label: "1 шл.", type: "text", name: "firstLoop" },
  { label: "2 шл.", type: "text", name: "secondLoop" },
  { label: "3 шл.", type: "text", name: "thirdLoop" },
  { label: "4 шл.", type: "text", name: "fourthLoop" },
  { label: "5 шл.", type: "text", name: "fifthLoop" },
  { label: "6 шл.", type: "text", name: "sixthLoop" },
  { label: "7 шл.", type: "text", name: "seventhLoop" },
  { label: "8 шл.", type: "text", name: "eighthLoop" },
];

const acceptance = [
  { label: "Техник", type: "text", name: "tech" },
  { label: "Описание проверил бригадир", type: "text", name: "foreman" },
  { label: "Принял инженер", type: "text", name: "engineer" },
  { label: "Дог. на обсл. ПС", type: "text", name: "FA" },
  {
    label: "Монтировал (если сторонняя организация",
    type: "text",
    name: "mounted",
  },
  { label: "Соответствует", type: "text", name: "corresponds" },
  {
    label: "Дата внесения изменений",
    type: "date",
    name: "dateOfModification",
  },
];

const ObjectForm = () => {
  const [formData, setFormData] = useState({
    street: "",
    house: "",
    floor: "",
    maxFloor: "",
    residential: "",
    administrative: "",
    standAlone: "",
    walls: "",
    color: "",
    lenghtFromCrossroad: "",
    crossroad: "",
    entry: "",
    entrance: "",
    landmark: "",
    objectNumber: "",
    name: "",
    TM: "",
    hardware: "",
    UPS: "",
    blockNumber: "",
    yearOfConstruction: "",
    mountDate: "",
    battery: "",
    decoration: "",
    sign: "",
    goes: "",
    onWindos: "",
    visor: "",
    backExit: "",
    inspecting: "",
    sideExit: "",
    numberOfVideoInside: "",
    numberOfVideoOutside: "",
    diskCapacity: "",
    remoteControl: "",
    videoChannal: "",
    firstLoop: "",
    secondLoop: "",
    thirdLoop: "",
    fourthLoop: "",
    fifthLoop: "",
    sixthLoop: "",
    seventhLoop: "",
    eighthLoop: "",
    tech: "",
    foreman: "",
    engineer: "",
    FA: "",
    mounted: "",
    corresponds: "",
    dateOfModification: "",
    note: "",
    agreed: "",
    sticker: "",
    stickerNumber: "",
  });

  const handleInputChange = (fieldName) => (fieldValue) => {
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert(JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.objectNumber}>
        <InputField
          label='Пультовый номер'
          type='number'
          value={formData.objectNumber}
          onChange={handleInputChange("objectNumber")}
        />
      </div>
      <InputField
        label='Наименование'
        type='text'
        value={formData.name}
        onChange={handleInputChange("name")}
      />
      <h1>Адрес</h1>
      {address.map(({ label, type, name }, index) => (
        <InputField
          key={index}
          label={label}
          type={type}
          value={formData[name]}
          onChange={handleInputChange(name)}
        />
      ))}
      <h1>Оборудование</h1>
      {equipment.map(({ label, type, name }, index) => (
        <InputField
          key={index}
          label={label}
          type={type}
          value={formData[name]}
          onChange={handleInputChange(name)}
        />
      ))}
      <h1>Фасад</h1>
      {facade.map(({ label, type, name }, index) => (
        <InputField
          key={index}
          label={label}
          type={type}
          value={formData[name]}
          onChange={handleInputChange(name)}
        />
      ))}
      <h1>Тыл</h1>
      {back.map(({ label, type, name }, index) => (
        <InputField
          key={index}
          label={label}
          type={type}
          value={formData[name]}
          onChange={handleInputChange(name)}
        />
      ))}
      <h1>Торец (правый, левый)</h1>
      {sides.map(({ label, type, name }, index) => (
        <InputField
          key={index}
          label={label}
          type={type}
          value={formData[name]}
          onChange={handleInputChange(name)}
        />
      ))}
      <h1>Примечание</h1>
      <InputField
        label=''
        type='text'
        value={formData.note}
        onChange={handleInputChange("note")}
      />
      <p>Указать уязвимые места, пути обхода, расположение блока и т.д</p>
      <h1>Сведения по видеонаблюдению</h1>
      {video.map(({ label, type, name }, index) => (
        <InputField
          key={index}
          label={label}
          type={type}
          value={formData[name]}
          onChange={handleInputChange(name)}
        />
      ))}
      <h1>Схема объекта с расположением датчикова</h1>
      <InputField
        label=''
        type='file'
        value={formData.scheme}
        onChange={handleInputChange("scheme")}
      />
      <InputField
        label='План расстановки оборудования согласован'
        type='text'
        value={formData.agreed}
        onChange={handleInputChange("agreed")}
      />
      {loops.map(({ label, type, name }, index) => (
        <InputField
          key={index}
          label={label}
          type={type}
          value={formData[name]}
          onChange={handleInputChange(name)}
        />
      ))}
      <InputField
        label='Наклеен стикер'
        type='text'
        value={formData.sticker}
        onChange={handleInputChange("sticker")}
      />
      <InputField
        label='Кол-во'
        type='number'
        value={formData.stickerNumber}
        onChange={handleInputChange("stickerNumber")}
      />
      {acceptance.map(({ label, type, name }, index) => (
        <InputField
          key={index}
          label={label}
          type={type}
          value={formData[name]}
          onChange={handleInputChange(name)}
        />
      ))}
      <button type='submit' className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default ObjectForm;
