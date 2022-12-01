import { Router } from "express"; // importamos el router de express
import Task from "../models/task"; // importamos el modelo de datos

const router = Router(); // creamos una instancia de router

router.get("/task", async (req, res) => {
    const tasks = await Task.find(); // obtenemos todas las tareas de la base de datos
    console.log(tasks); // mostramos las tareas en consola
    res.send("getting task !") // creamos una ruta de prueba

});


router.post("/task", (req, res) => {
    const { title, description } = req.body; // obtenemos los datos del body
    const tasks = new Task({title, description}); // creamos una nueva tarea con los datos que nos envian
    tasks.save(); // guardamos la tarea en la base de datos
    console.log(tasks) // mostramos la tarea en consola


    // res.send("create tasks")
}); 

router.get("/task/:id", async (req, res) => {
    console.log(req.params.id); // obtenemos el id de la tarea
    const task = await Task.findById(req.params.id).exec()  ; // obtenemos la tarea de la base de datos
    console.log(task); // mostramos la tarea en consola
    // res.send("getting task by id")
});

router.delete("/task/:id", (req, res) => {
    const task = Task.findByIdAndDelete(req.params.id).exec(); // obtenemos el id de la tarea y la eliminamos de la base de datos
    console.log(task); // obtenemos el id de la tarea
    res.send("delete task")
});

router.put("/task/:id", (req, res) => {
    const task = Task.findByIdAndUpdate
    (req.params.id, req.body).exec(); // obtenemos el id de la tarea y la actualizamos con los datos que nos envian
    console.log(task, "Update.."); // obtenemos el id de la tarea
    res.send("update task")
});

export default router;