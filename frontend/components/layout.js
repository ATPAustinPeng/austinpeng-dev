import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Austin Peng";
export const siteTitle = "Austin Peng • @austin._.peng";

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Austin Peng's personal website"
				/>
				{/* <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                /> */}
				{/* <meta name="og:title" content={siteTitle} /> */}
				{/* <meta name="twitter:card" content="summary_large_image" /> */}
			</Head>
			<header className={styles.header}>
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
			</header>
			<main>{children}</main>
		</div>
	);
}
