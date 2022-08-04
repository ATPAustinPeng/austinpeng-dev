import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home({ posts }) {
	if (posts.notFound == true) {
		return (
			<Layout home>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<section className={utilStyles.headingMd}>
					<p>Hello, and welcome to my personal website!</p>
					<p>
						I will be updating this website periodically with new
						features and eventually blog posts!
					</p>
				</section>
			</Layout>
		);
	} else {
		return (
			<>
				<Layout home>
					<Head>
						<title>{siteTitle}</title>
					</Head>
					<section className={utilStyles.headingMd}>
						<p>Hello, and welcome to my personal website!</p>
						<p>
							I will be updating this website periodically with
							new features and eventually blog posts!
						</p>
					</section>
				</Layout>
				{/*<ul>*/}
				{/*	{posts.posts.map((post) => {*/}
				{/*		return (*/}
				{/*			<div key={post._id}>*/}
				{/*				<h1>{post.title}</h1>*/}
				{/*				<h3>{post.description}</h3>*/}
				{/*			</div>*/}
				{/*		);*/}
				{/*	})}*/}
				{/*</ul>*/}
			</>
		);
	}
}

// export async function getServerSideProps() {
// 	// Fetch data from external API
// 	const host = process.env.HOST || "http://localhost:3000";
// 	const res = await fetch(host + "/api/posts");
// 	const posts = await res.json();
//
// 	// Pass data to the page via props
// 	return { props: { posts } };
// }
