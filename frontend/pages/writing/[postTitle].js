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
