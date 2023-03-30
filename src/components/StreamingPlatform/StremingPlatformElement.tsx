import { StreamingPlatformsCat } from "../../types/types";

interface StreamingPlatformElementProps {
	item: StreamingPlatformsCat;
}

const StreamingPlatformElement = ({ item }: StreamingPlatformElementProps) => {
	return (
		<div
			className='flex flex-col  items-center justify-center'
			key={item.id}>
			<img
				title={item.name}
				className='w-16 h-16 rounded-full'
				src={item?.logo}
				alt={"item-logo"}
			/>
		</div>
	);
};

export default StreamingPlatformElement;
