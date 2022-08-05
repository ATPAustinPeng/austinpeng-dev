import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const name = "Austin Peng";

export default function Home() {
	return (
		<>
			<Layout home>
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
