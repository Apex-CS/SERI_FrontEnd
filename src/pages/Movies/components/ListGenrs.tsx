import { GenreCat } from "../../../types/types";
import { getStringWithElipsis } from "../../../utils/utils";

interface ListGenrsProps {
	dataList: GenreCat[];
}

function ListGenrs({ dataList }: ListGenrsProps) {
	return (
			<ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700'>
				{dataList.map((item) => (
					<li  key={item.id} className='flex items-center justify-items-stretch bg-yellow-500 mt-2 mb-2 p-2'>
						<a href={`/movies/genres/${item.id}`} className='flex items-center justify-center  space-x-4'>
							<div className='flex-1 min-w-0'>
								<p className='text-xl font-bold text-gray-900 truncate dark:text-white'>
									{getStringWithElipsis(item.description, 15)}
								</p>
							</div>
						</a>
					</li>
				))}
			</ul>
	);
}

export default ListGenrs;
