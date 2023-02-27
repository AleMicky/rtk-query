import { useCreateTaskMutation } from "../api/apiSlice";

function TaskForm() {

    const [createTask] = useCreateTaskMutation()

    const handleSubmit = (e) => {
        e.preventDefault();
        const nombre = e.target.elements.nombre.value.trim();
        const descripcion = e.target.elements.descripcion.value.trim();
        const completado = e.target.elements.completado.checked;

        createTask({
            nombre,
            descripcion,
            completado
        });

    }


    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name="nombre" />
            <input type='text' name="descripcion" />
            <input type='checkbox' name="completado" />
            <button>
                Add Task
            </button>
        </form>
    )
}

export default TaskForm