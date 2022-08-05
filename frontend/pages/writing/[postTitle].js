import { useRouter } from "next/router";

export default function PostTemplate() {
	const router = useRouter();
	const postTitle = router.query.postTitle;
	return (
		<>
			<h1>{postTitle}</h1>
		</>
	);
}

// use getServerSideProps() to get find the right post, but how, my slug is the hyphenated title,
// but unhyphenating it won't work if the title originally had hyphens
// TODO: if not solved, create a jira bug, post title cannot use hyphens
