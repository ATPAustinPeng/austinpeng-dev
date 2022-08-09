import connectToDatabase from "../../../util/mongodb";
import Post from "../../../models/post.model";

export default async function handler(req, res) {
	if (req.method === "GET") {
		try {
			await connectToDatabase();
			const post = await Post.findOne({ slug: req.query.slug });
			res.json({ post });
		} catch (error) {
			res.json({ error });
		}
	}
}
