import { LabelSubtitle } from "../../../components";
import { GraphUpArrow, Start, StartFill } from "../../../resources/svg/GeneralIcons";
import { Movies } from "../../../types/types";

interface HeaderElementProps {
    item?: Movies
}

const HeaderElement = ({item}: HeaderElementProps) => {
    const handlerOnRateClick = () => {

    };

    return (
        <div className='w-full flex flex-row justify-around items-center mb-2'>
            <div className='flex flex-col justify-between items-center'>
                <LabelSubtitle subtitle="APEX Raiting" />
                <div className="w-3/4 flex flex-row items-center my-1 justify-around">
                    <StartFill />
                    <LabelSubtitle textSize="text-lg" subtitle="9.2/10" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <LabelSubtitle subtitle="Your Raiting" />
                
                <button
                    onClick={handlerOnRateClick}
                    className="flex w-3/4  items-center justify-around my-1 text-blue-400">
                    <Start color="#3B82F6" />
                    <h1 className=" text-xl">Rate</h1>
                </button>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <LabelSubtitle subtitle="Popularity"  />
                <div className="w-3/4 flex flex-row items-center my-1 justify-around">
                    <GraphUpArrow />
                    <LabelSubtitle textSize="text-lg" subtitle="46" />
                </div>
            </div>
        </div>
    );
};
export default HeaderElement;