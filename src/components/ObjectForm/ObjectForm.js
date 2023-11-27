import { useState } from 'react'
import styles from './ObjectForm.module.css'
import ObjectAddress from './ObjectAddress/ObjectAddress'
import InputField from './InputField'

const ObjectForm = () => {
  const [formData, setFormData] = useState({})

  const handleInputChange = (fieldName) => (fieldValue) => {
    setFormData({ ...formData, [fieldName]: fieldValue })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    alert(JSON.stringify(formData))
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputField
        label="Пультовый номер"
        type="number"
        value={formData.objectNumber}
        onChange={handleInputChange('objectNumber')}
      />
      <InputField
        label="Наименование"
        type="text"
        value={formData.name}
        onChange={handleInputChange('name')}
      />
      <ObjectAddress
        handleInputChange={handleInputChange}
        formData={formData}
      />
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  )
}

export default ObjectForm
