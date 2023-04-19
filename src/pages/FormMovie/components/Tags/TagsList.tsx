import { getStringWithElipsis } from "../../../../utils/utils";

interface TagsListProps {
	tagsList: string[];
	onClickRemoveTag: (index: number) => void;
}

function TagsList({ tagsList, onClickRemoveTag }: TagsListProps) {
	return (
		<div>
			<ul className='flex flex-row flex-wrap justify-around'>
				{tagsList.map((tag, index) => (
					<li>
						<div className='container flex flex-row bg-yellow-500 w-fit border-x-purple-600 rounded-lg p-2 m-2'>
							<h2 className=''>{getStringWithElipsis(tag, 15)}</h2>
							<svg
								onClick={(event) => {
									onClickRemoveTag(index);
									event.preventDefault();
								}}
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								className='bi bi-x ml-3 mb-2'
								viewBox='0 0 16 16'>
								<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
							</svg>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TagsList;
