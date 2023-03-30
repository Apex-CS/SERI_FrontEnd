import { GraphUpArrow, Start, StartFill } from "../../../resources/svg/GeneralIcons";
import { Movies } from "../../../types/types";

interface HeaderElementProps {
    item?: Movies
}

const HeaderElement = ({item}: HeaderElementProps) => {
    return (
        <div className='flex flex-row justify-around items-center mb-2'>
            <div className='flex flex-col justify-between items-center'>
                <h3>APEX Raiting</h3>
                <div>
                    <StartFill />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3>Your Raiting</h3>
                <div className="flex items-center justify-between">
                    <Start />
                    <h1 className="ml-2">Rate</h1>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3>Popularity</h3>
                <div className="my-1">
                    <GraphUpArrow />
                </div>
            </div>
        </div>
    );
};
export default HeaderElement;