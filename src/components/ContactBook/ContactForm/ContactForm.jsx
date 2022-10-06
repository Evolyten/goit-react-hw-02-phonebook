import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import css from './ContactForm.module.css'


const initialValues = {
        name: '',
        number:'',
    }
    

const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    number:Yup.number().required()
    })
export const ContactForm=({onSubmitForm})=>{
    

    const handleSubmit = (values, {resetForm}) => {
        onSubmitForm(values)
        console.log(values)
        resetForm()
    }

  
        return (
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}> 
                <Form className={css.form}>
                    <label className={css.label}>
            Name
            <Field 
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
                    </label>
                    <label className={css.label}>
            Number
            <Field 
            className={css.input}
            type="tel"
            name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       
                            required />
                        </label>
            <button className={css.btnSubmit} type="submit">add contact</button>
                </Form></Formik>
        )
    }
// }

export default ContactForm