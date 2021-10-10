import React from "react";
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field, meta)
    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input type="text"
                {...field} {...props}
            />
            <ErrorMessage name={field.name} />
        </div>
    )
}
