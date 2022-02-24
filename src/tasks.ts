import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { connectDb } from "./connectDb";
import { Request, Response } from "express";

export const createTask = (req: Request, res: Response) => {
  const newTask = {
    task: req.body.task,
    done: false,
  };
  const db = connectDb();
  db.collection("tasks")
    .add(newTask)
    .then((doc) => res.status(201).send(doc.id))
    .catch((err) => res.status(500).send(err));
};

export const getTasks = (req: Request, res: Response) => {
  const db = connectDb();
  db.collection("tasks")
    .get()
    .then((snapshot) => {
      const taskList = snapshot.docs.map((doc) => {
        let task = doc.data();
        task.id = doc.id;
        return task;
      });
      res.send(taskList);
    })
    .catch((err) => res.status(500).send(err));
};

export const getPendingTasks = (req: Request, res: Response) => {
  const db = connectDb();
  db.collection("tasks")
  .where('done', '==', false)
    .get()
    .then((snapshot) => {
      const taskList = snapshot.docs.map((doc) => {
        let task = doc.data();
        task.id = doc.id;
        return task;
      });
      res.send(taskList);
    })
    .catch((err) => res.status(500).send(err));
};

export const getCompletedTasks = (req: Request, res: Response) => {
  const db = connectDb();
  db.collection("tasks")
  .where('done', '==', true)
    .get()
    .then((snapshot) => {
      const taskList = snapshot.docs.map((doc) => {
        let task = doc.data();
        task.id = doc.id;
        return task;
      });
      res.send(taskList);
    })
    .catch((err) => res.status(500).send(err));
};

export const updateTask = (req: Request, res: Response) => {
  const { taskId } = req.params;
  const isDone = req.body.done;
  const db = connectDb();
  db.collection("tasks")
    .doc(taskId)
    .update({ done: isDone })
    .then((doc) => res.status(202).send(doc))
    .catch((err) => res.status(500).send(err));
};
