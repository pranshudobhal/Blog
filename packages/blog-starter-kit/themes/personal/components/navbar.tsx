import Link from 'next/link';
import { FC } from 'react';

type Props = {
	pageType?: 'blog';
};

export const Navbar: FC<Props> = ({ pageType }) => {
	return (
		<nav className="mb-6 flex w-full justify-between">
			<h2 className="font-bold uppercase tracking-widest">
				<Link href="https://pranshudobhal.vercel.app/">Pranshu Dobhal</Link>
			</h2>
			<div className="flex gap-4">
				<div className="flex space-x-4">
					<Link href="https://pranshudobhal.vercel.app/">Home</Link>
				</div>
				{pageType !== 'blog' && (
					<div className="flex space-x-4">
						<Link href="/">Blog</Link>
					</div>
				)}
			</div>
		</nav>
	);
};
