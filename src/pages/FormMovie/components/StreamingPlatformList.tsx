import { StreamingPlatformElement } from "../../../components";
import { StreamingPlatformsCat } from "../../../types/types";

interface StreamingPlatformListProps {
    listData: StreamingPlatformsCat[] | undefined,
}

const StreamingPlatformList = ({listData}: StreamingPlatformListProps) => {
    return (
        <ul className='flex flex-row justify-around'>
            {listData?.map((item) => (
                <li
                    className='flex flex-col  items-center justify-center'
                    key={item.id}>
                    <StreamingPlatformElement item={item} />
                </li>
            ))}
        </ul>
    );
};
export default StreamingPlatformList;