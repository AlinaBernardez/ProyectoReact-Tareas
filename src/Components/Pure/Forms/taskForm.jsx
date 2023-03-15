import React, { useRef } from 'react';
import PropTypes from 'react';
import { Levels } from '../../../Models/levels.enum';
import { Task } from '../../../Models/task.class';

const TaskForm = ({submit}) => {

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

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'></input>
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Description'></input>
                <label htmlFor='selectLevel' className='sr-only'>Priority</label>
                <select ref={levelRef} defaultValue={Levels.NORMAL} id='selectLevel'>
                <option value={Levels.NORMAL}>Normal</option>
                <option value={Levels.URGENT}>Urgent</option>
                <option value={Levels.BLOCKING}>Blocking</option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    submit: PropTypes.func
}

export default TaskForm;
