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
		<div className='flex  justify-start flex-col items-end w-96 md:w-44 lg:mr-0 md:mr-5 md:items-start mr-0'>
			<div className="px-5 pb-10">
				<div className="flex justify-center">
					<LabelSubtitle textSize="text-3xl" customClass="mb-6 text-white" subtitle="Vote!" />
				</div>
				
				<div className={classIconContainer}>
					<button className="m-3 hover:bg-gray-500 rounded-lg border-2 border-yellow-500 p-2 flex items-center justify-center">
						<div className='w-6 '>
							<Like width={24} height={24} color="#E1AE2A"
							/>
						</div>
					</button>
					<button className="m-3 hover:bg-gray-500 rounded-lg border-2 border-red-700 p-2 flex items-center justify-center" >
						<div className='rotate-180 w-6'>
							<Like width={24} height={24} color="#C70039"
							/>
						</div>
					</button>
				</div>
			</div>
			
		</div>
	);
};

export default ActionItem;
