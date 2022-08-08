import { useRouter } from "next/router";

export default function PostTemplate({ post }) {
	const router = useRouter();
	const slug = router.query.slug;
	return (
		<>
			<h1>{slug}</h1>
			{post.title}
			{post.date}
			{post.content}
		</>
	);
}

// use getServerSideProps() to get find the right post, but how, my slug is the hyphenated title,
// but unhyphenating it won't work if the title originally had hyphens
// TODO: if not solved, create a jira bug, post title cannot use hyphens
// SOLUTION: blog post must have title and slug (title but in hyphenatable version
export async function getServerSideProps(context) {
	const slug = context.params.slug;

	const host = process.env.HOST || "http://localhost:3000";
	const res = await fetch(host + "/api/posts/" + slug);
	const jsonData = await res.json();

	return {
		props: { post: jsonData.post },
	};
}

// export async function getStaticPaths() {
// 	const host = process.env.HOST || "http://localhost:3000";
// 	const res = await fetch(host + "/api/posts");
// 	const jsonData = await res.json();
//
// 	console.log(jsonData);
//
// 	const paths = jsonData.posts.map((post) => {
// 		// const slug = post.slug.toString();
// 		return {
// 			params: {
// 				// id: post._id,
// 				slug: post.slug.toString(),
// 			},
// 		};
// 	});
//
// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }
