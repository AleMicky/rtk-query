import { useDeleteTaskMutation, useGetTasksQuery, useUpdateTaskMutation } from "../api/apiSlice"

function TasksList() {


    const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
    const [deleteTask] = useDeleteTaskMutation()
    const [updateTask] = useUpdateTaskMutation()

    if (isLoading) return <div>Loading...</div>
    else if (isError) return <div>Erro: {error.message}</div>

    return (
        <ul>
            {
                tasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.nombre}</h3>
                        <p>{task.descripcion}</p>
                        <button onClick={() => {
                            deleteTask(task.id)
                        }}>Elminar</button>
                        <input type='checkbox'
                            id={task.id}
                            checked={task.completado}
                            onChange={(e) => {
                                updateTask({ ...task, completado: e.target.checked });
                            }}
                        />
                        <label htmlFor={task.id}>completado</label>
                    </li>
                ))
            }
        </ul>
    )
}

export default TasksList