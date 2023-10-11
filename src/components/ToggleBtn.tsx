interface Props {
	onChange: () => void;
	theme: string;
}

const ToggleBtn = ({ onChange, theme }: Props) => {
	return (
		<div className="ml-auto w-fit">
			<label className="relative inline-flex items-center cursor-pointer">
				<input
					type="checkbox"
					value=""
					className="sr-only peer"
					onChange={onChange}
				/>
				<div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
				<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
					<span className="capitalize">{theme}</span> Mode
				</span>
			</label>
		</div>
	);
};

export default ToggleBtn;
