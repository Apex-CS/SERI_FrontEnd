import imagen from "../../../resources/img/movies-wallpaper/paprika.jpg";
import { GenreCat } from "../../../types/types";

interface ListGenrsProps {
	dataList: GenreCat[];
}

function ListGenrs({ dataList }: ListGenrsProps) {
	return (
		<div className="m-2 ">
			<ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700'>
				{dataList.map((item) => (
					<li  key={item.id} className='flex items-center justify-items-stretch bg-yellow-400 mt-2 mb-2 p-2'>
						<a href={`/movies/genres/${item.id}`} className='flex items-center justify-center  space-x-4'>
							<div className='flex-shrink-0'>
								<img
									className='w-8 h-8 rounded-full'
									src={imagen}
									alt='Neil'
								/>
							</div>
							<div className='flex-1 min-w-0'>
								<p className='text-xl font-bold text-gray-900 truncate dark:text-white'>
									{item.description}
								</p>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ListGenrs;
