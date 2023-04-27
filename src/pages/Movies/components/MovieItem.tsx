import { Movies } from "../../../types/types";
import InfoItem from "./InfoItem";
import ActionItem from "./ActionItem";

interface MovieItemProps {
	item: Movies;
	image: any;
}

function MovieItem({ item }: MovieItemProps) {
	const imageURL = 'https://m.media-amazon.com/images/M/MV5BNDI4MGEwZDAtZDg0Yy00MjFhLTg1MjctODdmZTMyNTUyNDI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
	return (
		<div className='m-2'>
			<div
				className={`
					w-full flex flex-col items-center justify-around
					bg-white border border-gray-200 
					hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
					rounded-lg shadow 
					md:flex-row
					`}>
				<div className='w-80 p-5'>
					<img
						className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
						src={imageURL}
						alt='poster'
					/>
				</div>

				<InfoItem item={item} />

				<ActionItem item={item} />
			</div>
		</div>
	);
}

export default MovieItem;
