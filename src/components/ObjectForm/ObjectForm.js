import { useEffect, useState } from "react";
import styles from "./ObjectForm.module.css";
import InputField from "./InputField";

const address = [
  { label: "Улица", type: "text", name: "street" },
  { label: "д.", type: "text", name: "house" },
  { label: "Этаж", type: "number", name: "floor" },
  { label: "Сколько этажей?", type: "number", name: "maxFloor" },
  { label: "Материал стен здания", type: "text", name: "walls" },
  { label: "Цвет стен", type: "text", name: "color" },
  {
    label: "На пересечении, примерно в (м)",
    type: "number",
    name: "lenghtFromCrossroad",
  },
  { label: "От перекрестка ул.", type: "text", name: "crossroad" },
  { label: "Вход", type: "text", name: "entry" },
  { label: "Подъезд с улицы", type: "text", name: "entrance" },
  {
    label: "Ближайшие ориентиры (рядом находящиеся магазины, вывески и т.д.)",
    type: "text",
    name: "landmark",
  },
];

const checkboxes = [
  {
    label: "Жилой?",
    type: "checkbox",
    name: "residential",
  },
  {
    label: "Административное здание?",
    type: "checkbox",
    name: "administrative",
  },
  {
    label: "Стоит отдельно?",
    type: "checkbox",
    name: "standAlone",
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
  { label: "Отделан (чем? цвет)", type: "text", name: "decoration" },
  { label: "Вывеска (что написано? цвет)", type: "text", name: "sign" },
  { label: "Выходит (сколько дверей, окон? цвет)", type: "text", name: "goes" },
  {
    label: "На окнах (решетки, рольставни, цвет?)",
    type: "text",
    name: "onWindos",
  },
  {
    label: "Козырек (есть? из чего сделан? цвет)",
    type: "text",
    name: "visor",
  },
];

const back = [
  {
    label: "Выходит (сколько дверей, окон? решетки, цвет?)",
    type: "text",
    name: "backExit",
  },
  {
    label: "Как осмотреть?",
    type: "text",
    name: "inspecting",
  },
];

const sides = [
  {
    label: "Выходит (сколько дверей, окон? цвет)",
    type: "text",
    name: "sideExit",
  },
];

const video = [
  {
    label: "Кол-во внутренних",
    type: "number",
    name: "numberOfVideoInside",
  },
  { label: "Кол-во внешних", type: "number", name: "numberOfVideoOutside" },
  { label: "Емкость диска", type: "text", name: "diskCapacity" },
  { label: "Удаленный доступ", type: "text", name: "remoteControl" },
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
    label: "Монтировал (если сторонняя организация)",
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
  const initialFormData = {
    street: "",
    house: "",
    floor: "",
    maxFloor: "",
    residential: false,
    administrative: false,
    standAlone: false,
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
  };

  const [file, setfile] = useState(null);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    const initialData = savedData ? JSON.parse(savedData) : initialFormData;

    // Для чекбоксов при обновлении выставляются правильные значения булевого типа
    const updatedData = Object.entries(initialData).reduce(
      (acc, [key, value]) => {
        if (checkboxes.some((checkbox) => checkbox.name === key)) {
          acc[key] = value === "true";
        } else {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );
    return updatedData;
  });

  // useEffect для сохранения значений в localStorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (fieldName) => (fieldValue) => {
    if (fieldName === "scheme") {
      setfile(fieldValue);
    } else {
      setFormData({ ...formData, [fieldName]: fieldValue });
    }
  };

  const objectToFormData = (obj) => {
    const formData = new FormData();
    Object.entries(obj).forEach(([key, value]) => {
      formData.append(key, value);
    });
    return formData;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = objectToFormData(formData);

    if (file) {
      data.append("shceme", file);
    }
    data.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <fieldset>
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
      </fieldset>
      <h4>Адрес</h4>
      <fieldset>
        {address.map(({ label, type, name }, index) => (
          <InputField
            key={index}
            label={label}
            type={type}
            value={formData[name]}
            onChange={handleInputChange(name)}
          />
        ))}
        {checkboxes.map(({ label, type, name }, index) => (
          <InputField
            key={index}
            label={label}
            type={type}
            value={formData[name]}
            onChange={() => handleInputChange(name)(!formData[name])}
          />
        ))}
      </fieldset>
      <h4>Оборудование</h4>
      <fieldset>
        {equipment.map(({ label, type, name }, index) => (
          <InputField
            key={index}
            label={label}
            type={type}
            value={formData[name]}
            onChange={handleInputChange(name)}
          />
        ))}
      </fieldset>
      <h4>Фасад</h4>
      <fieldset>
        {facade.map(({ label, type, name }, index) => (
          <InputField
            key={index}
            label={label}
            type={type}
            value={formData[name]}
            onChange={handleInputChange(name)}
          />
        ))}
      </fieldset>
      <h4>Тыл</h4>
      <fieldset>
        {back.map(({ label, type, name }, index) => (
          <InputField
            key={index}
            label={label}
            type={type}
            value={formData[name]}
            onChange={handleInputChange(name)}
          />
        ))}
      </fieldset>
      <h4>Торец (правый, левый)</h4>
      <fieldset>
        {sides.map(({ label, type, name }, index) => (
          <InputField
            key={index}
            label={label}
            type={type}
            value={formData[name]}
            onChange={handleInputChange(name)}
          />
        ))}
      </fieldset>
      <h4>Примечание</h4>
      <fieldset>
        <InputField
          label=''
          type='text'
          value={formData.note}
          onChange={handleInputChange("note")}
        />
        <p>
          Указать уязвимые места, пути обхода, люки, шахты, подвалы, также пути
          отхода, расположение блока и т.д
        </p>
      </fieldset>
      <h4>Сведения по видеонаблюдению</h4>
      <fieldset>
        {video.map(({ label, type, name }, index) => (
          <InputField
            key={index}
            label={label}
            type={type}
            value={formData[name]}
            onChange={handleInputChange(name)}
          />
        ))}
      </fieldset>
      <h4>Схема объекта с расположением датчикова</h4>
      <fieldset>
        <InputField
          label=''
          type='file'
          onChange={(file) => handleInputChange("scheme")(file)}
        />
        <InputField
          label='План расстановки оборудования согласован'
          type='text'
          value={formData.agreed}
          onChange={handleInputChange("agreed")}
        />
      </fieldset>
      <h4>Описание шлейфов</h4>
      <fieldset>
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
      </fieldset>
      <h4>Описание монтажа, приемка оборудования</h4>
      <fieldset>
        {acceptance.map(({ label, type, name }, index) => (
          <InputField
            key={index}
            label={label}
            type={type}
            value={formData[name]}
            onChange={handleInputChange(name)}
          />
        ))}
      </fieldset>
      <button type='submit' className={styles.button}>
        Отправить
      </button>
    </form>
  );
};

export default ObjectForm;
