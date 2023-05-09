import { useState } from "react";

interface SearchProps {
	label?: string;
	onSubmit?: (searchValue: string) => void;
	values?: any[];
	setValues?: React.Dispatch<React.SetStateAction<string>>;
	buttonLabel?: string;
	placeholder?: string;
	className?: string;
	onSearchHandlerEvent?: () => void;
}
function Search({
	label,
	onSubmit,
	values,
	setValues,
	buttonLabel = "Search",
	placeholder = "Search movie...",
	className = `flex items-center`,
	onSearchHandlerEvent,
}: SearchProps) {
	const disabledButtonClass = 'text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-2.5 py-2.5 mx-2 text-center';
	const defaultClassButton = 'p-2.5 mx-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
	const [searchValue, setSearchValue] = useState('');
	const onSubmitEventHandler = () => {
		if (onSubmit) {
			setSearchValue('');
			onSubmit(searchValue)
		}
	};

	const inputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event?.target?.value;
		setSearchValue(inputValue);
	};

	return (
		<div className={`${className}`}>
			<label htmlFor="default-search" className={`mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white`}>
			Search</label>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
				</div>
				<input
					type="search" 
					id="default-search" 
					className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
					placeholder={placeholder} />
				<button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
			</div>
		</div>
		// <div className={className} >
		// 	<div className='relative w-full'>
		// 		<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
		// 			<svg
		// 				aria-hidden='true'
		// 				className='w-5 h-5 text-gray-500 dark:text-gray-400'
		// 				fill='currentColor'
		// 				viewBox='0 0 20 20'
		// 				xmlns='http://www.w3.org/2000/svg'>
		// 				<path
		// 					fill-rule='evenodd'
		// 					d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
		// 					clip-rule='evenodd'></path>
		// 			</svg>
		// 		</div>
		// 		<input
		// 			type='text'
		// 			id='simple-search'
		// 			className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
		// 			focus:border-blue-500 block w-full pl-10 p-2.5 
		// 			dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
		// 			placeholder={placeholder}
		// 			value={searchValue}
		// 			onChange={inputSearchHandler}
		// 		/>
		// 	</div>
		// 	<button
		// 		onClick={onSubmitEventHandler}
		// 		type='button'
		// 		disabled={searchValue.length === 0}
		// 		className={searchValue.length === 0 ? disabledButtonClass : defaultClassButton}>
		// 		<svg
		// 			className='w-5 h-5'
		// 			fill='none'
		// 			stroke='currentColor'
		// 			viewBox='0 0 24 24'
		// 			xmlns='http://www.w3.org/2000/svg'>
		// 			<path
		// 				stroke-linecap='round'
		// 				stroke-linejoin='round'
		// 				stroke-width='2'
		// 				d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
		// 		</svg>
		// 		<span className='sr-only'>{buttonLabel}</span>
		// 	</button>
		// </div>
	);
}

export default Search;
