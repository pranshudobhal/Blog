import classNames from 'classnames';
import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

import { Lato, Roboto } from 'next/font/google';

export const lato = Lato({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-lato',
});

export const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-roboto',
});

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className={classNames(roboto.variable, lato.variable, 'font-lato')}>
				<main>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
