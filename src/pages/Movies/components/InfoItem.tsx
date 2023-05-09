import { useNavigate } from "react-router-dom";
import { LabelSubtitle } from "../../../components";
import { DisLike, Eye, Like, Pencil } from "../../../resources/svg/MoviesIcons";
import { Movies } from "../../../types/types";

interface InfoItemProps {
	item: Movies;
}
const classButtons = `text-white m-3 bg-yellow-500 h-22
        hover:bg-yellow-800 focus:ring-4 focus:outline-none 
        focus:ring-yellow-300 font-medium rounded-lg text-sm 
        p-2.5 text-center inline-flex items-center mr-2 
        dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800`;
	const classIconContainer = `flex flex-row mx-6 my-2`;
const InfoItem = ({ item }: InfoItemProps) => {
	const navigate = useNavigate();
	const urlItem = `/movie/movieId:${item.id}`;
	const editMovieUrl = `/edit-movie/movieId:${item.id}`;
	const handlerEditEvent = () => {
		navigate(editMovieUrl);
	};

	const handlerViewEvent = () => {
		navigate(urlItem);
	};
return (
	<div
		id='info-movie'
		className='flex flex-col justify-items-stretch  leading-normal ml-10 mr-10 w-full h-full'>
		<div className='flex flex-col justify-start'>
			{/* <LabelSubtitle customClass="mb-0" subtitle={item.title ? item.title : ''} /> */}
			<div>
				<h5 className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl'>
					Duration: {item.duration}
				</h5>
				<h5 className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl'>
					Clasification: {item.classification}
				</h5>
				<h5 className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl'>
					Genr: C
				</h5>
				<h5 className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl'>
					Release Date: {item.release_date?.toDateString()}
				</h5>
			</div>
		</div>

		<div className='flex flex-row justify-between mt-8 items-center mb-0 lg:w-60 md:w-50 sm:w-40'>
			<div className='flex flex-row'>
				<button
					type='button'
					disabled
					className='text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'>
					<Like />
				</button>
				<h4 className='text-white'>{item.likes}</h4>
			</div>
			<div className='flex flex-row'>
				<button
					type='button'
					disabled
					className='text-white bg-yellow-500 hover:bg-yellow-40 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'>
					<DisLike />
				</button>
				<h4 className='text-white'>{item.likes}</h4>


				<div className={`${classIconContainer} mb-2`}>
					<button
						onClick={handlerEditEvent}
						className={classButtons}>
						<Pencil />
					</button>
					<button
						onClick={handlerViewEvent}
						className={classButtons}>
						<Eye />
					</button>
				</div>
			</div>
		</div>
	</div>
)};
export default InfoItem;