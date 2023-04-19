import { Search } from "../../../components";
import { Director, Star, Writer } from "../../../types/types";

interface ContainerSearchProps {
	label: string;
	placeHolder: string;
	listData: Director[] | Star[] | Writer[] | undefined;
	onSearchHandlerEvent: () => void;
    classNameContainer?: string;
    classNameContainerInput?: string;
}

const ContainerSearch = ({
    label,
    placeHolder,
    listData,
    onSearchHandlerEvent,
    classNameContainer,
    classNameContainerInput,
}: ContainerSearchProps) => {
    const CLASS_CONTAINER_SEARCH_ELEMENTS = `flex w-full items-center justify-around`;
	const CLASS_SEARCH_ELEMENT = `w-2/4 container`;

    const onSubmitEventHandler = (searchValue: string) => {
        console.log("🚀 ~ file: ContainerSearch.tsx:25 ~ onSubmitEventHandler ~ searchValue:", searchValue);

    };

    return (
        <div className={`flex w-full my-2`}>
            <div className={`flex flex-row w-full items-center justify-start`}>
                <h1 className="w-20 mx-3" >{label}:</h1>
                <Search
                    label={label}
                    placeholder={placeHolder}
                    className={`w-full flex items-center`}
                    onSubmit={onSubmitEventHandler}
                />
            </div>

            <ul className='flex'>
                {listData?.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ContainerSearch;