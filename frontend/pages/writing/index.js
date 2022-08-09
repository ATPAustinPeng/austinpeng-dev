import Feed from "../../components/feed";

export default function Writing({ posts }) {
	return <Feed posts={posts.posts} />;
}

export async function getServerSideProps() {
	// Fetch data from external API
	const host = process.env.HOST || "http://localhost:3000";
	const res = await fetch(host + "/api/posts");
	const posts = await res.json();

	// Pass data to the page via props
	return { props: { posts } };
}
