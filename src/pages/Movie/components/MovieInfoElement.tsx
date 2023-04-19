import { Movies } from "../../../types/types";

interface MovieInfoElementProps {
    item: Movies
};
const MovieInfoElement = ({item}: MovieInfoElementProps) => {
    const defaultParagraphClass = `mb-3 font-normal text-zinc-200 dark:text-zinc-300 ml-2`;
	const defaultSubTitleClass = `mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white`;
	const defaultContainerInfo = `flex justify-stretch`;
    const tempStreaming = [
		{
			img: "https://www.citypng.com/public/uploads/preview/-11596295514wdrm03x1ui.png",
			url: "https://www.primevideo.com",
		},
		{
			img: "https://w7.pngwing.com/pngs/153/31/png-transparent-netflix-macos-bigsur-icon.png",
			url: "https://www.netflix.com/mx/",
		},
		{
			img: "https://w7.pngwing.com/pngs/591/520/png-transparent-star-plus-star-india-television-show-television-channel-net.png",
			url: "https://www.starplus.com/es-mx/welcome/stream-now",
		},
		{
			img: "https://www.citypng.com/public/uploads/preview/hbo-max-logo-hd-png-11663461870m9srh5j4us.png",
			url: "https://www.hbomax.com/activate",
		},
	];

    return (
        <div className='mt-2'>
            <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Movie Info
            </h1>
            <div>
                <div className={"flex justify-start"}>
                    <h5 className={defaultSubTitleClass}>Genre:</h5>
                    <p className={defaultParagraphClass}>Crime, Drama, Classification</p>
                </div>
                <div className={defaultContainerInfo}>
                    <h5 className={defaultSubTitleClass}>Original Language:</h5>
                    <p className={defaultParagraphClass}>English</p>
                </div>
                <div className={defaultContainerInfo}>
                    <h5 className={defaultSubTitleClass}>Director:</h5>
                    <p className={defaultParagraphClass}>Francis Ford Coppola</p>
                </div>
                <div className={defaultContainerInfo}>
                    <h5 className={defaultSubTitleClass}>Writers:</h5>
                    <p className={defaultParagraphClass}>ario Puzo – Francis Ford Coppola</p>
                </div>
                <div className={defaultContainerInfo}>
                    <h5 className={defaultSubTitleClass}>Stars:</h5>
                    <p className={defaultParagraphClass}>Marlon Brando – Al Pacino – James Caan</p>
                </div>
                <div className={defaultContainerInfo}>
                    <h5 className={defaultSubTitleClass}>release date:</h5>
                    <p className={defaultParagraphClass}>15, 1972</p>
                </div>
                <div className={defaultContainerInfo}>
                    <h5 className={defaultSubTitleClass}>Duration:</h5>
                    <p className={defaultParagraphClass}>2h 57 m</p>
                </div>
            </div>
            <div className="w-full">
                <h1>WHERE TO WATCH</h1>
                <div className="flex flex-row justify-start">
                    {tempStreaming.map((item) => (
                        <a target={'_blank'} href={item.url} className={'flex ml-5'}>
                            <img
                                className='w-10 h-10 rounded-full'
                                src={item.img}
                                alt='Rounded avatar'></img>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieInfoElement;