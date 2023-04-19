import { useNavigate } from "react-router-dom";
import rottenTomatteLogo from "../../resources/img/list-rotten-tomatte.png";
import { Movies } from "../../types/types";
import { getStringWithElipsis } from "../../utils/utils";
import Loader from "../Loader/Loader";
interface ListProps {
	title: string;
	data: Movies[] | undefined;
	redirect?: boolean;
}

function List({ title, data, redirect = false }: ListProps) {
	const limitChart = 39;
	const navigate = useNavigate();
	const sendToLink = (id: string | number | undefined) => {
		if (redirect) {
			if (id === undefined) {
				// send to movie not foud
			}
			const urlMovie = `/movie/${id}`;
			navigate(urlMovie);
		}
	};

	return (
		<div className='max-w-md ml-3 mt-3'>
			<div className='flex justify-start items-center border-l-4 border-yellow-400'>
				<h1 className='font-bold ml-1 dark:text-yellow-400'>{title}</h1>
			</div>
			<ul className='max-w-md divide-y '>
				{data ? (
					data.map((item, index) => (
						<li
							key={index}
							className='pb-3 sm:pb-4 p-3 border-transparent'
							onClick={() => sendToLink(item.id)}>
							<div className='flex space-x-4'>
								<div className='flex-1 flex items-center min-w-0'>
									<p className='w-auto flex justify-start text-sm font-medium text-gray-900 truncate dark:text-white'>
										{getStringWithElipsis(item.title, limitChart)}
									</p>
								</div>
								<div className="flex items-center justify-center">
									<div className='flex-shrink-0 w-12'>
										<img
											className='w-8 h-8 rounded-full'
											src={rottenTomatteLogo}
											alt='logo'
										/>
									</div>
									<div className='inline-flex items-center text-base w-20 justify-start font-semibold text-gray-900 dark:text-white'>
										Likes: {item.likes}
									</div>
								</div>
							</div>
						</li>
					))
				) : (
					<Loader />
				)}
			</ul>
		</div>
	);
}

export default List;
