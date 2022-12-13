import axiosInstance from "../services/axios";
import { Task } from "../src/interfaces/Task";


export default class TaskService {
  static async getTasks() {
    const { data } = await axiosInstance.get("/task");
    return data;
  }

  static async getTask(id: string) {
    const { data } = await axiosInstance.get(`/task/${id}`);
    return data;
  }
  static async getTaskDTO(id: string) {
    const { data } = await axiosInstance.get(`/taskDTO/${id}`);
    return data;
  }

  static async createTask(task: Task) {
    console.log("Task in data fron:", task);  
    const { data } = await axiosInstance.post("/task", task);
    return data;
  }

  static async updateTask(id: string, task: any) {
    const { data } = await axiosInstance.put(`/task/${id}`, task);
    return data;
  }

  static async deleteTask(id: string) {
    const { data } = await axiosInstance.delete(`/task/${id}`);
    return data;
  }
}
