/**
 * The template for a feed, which contains many postCards.
 */

import PostCard from "./postCard";

export default function Feed(props) {
	// console.log(props);
	return (
		<>
			{props.posts.map((post) => {
				return <PostCard key={post._id} post={post} />;
			})}
		</>
	);
}
