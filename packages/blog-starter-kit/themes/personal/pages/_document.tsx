import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" className="bg-background text-white">
			<Head />
			<body className="mx-auto my-12 max-w-2xl bg-inherit px-6">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
