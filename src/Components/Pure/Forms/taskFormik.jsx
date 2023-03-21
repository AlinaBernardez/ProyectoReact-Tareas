import React, { useRef } from 'react';
import { Levels } from '../../../Models/levels.enum';
import { Task } from '../../../Models/task.class';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const TaskFormik = ({ submit }) => {

    const initialValues = {
        name: '',
        description: '',
        level: Levels.NORMAL
    }

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(Levels.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        submit(newTask);
    }

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string().required('Please, insert a task name'),
            description: Yup.string().max(100, 'Description too long!').required('Decribe your task'),
            level: Yup.string().oneOf([Levels.BLOCKING, Levels.NORMAL, Levels.URGENT, 'Select priority'])
        }
    )

    return (
        <div>
            <Formik
            initialValues = {initialValues}
            validationSchema = {taskSchema}
            onSubmit = {addTask}
            >
            {({ touched, errors, isSubmitting }) => (
                <Form>
                <div>
                    <label htmlFor="name"></label>
                    <Field className='form-control form-control-md' style={ {width: '100%'} }
                        id="name"
                        name="name"
                        placeholder="Task name"
                        type="text"
                    />
                </div>
                
                    {
                        errors.userName && touched.userName && 
                        (
                            <ErrorMessage name='userName' component='div'></ErrorMessage>
                        )
                    }
                    <div>
                        <label htmlFor="name"></label>
                        <Field className='form-control form-control-md' style={ {width: '100%'} }
                            id="description"
                            name="description"
                            placeholder="Task description"
                            type="text"
                    />
                    </div>
                
                    {
                        errors.description && touched.description && 
                        (
                            <ErrorMessage name='description' component='div'></ErrorMessage>
                        )
                    }
                <label htmlFor="level"></label>
                    <select className='form-control form-control-md' style={ {width: '100%'} }>
                        <option disabled selected>Priority</option>
                        <option>Normal</option>
                        <option>Urgent</option>
                        <option>Blocking</option>
                    </select>
                <button style={ {width: '100%'} } className='btn btn-warning' type="submit">Add task</button>
                </Form>
            )}

            </Formik>
        </div>
    );
}

export default TaskFormik;
