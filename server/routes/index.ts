import { Router } from "express"; // importamos el router de express

const router = Router(); // creamos una instancia de router

router.get("/task", (req, res) => res.send("gettin task !")); // creamos una ruta de prueba

router.post("/task", (req, res) => res.send("create tasks")); 

router.get("/task/:id", (req, res) => res.send("gettin a task")); 

router.delete("/task/:id", (req, res) => res.send("deleting a task"));

router.put("/task/:id", (req, res) => res.send("update a task"));

export default router;