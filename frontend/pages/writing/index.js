import Feed from "../../components/feed";
import Layout from "../../components/layout";

export default function Writing({ posts }) {
	return (
		<Layout>
			<Feed posts={posts} />
		</Layout>
	);
}

// export async function getServerSideProps() {
export async function getStaticProps() {
	// Fetch data from external API
	const host = process.env.HOST || "http://localhost:3000";
	const res = await fetch(host + "/api/posts");
	const jsonData = await res.json();

	// let posts = JSON.parse(jsonData);
	// jsonData.posts.forEach((post) => {
	// 	post["slug"] = post.title.split(" ").join("-").toString();
	// });

	let posts = jsonData.posts;

	// return negative if postA.date < postB.date
	// NOTE: flipped param to have MOST RECENT POST first
	posts = posts.sort((postB, postA) => {
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

	console.log(posts);

	// Pass data to the page via props
	return { props: { posts } };
}
