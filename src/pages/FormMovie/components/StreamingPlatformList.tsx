import { useState } from "react";
import { StreamingPlatformsCat } from "../../../types/types";
interface StreamingPlatformListProps {
	listDataRender: StreamingPlatformsCat[];
	setListDataRender?: React.Dispatch<React.SetStateAction<StreamingPlatformsCat[]>>;
}
interface ElementListProps {
	itemPlatform: StreamingPlatformsCat;
	setListDataRender?: React.Dispatch<React.SetStateAction<StreamingPlatformsCat[]>>;
}
const SELECT_GENR_CLASS = "border-4 border-pink-600";
const BUTTON_DEFAULT_CLASS = ' my-2 mx-1 rounded-xl flex justify-center items-center '

const ListElement = ({ itemPlatform, setListDataRender }: ElementListProps) => {
	const [classFlag, setClassFlag] = useState(itemPlatform.select);

	/**
	 * Function that handle the borderColor class for the single item
	 * and set the new array of the GenrCat item in the array to send in the form
	 * @param itemPlatform
	 */
	const handlerGenrSelector = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setClassFlag((prevValue) => {
		// Validate if push a new object
		if (setListDataRender) {
			if (!prevValue) {
				setListDataRender((preArray) => {
					preArray.forEach((prevItem) => {
						if (prevItem.id === itemPlatform.id) {
							prevItem.select = true;
						}
					})
					return preArray;
				});
					
			} else {
				setListDataRender((preArray) => {
					preArray.forEach((itemPrev) => {
						if(itemPrev.id === itemPlatform.id) {
							itemPrev.select = false;
						}
					});
					return preArray;
				});
			}
		}
			return !prevValue; // Change the styleClassFlag value
		});
		event.preventDefault();
	};

	return (
		<button
			type='button'
			style={{ listStyle: "none" }}
			onClick={(event) => handlerGenrSelector(event)}
			className={
				classFlag
					? BUTTON_DEFAULT_CLASS + SELECT_GENR_CLASS
					: BUTTON_DEFAULT_CLASS
			}
			key={itemPlatform.id}>
			<img
				title={itemPlatform.name}
				className='w-16 h-16 rounded-full'
				src={itemPlatform?.logo}
				alt={"item-logo"}
			/>
		</button>
	);
};

const StreamingPlatformList = ({
	listDataRender,
	setListDataRender,
}: StreamingPlatformListProps) => {
	
	return (
		<ul className='flex flex-row justify-around'>
			{listDataRender?.map((item) => (
				<li className='flex flex-col  items-center justify-center'>
					<ListElement itemPlatform={item} setListDataRender={setListDataRender}/>
				</li>
			))}
		</ul>
	);}
export default StreamingPlatformList;
