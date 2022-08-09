/**
 * The template for a postCard, displayed in the feed which summarizes the post.
 * NOTE: not to be mixed up with post which the actual post contents.
 */
import Link from "next/link";
import postCardStyles from "./postCard.module.css";

export default function PostCard(props) {
	const post = props.post;
	const s = post.lengthOfRead > 1 ? "s" : "";
	const slug = post.slug;
	let tags = JSON.stringify(post.tags);
	tags = JSON.parse(tags);

	return (
		<>
			<div className={postCardStyles.postCard}>
				<Link
					href={`/writing/${slug}`}
					className={postCardStyles.postTitle}
				>
					<h1>{post.title}</h1>
				</Link>
				<div className="container">
					<div className={postCardStyles.postDate}>{post.date}</div>
					<span className={postCardStyles.divider}></span>
					<div className={postCardStyles.postTags}>
						{tags.join(" ")}
					</div>
				</div>
				<div className="post-description">{post.description}</div>
				<div className="post-lengthOfRead">
					{post.lengthOfRead + " min" + s}
				</div>
			</div>
		</>
	);
}
