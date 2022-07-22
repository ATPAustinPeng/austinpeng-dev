import connectToDatabase from "../../util/mongodb";
import Post from '../../models/post.model';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await connectToDatabase();
            const posts = await Post.find();
            res.json({ posts });
        } catch (error) {
            res.json({ error });
        }
    } else if (req.method === 'POST') {
        try {
            await connectToDatabase();
            console.log(req.body);
            const post = await Post.create(req.body);

            res.json({ post });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
};