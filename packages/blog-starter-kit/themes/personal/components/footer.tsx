import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="text-gray border-t pt-10 text-sm">
			&copy; {new Date().getFullYear()} {publication.title}
		</footer>
	);
};
