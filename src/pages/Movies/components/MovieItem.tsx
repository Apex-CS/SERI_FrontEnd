import { Movies } from "../../../types/types";
import imagen from "../../../resources/img/movies-wallpaper/paprika.jpg";
import InfoItem from "./InfoItem";
import ActionItem from "./ActionItem";
import { redirect } from "react-router-dom";

interface MovieItemProps {
	item: Movies;
	image: any;
}

function MovieItem({ item }: MovieItemProps) {
	

	const redirectToMovie = () => {
		const urlItem = `/movies/:id${item.id}`;
		redirect(urlItem);
		console.log("🚀 ~ file: MovieItem.tsx:19 ~ redirectToMovie ~ urlItem:", urlItem)
	};

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
						src={imagen}
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
