import { GenreCat } from "../../../types/types";

interface GenresListProps{
    listItems: GenreCat[],
}
function GenresList({listItems}: GenresListProps) {
    // Probarlo con los Tags
    // <button
    //     type='button'
    //     className='text-white rounded-full font-medium border-2 border-zinc-500 text-sm px-5 py-2 text-center mx-2 hover:bg-zinc-400 active:zinc-400 focus:outline-none'
    //     >
    //     {item.description}
    // </button>
    return (
        <div className="flex flex-row items-center justify-around">
            {
                listItems.map((item) => (
                    <p className='text-zinc-200 px-1 py-1'>{item.description},</p>
            ))}
        </div>
    );
}

export default GenresList;