import Feed from "../../components/feed";
import Layout from "../../components/layout";

export default function Writing({ posts }) {
	return (
		<Layout>
			<Feed posts={posts.posts} />;
		</Layout>
	);
}

export async function getServerSideProps() {
	// Fetch data from external API
	const host = process.env.HOST || "http://localhost:3000";
	const res = await fetch(host + "/api/posts");
	const posts = await res.json();

	// Pass data to the page via props
	return { props: { posts } };
}
