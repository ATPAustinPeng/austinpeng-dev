/**
 * The template for a feed, which contains many postCards.
 */

import PostCard from "./postCard";

export default function Feed(props) {
	console.log(props);
	// return negative if postA.date < postB.date
	// NOTE: flipped param to have MOST RECENT POST first
	let sortedPosts = props.posts.sort((postB, postA) => {
		let aData = postA.date.split("/");
		let bData = postB.date.split("/");
		if (aData[2] === bData[2]) {
			if (aData[0] === bData[0]) {
				if (aData[1] === bData[1]) {
					if (aData[3] === bData[3]) {
						if (aData[4] === bData[4]) {
							if (aData[5] === bData[5]) {
								return -1;
							}
							return aData[5] - bData[5];
						}
						return aData[4] - bData[4];
					}
					return aData[3] - bData[3];
				}
				return aData[1] - bData[1];
			}
			return aData[0] - bData[0];
		}
		return aData[2] - bData[2];
	});
	console.log(sortedPosts);

	return (
		<>
			{props.posts.map((post) => {
				return <PostCard key={post._id} post={post} />;
			})}
		</>
	);
}
