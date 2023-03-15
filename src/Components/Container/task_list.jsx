import React, {useState, useEffect} from 'react';
import { Levels } from '../../Models/levels.enum';
import { Task } from '../../Models/task.class';
import TaskForm from '../Pure/Forms/taskForm';
import TaskComponent from '../Pure/task';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Default description1', true, Levels.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default description2', false, Levels.URGENT);
    const defaultTask3 = new Task('Example3', 'Default description3', false, Levels.BLOCKING);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component ys going to unmount...')
        };
    }, [tasks]);

    function completeTask(task) {
        const taskIndex = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[taskIndex].completed = !tempTask[taskIndex].completed;
        setTasks(tempTask);
    }

    function deleteTask(task) {
        const taskIndex = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(taskIndex, 1);
        setTasks(tempTask);
    }

    function addTask(task) {
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            { tasks.map((task, index) => {
                                return (
                                    <TaskComponent
                                    key={ index } 
                                    task={ task } 
                                    complete={completeTask}
                                    remove={deleteTask}/>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm submit={addTask}/>
        </div>
    );
};


export default TaskListComponent;
