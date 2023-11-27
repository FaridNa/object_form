const InputField = ({ label, type, value, onChange }) => (
  <label>
    {label}
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);

export default InputField;
