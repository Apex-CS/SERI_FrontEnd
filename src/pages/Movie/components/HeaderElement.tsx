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
                <h3>APEX Raiting</h3>
                <div className="w-3/4 flex flex-row items-center my-1 justify-between">
                    <StartFill />
                    <h3>9.2/10</h3>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3>Your Raiting</h3>
                <button
                    onClick={handlerOnRateClick}
                    className="flex items-center justify-between my-1 text-blue-400">
                    <Start color="#3B82F6" />
                    <h1 className="ml-2">Rate</h1>
                </button>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3>Popularity</h3>
                <div className="w-3/4 flex flex-row items-center my-1 justify-between">
                    <GraphUpArrow />
                    <h3>46</h3>
                </div>
            </div>
        </div>
    );
};
export default HeaderElement;