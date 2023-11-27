import InputField from '../InputField'

const address = [
  { label: 'Улица', type: 'text', name: 'street' },
  { label: 'д.', type: 'text', name: 'house' },
  { label: 'этаж', type: 'number', name: 'floor' },
  { label: 'этажное здание', type: 'number', name: 'maxFloor' },
  { label: 'жилого', type: 'checkbox', name: 'residential' },
  { label: 'административного', type: 'checkbox', name: 'administrative' },
  { label: 'стоящего отдельно', type: 'checkbox', name: 'standAlone' },
  { label: 'цвет', type: 'text', name: 'color' },
  { label: 'цвет', type: 'text', name: 'color' },
  { label: 'цвет', type: 'text', name: 'color' },
]

const ObjectAddress = ({ handleInputChange, formData }) => {
  return (
    <form onSubmit="">
      {address.map(({ label, type, name, index }) => (
        <InputField
          key={index}
          label={label}
          type={type}
          value={formData.name}
          onChange={handleInputChange(name)}
        />
      ))}
    </form>
  )
}

export default ObjectAddress
