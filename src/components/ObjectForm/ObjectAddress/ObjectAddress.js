import { InputField } from "../ObjectForm";

const address = [
  { name: "street", label: "Улица", type: "text" },
  { label: "д.", type: "text", name: "house" },
  { label: "этаж", type: "number", name: "floor" },
  { label: "этажное здание", type: "number", name: "maxFloor" },
  { label: "жилого", type: "checkbox", name: "residential" },
  { label: "административного", type: "checkbox", name: "administrative" },
  { label: "стоящего отдельно", type: "checkbox", name: "standAlone" },
  { label: "цвет", type: "text", name: "color" },
  { label: "цвет", type: "text", name: "color" },
  { label: "цвет", type: "text", name: "color" },
];

const objectAddress = () => {
  return <InputField label='' />;
};
