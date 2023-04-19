import { useState } from "react";
import { StreamingPlatformsCat } from "../../../types/types";

interface StreamingPlatformListProps {
	listDataRender: StreamingPlatformsCat[];
	setDataFormStreaming: React.Dispatch<React.SetStateAction<StreamingPlatformsCat[]>>;

	onClickEventHandler?: () => void;
}

interface ElementListProps {
	itemPlatform: StreamingPlatformsCat;
	setGenresData: React.Dispatch<React.SetStateAction<StreamingPlatformsCat[]>>;
}
const SELECT_GENR_CLASS = "border-4 border-pink-600";
const BUTTON_DEFAULT_CLASS = ' my-2 mx-1 rounded-xl flex justify-center items-center '

const ListElement = ({ itemPlatform, setGenresData }: ElementListProps) => {
	const [classFlag, setClassFlag] = useState(false);

	/**
	 * Function that handle the borderColor class for the single item
	 * and set the new array of the GenrCat item in the array to send in the form
	 * @param itemPlatform
	 */
	const handlerGenrSelector = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setClassFlag((prevValue) => {
			// Validate if push a new object
			if (!prevValue) {
				setGenresData((preArray) => {
					preArray?.push(itemPlatform);
					return preArray;
				});
			} else {
				setGenresData((preArray) => {
					const newArray = preArray.filter((itemPrev) => {
						return itemPrev.id !== itemPlatform.id;
					});
					return newArray;
				});
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
	setDataFormStreaming,
}: StreamingPlatformListProps) => (
	<ul className='flex flex-row justify-around'>
		{listDataRender?.map((item) => (
			<li className='flex flex-col  items-center justify-center'>
				<ListElement
					setGenresData={setDataFormStreaming}
					itemPlatform={item}
				/>
			</li>
		))}
	</ul>
);
export default StreamingPlatformList;
