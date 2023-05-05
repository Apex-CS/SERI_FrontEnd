import { useNavigate } from "react-router-dom";
import { DisLike, Eye, Like, Pencil } from "../../../resources/svg/MoviesIcons";
import { Movies } from "../../../types/types";
import { LabelSubtitle } from "../../../components";

interface ActionItemProps {
	item: Movies;
}

const ActionItem = ({ item }: ActionItemProps) => {
	const navigate = useNavigate();
	const urlItem = `/movie/movieId:${item.id}`;
	const editMovieUrl = `/edit-movie/movieId:${item.id}`;

	const classButtons = `text-white m-3 bg-yellow-500 h-22
        hover:bg-yellow-800 focus:ring-4 focus:outline-none 
        focus:ring-yellow-300 font-medium rounded-lg text-sm 
        p-2.5 text-center inline-flex items-center mr-2 
        dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800`;
	const classIconContainer = `flex flex-row mx-6 my-2`;

	const handlerLikeEvent = () => {};

	const handlerDislikeEvent = () => {};

	const handlerEditEvent = () => {
		navigate(editMovieUrl);
	};

	const handlerViewEvent = () => {
		navigate(urlItem);
	};

	return (
		<div className='flex  py-5 justify-start flex-col items-center w-40 mr-10'>
			<div className="px-5 pb-5">
				<div className="flex justify-center">
					<LabelSubtitle customClass="mb-12" subtitle="Vote!" />
				</div>
				
				<div className={classIconContainer}>
					<button className={classButtons}>
						<Like />
					</button>
					<button className={classButtons}>
						<DisLike />
					</button>
				</div>
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
	);
};

export default ActionItem;
