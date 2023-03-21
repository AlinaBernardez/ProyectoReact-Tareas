import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
        password: Yup.string().required('Password required')
    }
)

const LoginFormik = () => {

    const initialCredentials = {
        email:'',
        password: ''
    }

    return (
        <div>
            <h4>Login con Formik</h4>
            <Formik 
            initialValues = {initialCredentials}
            //Yup validation schema:
            validationSchema = { loginSchema } 
            //onsubmit event:
            onSubmit={async (values) => {
                await new Promise((response) => setTimeout(response, 1000));
                alert(JSON.stringify(values, null, 2));
                localStorage.setItem('credentials', values)
            }}
            >
            {/* Obtaining props from Formik */}
            {({ touched, errors, isSubmitting }) => (
                <Form>
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
                            <div className='error'>
                                <p>{ errors.email }</p>
                            </div>
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
                    <button type="submit">Login</button>
                    {
                        isSubmitting ? (<p>Login your credentials...</p>) : null
                    }
                </Form>
            )}
            </Formik>
        </div>
    );
}

export default LoginFormik;
