import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { NUM_LIST } from '../data';
import { useNavigate } from 'react-router-dom';
import useQueryState from '../utils/useQueryState';
import Answer from './Answer';
const Squares = () => {
	const { setQuery } = useQueryState();
	const location = useLocation();
	const [question] = useState(location.state);
	const navigate = useNavigate();
	const handleClick = (key: number) => {
		setQuery('s', key);
	};

	return (
		<>
			<div className="md:container mx-auto md:px-20 my-10 px-3 dark:bg-black bg-white">
				<button
					className="md:hidden px-6 py-2 mb-6 bg-amber-400 rounded-md"
					onClick={() => navigate('/')}
				>
					Back
				</button>
				<div className="flex items-center justify-between ">
					<button
						className="hidden md:block px-6 py-2 bg-amber-400 rounded-md"
						onClick={() => navigate('/')}
					>
						Back
					</button>
					<h2 className="text-center text-xl text-black dark:text-white">
						{question}
					</h2>
					<div></div>
				</div>
				<div className="grid  grid-cols-9 grid-flow-row w-fit md:gap-3 mx-auto my-6  h-60">
					{NUM_LIST.map(({ key, value }) => (
						<button
							// key={key}
							// replace
							// key={number.key}
							onClick={() => handleClick(key)}
							// to={`${key}`}
							className="border border-gray-300 p-2 text-center text-black dark:text-white cursor-pointer "
						>
							{value}
						</button>
					))}
				</div>
				<Answer />
			</div>
		</>
	);
};

export default Squares;
