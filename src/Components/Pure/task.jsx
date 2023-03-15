import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../Models/task.class';
import { Levels } from '../../Models/levels.enum';
import '../../Styles/taskStyle.css'

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Task created')
        return () => {
            console.log(`Task: ${task.name} is going to unmount... `);
        };
    }, [task]);

    function taskLevelBadge() {
        switch (task.level) {
            case Levels.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            { task.level }
                        </span>
                    </h6>
                )
                case Levels.URGENT:
                    return(
                        <h6 className='mb-0'>
                            <span className='badge bg-warning'>
                                { task.level }
                            </span>
                        </h6>
                    )
                case Levels.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            { task.level }
                        </span>
                    </h6>
                )
            default: break;
        }
    }

    function taskCompletedIcon() {
        if(task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={ {color: 'green'} }></i>)
        } 
        else return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={ {color: 'grey'} }></i>)
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                { taskLevelBadge() }
            </td>
            <td className='align-middle'>
                { taskCompletedIcon() }
                <i onClick={() => {remove(task)}} className='bi-trash task-action' style={ {color: 'tomato', fontSize: '16px'} }></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
