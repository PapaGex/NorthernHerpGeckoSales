import React from 'react';
import { Formik, form } from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';

export const SignUp = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        username: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Password must match')
    })
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={validate}
        >
            {formik => (
                <div>
                    <h1>Sign Up</h1>
                    {console.log(formik.values)}
                    <form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Username" name="username" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        <button type="submit" classname="btn btn-primary">Register</button>
                        <button type="reset"  className="btn btn-primary">Refresh</button>
                    </form>
                </div>
            )}
        </Formik>
    )
}