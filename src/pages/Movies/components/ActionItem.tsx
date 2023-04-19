import { useNavigate } from "react-router-dom";
import { DisLike, Eye, Like, Pencil } from "../../../resources/svg/MoviesIcons";
import { Movies } from "../../../types/types";

interface ActionItemProps {
	item: Movies;
}

const ActionItem = ({ item }: ActionItemProps) => {
	const navigate = useNavigate();
	const urlItem = `/movie/movieId:${item.id}`;

	const classButtons = `text-white m-4 bg-blue-700 h-22
        hover:bg-blue-800 focus:ring-4 focus:outline-none 
        focus:ring-blue-300 font-medium rounded-lg text-sm 
        p-2.5 text-center inline-flex items-center mr-2 
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
	const classIconContainer = `flex flex-row m-6`;

	const handlerLikeEvent = () => {};

	const handlerDislikeEvent = () => {};

	const handlerEditEvent = () => {
		console.log("🚀 ~ file: MovieItem.tsx:19 ~ handlerEditEvent ~ urlItem:", urlItem);
		navigate(urlItem);
	};

	const handlerViewEvent = () => {
		console.log("🚀 ~ file: ActionItem.tsx:35 ~ handlerViewEvent ~ urlItem:", urlItem);
		navigate(urlItem);
	};

	return (
		<div className='flex justify-center flex-col items-center w-40'>
			<h1 className='text-white'>Vote!</h1>
			<div className={classIconContainer}>
				<button className={classButtons}>
					<Like />
				</button>
				<button className={classButtons}>
					<DisLike />
				</button>
			</div>
			<div className={classIconContainer}>
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
	);
};

export default ActionItem;
