/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: "/resume",
				destination:
					"https://atpaustinpeng.github.io/resume/austin-peng-resume.pdf",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
