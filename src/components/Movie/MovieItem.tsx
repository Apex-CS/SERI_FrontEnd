import { Movies } from "../../types/types";

interface MovieItemProps {
	item: Movies;
}

function MovieItem({ item }: MovieItemProps) {
	const genrs = ["action", "comedy", "adventure"];

	return (
		<div className='w-full ml-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
			<a href={`/movie/${item.id}`}>
				<img
					className='p-8 rounded-t-lg'
					src='https://www.geekmi.news/__export/1659891562198/sites/debate/img/2022/08/07/onepiecefilm.jpg_423682103.jpg'
					alt='movie'
				/>
				<div className='px-5 pb-5 flex flex-col justify-between items-start text-white'>
					<h3 className='flex'>Country: {item.originalLanguage}</h3>
					<h4>Date: {item.release_date?.toString()}</h4>
					<h5>current</h5>
					{/* ?imagino que necesitare validar la fechar release_date con la fecha actual o algo asi_ */}
				</div>

				<div className='px-5 pb-5 flex flex-col justify-center items-start'>
					<h5 className='font-semibold tracking-tight text-lg text-gray-900 dark:text-white'>
						{item.title}
					</h5>
					<div className='flex flex-row justify-between w-full dark:text-white'>
						<h6>{item.likes}</h6>
						<span>un icono</span>
					</div>

					<div className='flex items-center mt-2.5 mb-5'>
						<svg
							aria-hidden='true'
							className='w-5 h-5 text-yellow-300'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<title>First star</title>
							<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
						</svg>
						<svg
							aria-hidden='true'
							className='w-5 h-5 text-yellow-300'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Second star</title>
							<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
						</svg>
						<svg
							aria-hidden='true'
							className='w-5 h-5 text-yellow-300'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Third star</title>
							<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
						</svg>
						<svg
							aria-hidden='true'
							className='w-5 h-5 text-yellow-300'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Fourth star</title>
							<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
						</svg>
						<svg
							aria-hidden='true'
							className='w-5 h-5 text-yellow-300'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Fifth star</title>
							<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
						</svg>
						<span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
							5.0
						</span>
					</div>
					<div className='flex items-center justify-between dark:text-white'>
						<ul className="flex flex-row">
							{genrs.map((item) => (
								<li className="mr-1">
									<a href={`/movies/genrs/${item}`}>{item}</a>, 
								</li>
							))}
						</ul>
						{/* <span className='text-3xl font-bold text-gray-900 dark:text-white'>$599</span> */}
					</div>
				</div>
			</a>
		</div>
	);
}

export default MovieItem;
