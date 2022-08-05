import Head from "next/head";
import styles from "./layout.module.css";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

const name = "Austin Peng";
export const siteTitle = "Austin Peng • @austin._.peng";

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{siteTitle}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Austin Peng's personal website"
				/>
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src="/images/profile.jpg"
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<></>
				)}
			</header>
			<main>{children}</main>
		</div>
	);
}
