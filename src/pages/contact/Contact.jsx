import FormInput from '@/components/FormInput/FormInput'
import { useFormik } from 'formik';
import { useState } from 'react';
import styles from './contact.module.scss'

export default function Contact() {
  let [showSuccessModal, setShowSuccessModal] = useState(false);

  const formik = useFormik({  
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      phone: '',
      message: '',  
    },
    // validationSchema: Yup.object({
    //   firstName: Yup.string()
    //     .max(15, 'Must be 15 characters or less')
    //     .required('Required'),
    // }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      setShowSuccessModal(true);
    },
  });


  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>CONTACT US</h1>
            <p className={styles.description}>Fill out the form so we can contact you</p>
          </div>
          <div className={styles.map}/>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div className={styles.inputsContainer}>
              <FormInput
                name="firstName"
                labelText="Name"
                formik={formik}
                placeholder="Enter your name"
              />
              <FormInput
                name="lastName"
                labelText="Last Name"
                formik={formik}
                placeholder="Enter your last name"
              />
              <FormInput
                name="email"
                labelText="Email"
                formik={formik}
                placeholder="Enter your email"
              />
              <FormInput
                name="address"
                labelText="Address"
                formik={formik}
                placeholder="Enter your address"
              />
              <FormInput
                name="phone"
                labelText="Phone"
                formik={formik}
                placeholder="+1"
              />
            </div>
            <div className={styles.textareaContainer}>
              <FormInput
                name="message"
                as="textarea"
                labelText="Message"
                formik={formik}
                placeholder="Enter your message here"
              />
            </div>
            <button className={styles.button} type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className={showSuccessModal ? styles.successModal : styles.successModalInactive}>
        <div className={styles.modalContent}>
          <h1>Your message has been sent successfully</h1>
        </div>
      </div>
    </>
  )
}

