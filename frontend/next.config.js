/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: "/resume",
				destination:
					"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
				// "https://atpaustinpeng.github.io/resume/austin-peng-resume.pdf",
				permanent: false,
			},
			{
				source: "/",
				destination: "https://austinpeng.dev/writing",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
