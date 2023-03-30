interface GenresList{
    item?: any,
}
function GenresList({item}: GenresList) {
    const tempGenrs = ["Action", "Mafia", "Drama", "Crimen", "Patriarch", "gamblig syndicate"];
    return (
        <div>
            {tempGenrs.map((item) => (
                <button
                    type='button'
                    className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                    {item}
                </button>
            ))}
        </div>
    );
}

export default GenresList;