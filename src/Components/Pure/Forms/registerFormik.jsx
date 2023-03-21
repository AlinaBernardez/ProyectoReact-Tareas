import React from 'react';
import { User } from '../../../Models/user.class';
import { Roles } from '../../../Models/roles.enum';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterFormik = () => {

    let user  = new User();

    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirm: '',
        role: Roles.USER
    }

    const registerSchema = Yup.object().shape(
        {
            userName: Yup.string()
                            .min(6, 'Name is too short!')
                            .max(20, 'Name is too long!')
                            .required('This field is required'),
            email: Yup.string()
                        .email('Invalid email format')
                        .required('Email is required'),
            password: Yup.string()
                            .min(8, 'Password too short!')
                            .required('Password required'),
            confirm: Yup.string()
                        .when('password', {
                            is: value => (value && value.length > 0 ? true : false),
                            then: Yup.string().oneOf(
                                [Yup.ref('password')],
                                'Password must match!'
                            )
                        }).required('Confirm password'),
            role: Yup.string()
                        .oneOf([Roles.USER, Roles.ADMIN, 'Select a role: User or Admin'])
                        .required('Required field')
        }
    )

    const submit = (values) => {
        console.log('register user')
    };

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
            initialValues = {initialValues}
            //Yup validation schema:
            validationSchema = { registerSchema } 
            //onsubmit event:
            onSubmit={async (values) => {
                await new Promise((response) => setTimeout(response, 1000));
                alert(JSON.stringify(values, null, 2));
            }}
            >
            {({ touched, errors, isSubmitting }) => (
                <Form>
                <label htmlFor="userName">User Name</label>
                    <Field
                        id="userName"
                        name="userName"
                        placeholder="Your User Name"
                        type="text"
                    />
                    {
                        errors.userName && touched.userName && 
                        (
                            <ErrorMessage name='userName' component='div'></ErrorMessage>
                        )
                    }
                <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        type="email"
                    />
                    {
                        errors.email && touched.email && 
                        (
                            <ErrorMessage name='email' component='div'></ErrorMessage>
                        )
                    }
                <label htmlFor="password">Password</label>
                    <Field 
                        id="password" 
                        name="password" 
                        placeholder="Password"
                        type="password"
                    />
                    {
                        errors.password && touched.password && 
                        (
                            <ErrorMessage name='password' component='div'></ErrorMessage>
                        )
                    }
                <label htmlFor="confirm">Confirm Password</label>
                    <Field 
                        id="confirm" 
                        name="confirm" 
                        placeholder="Confirm Password"
                        type="password"
                    />
                    {
                        errors.confirm && touched.confirm && 
                        (
                            <ErrorMessage name='confirm' component='div'></ErrorMessage>
                        )
                    }
                <button type="submit">Register</button>
                    {
                        isSubmitting ? (<p>Sending your credentials...</p>) : null
                    }
                </Form>
            ) }
            </Formik>
        </div>
    );
}

export default RegisterFormik;
