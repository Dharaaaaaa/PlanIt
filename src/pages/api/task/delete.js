import connectMongo from '../../../lib/dbConnect';
import Task from "../../../models/Task";
export default async function handler(req, res) {
  let ObjectId = req.query.ObjectId;
  await connectMongo();
  let tasks = await Task.remove({ "_id": ObjectId})
  res.status(200).send({message: "Done"});
}