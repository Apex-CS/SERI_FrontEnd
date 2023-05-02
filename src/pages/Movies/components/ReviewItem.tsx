import { Comment } from "../../../types/types";
import { getRandomDate } from "../../../utils/utils";

interface ReviewItemProps {
	item: Comment;
}

function ReviewItem({ item }: ReviewItemProps) {
	console.log("🚀 ~ file: ReviewItem.tsx:6 ~ ReviewItem ~ item:", item);

	const starRaiting = 4;
    const title = '';
    const userName = 'Jese Leos';
    const userJoinPlatform = getRandomDate();
    const review = '';
    const reviewDate = getRandomDate();
    const likeComment = 20;
    const srcImg = '';

	return (
		<article className='p-5 mt-10 w-full border-2 '>
			<div className='flex items-center mb-4 space-x-4'>
				<img
					className='w-10 h-10 rounded-full'
					src='https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg'
					alt=''
				/>
				<div className='space-y-1 font-medium dark:text-white'>
					<p>
						
						<time
							dateTime='2014-08-16 19:00'
							className='block text-sm text-gray-500 dark:text-gray-400'>
							Joined on {userJoinPlatform.toDateString()}
						</time>
					</p>
				</div>
			</div>
			<div className='flex items-center mb-1'>
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


				<h3 className='ml-2 text-sm font-semibold text-gray-900 dark:text-white'>
					{item.name}
				</h3>
			</div>
			<footer className='mb-5 text-sm text-gray-500 dark:text-gray-400'>
				<p>
					Reviewed on <time dateTime='2017-03-03 19:00'>{reviewDate.toDateString()}</time>
				</p>
			</footer>
			<p className='mb-2 text-gray-500 dark:text-gray-400'>
				{item.body}
			</p>
			{/* <a
				href='#'
				className='block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'>
				Read more
			</a> */}
			<aside>
				<p className='mt-1 text-xs text-gray-500 dark:text-gray-400'>
					19 people found this helpful
				</p>
				<div className='flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600'>
					<a
						href='#'
						className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
						Helpful
					</a>
					<a
						href='#'
						className='pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'>
						Report abuse
					</a>
				</div>
			</aside>
		</article>
	);
}

export default ReviewItem;
