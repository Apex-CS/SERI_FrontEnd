import { DisLike, Like } from "../../../resources/svg/MoviesIcons";
import { Movies } from "../../../types/types";

interface InfoItemProps {
	item: Movies;
}

const InfoItem = ({ item }: InfoItemProps) => (
	<div
		id='info-movie'
		className='flex flex-col justify-between p-5  leading-normal ml-10 mr-10 w-full'>
		<div className='flex flex-col justify-start'>
			<h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
				{item.title}
			</h1>
			<div>
				<h5 className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-lg'>
					Duration: {item.duration}
				</h5>
				<h5 className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-lg'>
					Clasification: {item.classification}
				</h5>
				<h5 className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-lg'>
					Release Date: {item.release_date?.toDateString()}
				</h5>
			</div>
		</div>

		<div className='flex flex-row justify-between items-center lg:w-60 md:w-50 sm:w-40'>
			<div className='flex flex-row'>
				<button
					type='button'
					disabled
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
					<Like />
				</button>
				<h4 className='text-white'>{item.likes}</h4>
			</div>
			<div className='flex flex-row'>
				<button
					type='button'
					disabled
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
					<DisLike />
				</button>
				<h4 className='text-white'>{item.likes}</h4>
			</div>
		</div>
	</div>
);
export default InfoItem;