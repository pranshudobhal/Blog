import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;

type Props = {
	title: string;
	date: string;
	author: Author;
	slug: string;
	commentCount: number;
};

export const MinimalPostPreview = ({ title, date, slug, commentCount }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="flex flex-col items-start gap-1">
			<h2 className="font-lato text-2xl">
				<Link href={postURL}>{title}</Link>
			</h2>
			<p className="flex flex-row items-center gap-2">
				<Link href={postURL} className="text-gray mt-2 font-mono text-sm">
					<DateFormatter dateString={date} />
				</Link>
				{commentCount > 2 && (
					<>
						<span className="mt-2">&middot;</span>
						<Link href={postURL} className="text-gray mt-2 font-mono text-sm">
							{commentCount} comments
						</Link>
					</>
				)}
			</p>
		</section>
	);
};
