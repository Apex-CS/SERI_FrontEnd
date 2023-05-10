import { Link } from "react-router-dom";
import { Movies } from "../../types/types";
import '../../App.css';

interface MovieItemProps {
	item: Movies;
}

function CarrouselMovieItem({ item }: MovieItemProps) {
	const statPercent = (item.likes / 100) * 5
	const starRaiting = Math.round(statPercent) ;
	return (
		<div className='w-10/12 ml-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
			<Link to={`/movie/${item.id}`} className='flex justify-center  items-center'>
				<div className="flex flex-col w-full items-start justify-start">
					<div className="w-full flex items-center justify-center">
						<div className="my-2 mt-4 flex justify-center items-center">
							<img
								className='pt-2 2xl:px-9 xl:px-8 lg:px-8 rounded-t-lg w-full h-96 '
								src={item.poster}
								alt='movie'
							/>
						</div>
					</div>
					<div className='px-8 pb-0 flex flex-col justify-center w-full items-start'>
						<h5 className='font-semibold carrousel-item-title  w-full tracking-tight 2xl:h-7 xl:h-7  text-lg text-gray-900 dark:text-white'>
							{item.title}
						</h5>

						<div className='flex items-center mt-2.5 mb-5'>
							<span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-0 mr-2'>
								{starRaiting}
							</span>
							{[...Array(starRaiting)].map((star, index) => (
								<svg
									aria-hidden='true'
									className='w-5 h-5 text-yellow-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<title>{index} star</title>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
								</svg>
							))}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default CarrouselMovieItem;
