import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
	return (
		<>
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
		</>
	);
}
