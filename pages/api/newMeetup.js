import { MongoClient } from "mongodb";

const handler = async function (req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://maklad:Maklad130892@cluster0.4xw7nru.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "meetup inserted!" });
  }
};

export default handler;
