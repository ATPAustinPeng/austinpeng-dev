// import React from "react";
import Link from "next/link";

export default function Feed(props) {
	console.log(props);
	return (
		<>
			{props.posts.map((post) => {
				return (
					<div key={post._id}>
						<Link href={`/writing/${post.title}`}>
							<a>
								<h1>{post.title}</h1>
							</a>
						</Link>
						<h2>{post.description}</h2>
						<h4>{post.content}</h4>
						<h4>{post.tags}</h4>
						<h4>{post.lengthOfRead}</h4>
						<h4>{post.date}</h4>
					</div>
				);
			})}
		</>
	);
}
