import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";
import { useId } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const initialValues = { name: "", number: "" };

  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .required("Це поле обовʼязкове!"),
    number: Yup.string()
      .min(7, "Мінімум 7 символів")
      .max(13, "Максимум 13 символів")
      .required("Це поле обовʼязкове!"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({ id: nanoid(), name: values.name, number: values.number })
    );
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label htmlFor={nameId} className={s.label}>
            <span>Name: </span>
            <Field id={nameId} className={s.input} name="name" type="text" />
            <ErrorMessage name="name" className={s.error} component="div" />
          </label>
          <label htmlFor={numberId} className={s.label}>
            <span>Number: </span>
            <Field
              id={numberId}
              className={s.input}
              name="number"
              type="text"
              placeholder="+38(000) 000 00 00"
            />
            <ErrorMessage name="number" className={s.error} component="div" />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
