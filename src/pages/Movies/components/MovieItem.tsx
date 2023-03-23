import { Movies } from "../../../types/types";
import imagen from "../../../resources/img/movies-wallpaper/paprika.jpg";
import { DisLike, Like } from "../../../resources/svg/Movies";
interface MovieItemProps {
	item: Movies;
	image: any;
}
function MovieItem({ item }: MovieItemProps) {
	const urlItem = `/movies/${item.id}`;
	return (
		<div className={`
		w-full flex flex-col items-center 
		bg-white border border-gray-200 
		hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
		rounded-lg shadow md:flex-row md:max-w-3xl 
		`} >
			<a
				href={urlItem}
				className=''>
				<img
					className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
					src={imagen}
					alt=''
				/>
				<div className='flex flex-col justify-between p-4 leading-normal'>
					<div>
						<h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
							{item.title}
						</h1>
						<div>
							<h5 className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
								Duration: {item.duration}
							</h5>
							<h5 className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
								Clasification: {item.classification}
							</h5>
							<h5 className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
								Release Date: {item.release_date?.toDateString()}
							</h5>
						</div>
					</div>
					<div>
						<div className='flex flex-row'>
							<button
								type='button'
								className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
								<Like />
							</button>
							<h4 className='text-white'>{item.likes}</h4>
						</div>
						<div className='flex flex-row'>
							<button
								type='button'
								className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                                    <DisLike />
							</button>
							<h4 className='text-white'>{item.likes}</h4>
						</div>
					</div>
				</div>
				<div></div>
			</a>
		</div>
	);
}

export default MovieItem;
