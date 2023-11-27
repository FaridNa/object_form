import styles from './ObjectForm.module.css'

const InputField = ({ label, type, value, onChange }) => (
  <label className={styles.label}>
    {label}
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  </label>
)

export default InputField
