import { useEffect, useState } from 'react';
import ToggleBtn from '../components/ToggleBtn';

interface Props {
	children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
	const [theme, setTheme] = useState('light');
	const isDarkMode = theme === 'dark';

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const handleThemeSwitcher = () => {
		setTheme(isDarkMode ? 'light' : 'dark');
	};
	return (
		<div className=" bg-white dark:bg-black ">
			<div className="md:container mx-auto md:px-20 min-h-screen relative">
				<h1 className="text-center  pt-10 mb-5 text-2xl md:text-3xl text-amber-700 uppercase font-bold">
					Min Thein Kha Lat Htauk BayDin
				</h1>
				<ToggleBtn onChange={handleThemeSwitcher} theme={theme} />
				{children}
				<footer className="  text-sm text-gray-600  bg-white text-center dark:bg-black dark:text-white">
					Made with love &#10084; by kaung si thu
				</footer>
			</div>
		</div>
	);
};

export default RootLayout;
