import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();

    const testCollection = await db
        .collection("test-collection")
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();

    res.json(testCollection);
};