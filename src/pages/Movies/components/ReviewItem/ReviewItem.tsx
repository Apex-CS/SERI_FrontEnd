import { StarRating } from "../../../../components";
import { Comment } from "../../../../types/types";
import './ReviewItem.css';

interface ReviewItemProps {
	item: Comment;
}

function ReviewItem({ item }: ReviewItemProps) {
	return (
		<div className="testimonial-box">
			<article>
				<div className="box-top">
					<div className="profile">
						<div className="name-user">
							<strong>{item.name}</strong>
							<span>{item.reviewedDate.toDateString()}</span>
						</div>
					</div>
					<div className="reviews">
						<div className="flex items-center mb-1">
							<StarRating onlyReview={true} customClass="w-7 h-7 text-yellow-400" rating={item.rating} />
						</div>
					</div>
				</div>
				<p className="mb-2 text-gray-500 dark:text-gray-400">{item.body}</p>
			</article>
		</div>
	);
}

export default ReviewItem;
