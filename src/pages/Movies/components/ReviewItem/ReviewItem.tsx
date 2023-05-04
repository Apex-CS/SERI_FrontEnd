import { StarRating } from "../../../../components";
import { Comment } from "../../../../types/types";
import './ReviewItem.css';

interface ReviewItemProps {
	item: Comment;
}

function ReviewItem({ item }: ReviewItemProps) {
	return (
		<article className=" w-5/12 flex flex-col " >
			<div className="box arrow-bottom p-5 mt-5 border-2 mx-1'" >
				<div className='flex items-center justify-between my-3'>
					<StarRating onlyReview={true} customClass="w-4 h-4" rating={item.raiting} />
					<div className='space-y-1 font-medium dark:text-white'>
						<p>
							<time
								dateTime='2014-08-16 19:00'
								className='block text-sm text-gray-500 dark:text-gray-400'>
								Reviewed in {item.reviewdDate.toDateString()}
							</time>
						</p>
					</div>
				</div>
				<p className='mb-2 text-gray-500 dark:text-gray-400'>
					{item.body}
				</p>
			</div>

			<div className='flex items-center justify-start mt-6 mb-4 mr-10 space-x-4'>
				<img
					className='ml-11 w-10 h-10 rounded-full'
					src='https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg'
					alt=''
				/>
				<h3 className='ml-2 text-sm font-semibold text-gray-300'>
						{item.name}
					</h3>
				
			</div>
		</article>
	);
}

export default ReviewItem;
