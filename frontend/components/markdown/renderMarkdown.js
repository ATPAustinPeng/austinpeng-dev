import PropTypes from "prop-types";
import { unified } from "unified";
import parse from "remark-parse";
// import rehypeReact from "rehype-react";
import markdownStyles from "./markdown-styles.module.css";
// import CustomLink from "../customLink";
import React from "react";

export default function PrintMarkdown({ markdown }) {
	const content = unified()
		.use(markdown)
		.use(parse)
		// .use(rehypeReact, {
		// 	components: {
		// 		a: CustomLink,
		// 	},
		// })
		.processSync(markdown).result;

	return <div className={markdownStyles.markdown}>{content}</div>;
}

PrintMarkdown.propTypes = {
	markdown: PropTypes.string.isRequired,
};
