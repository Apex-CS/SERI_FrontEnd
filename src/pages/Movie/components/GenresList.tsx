import { GenreCat } from "../../../types/types";

interface GenresListProps{
    listItems: GenreCat[],
}
function GenresList({listItems}: GenresListProps) {
    return (
        <div className="flex flex-row items-center justify-around">
            {
                listItems.map((item) => (
                    <p className='text-zinc-200 text-xl px-1 py-1'>{item.description},</p>
            ))}
        </div>
    );
}

export default GenresList;