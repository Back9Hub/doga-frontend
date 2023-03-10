import styles from './formInput.module.scss'

export default function FormInput({as, name, labelText, formik, placeholder="", ...props}) {
  return (
    <label className={styles.label}>
      {labelText}
      { as === 'textarea' 
        ? <textarea 
            name={name}
            className={`${styles.input} ${styles.textarea}`} 
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
            {...props}
          /> 
        : <input 
            name={name}
            className={styles.input} 
            type="text" 
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
            {...props}
          />}
    </label>
  )
}