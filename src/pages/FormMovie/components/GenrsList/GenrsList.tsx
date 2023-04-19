import { useState } from "react";
import { GenreCat } from "../../../../types/types";

interface GenrsListProps {
	listGenrs: GenreCat[] | undefined;
	setGenresData: React.Dispatch<React.SetStateAction<GenreCat[]>>;
}

interface ElementListProps {
	item: GenreCat;
	setGenresData: React.Dispatch<React.SetStateAction<GenreCat[]>>;
}

const SELECT_GENR_CLASS = " border-2 border-pink-600 ";
const BUTTON_DEFAULT_CLASS = ' bg-yellow-500 p-2 my-2 mx-1 rounded-xl text-white flex justify-center items-center ';

const ListElement = ({ item, setGenresData }: ElementListProps) => {
	const [classFlag, setclassFlag] = useState(false);
	/**
	 * Function that handle the borderColor class for the single item
	 * and set the new array of the GenrCat item in the array to send in the form
	 * @param itemGenr
	 */
	const handlerGenrSelector = (itemGenr: GenreCat) => {
		setclassFlag((prevValue) => {
			// Validate if push a new object
			if (!prevValue) {
				setGenresData((preArray) => {
					preArray?.push(item);
					console.log("🚀 ~ file: GenrsList.tsx:33 ~ setclassFlag ~ preArray:", preArray);
                    // debugger;
					return preArray;
				});
			} else {
				// Filter the array and remove the element
				setGenresData((preArray) => {
					const newArray = preArray.filter((itemPrev) => {
						return itemPrev.description !== itemGenr.description;
					});
					console.log("🚀 ~ file: GenrsList.tsx:42 ~ setclassFlag ~ newArray:", newArray);
					return newArray;
				});
			}
			return !prevValue; // Change the styleClassFlag value
		});
	};

	return (
		<button
			type='button'
			style={{ listStyle: "none" }}
			onClick={() => handlerGenrSelector(item)}
			className={
				classFlag
					? BUTTON_DEFAULT_CLASS + SELECT_GENR_CLASS
					: BUTTON_DEFAULT_CLASS
			}
			key={item.id}>
			<h1 className='text-lg text-ellipsis text-white'>{item.description}</h1>
		</button>
	);
};

const GenrsList = ({ listGenrs, setGenresData }: GenrsListProps) => {
	return (
		<ul className='flex flex-wrap items-center justify-between text-gray-900 dark:text-white w-full '>
			{listGenrs?.map((item) => (
				<ListElement
					item={item}
					setGenresData={setGenresData}
				/>
			))}
		</ul>
	);
};

export default GenrsList;
