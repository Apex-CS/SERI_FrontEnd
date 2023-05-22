import { LabelTitle } from "../../../components";
import { Director, Movies, Star, StreamingPlatformsCat, Writer } from "../../../types/types";
import { getRandomNumber } from "../../../utils/utils";
import { StreamingPlatformList } from "../../FormMovie/components";
import appleLogo from '../../../resources/img/logos-stream/apple_tv.svg';
import amazonLogo from '../../../resources/img/logos-stream/amazon_prime_video.svg';
import netflixLogo from '../../../resources/img/logos-stream/netflix.svg';
import disneyLogo from '../../../resources/img/logos-stream/disney_plus.svg';
import hboLogo from '../../../resources/img/logos-stream/hbo_max.svg'
interface MovieInfoElementProps {
    item: Movies
};
const MovieInfoElement = ({item}: MovieInfoElementProps) => {
    const defaultParagraphClass = `mb-3 font-normal text-xl text-zinc-200 dark:text-zinc-300 ml-2`;
	const defaultSubTitleClass = `mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white`;
	const defaultContainerInfo = `flex justify-stretch`;

    function formatDate(date: Date): string {
        // const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        
        // Use template literals to format the output string
        return `${month}/${day}/${year}`;
      }

    const directors: Director[] = [
        {
            id: 10,
            name: 'Stanley Kubrick'
        }
    ];

    const writers: Writer[] = [
        {
            name: 'Stanley Kubrick',
            id: 200,
        },
        {
            name: 'Peter Sellers',
            id: 200,
        },
        {
            name: 'Peter George',
            id: 200,
        },
        {
            name: 'Terry Southern',
            id: 200,
        },
    ];

    const stars: Star[] = [
        {
            id: getRandomNumber(9999999),
            name: 'Peter Sellers',
        },
        {
            id: getRandomNumber(9999999),
            name: 'George C. Scott',
        },
        {
            id: getRandomNumber(9999999),
            name: 'Sterling Hayden',
        },
        {
            id: getRandomNumber(9999999),
            name: 'Keenan Wynn',
        },
        {
            id: getRandomNumber(9999999),
            name: 'Sellers Peter',
        },
        {
            id: getRandomNumber(9999999),
            name: 'Scott George Collins ',
        },
        {
            id: getRandomNumber(9999999),
            name: 'Hayden Sterling',
        },
        {
            id: getRandomNumber(9999999),
            name: 'Wynn Keenan',
        },
    ];

    const tempStreaming: StreamingPlatformsCat[] = [
		{
			logo: amazonLogo,
            name: 'Amazon',
            id: '1',
			url: "https://www.primevideo.com",
		},
		{
			logo: netflixLogo,
            name: 'Netflix',
            id: '2',
			url: "https://www.netflix.com/mx/",
		},
		{
			logo: disneyLogo,
            name: 'starplus',
            id: '3',
			url: "https://www.starplus.com/es-mx/welcome/stream-now",
		},
        {
			logo: appleLogo,
            name: 'apple',
            id: '4',
			url: "https://www.hbomax.com/activate",
		},
        
	];

    
    return (
        <div className='mt-2'>
            <LabelTitle customClass="mb-0 text-2xl tracking-tight ml-1" title="DETAILS" />
            <div className="my-5">
                <div className={"flex justify-start"}>
                    <h5 className={defaultSubTitleClass}>Genre:</h5>
                    <p className={defaultParagraphClass}>Crime, Drama, Classification</p>
                </div>
                <div className={defaultContainerInfo}>
                    <h5 className={defaultSubTitleClass}>Original Language:</h5>
                    <p className={defaultParagraphClass}>English</p>
                </div>
                <div className={defaultContainerInfo}>
                    <h5 className={defaultSubTitleClass}>Directors:</h5>
                    {directors.map((directorItem, indexDirector) => (
                        <>
                            {indexDirector === (directors.length - 1) ?
                                (<p className={defaultParagraphClass}>{directorItem.name} </p>)
                                : (<p className={defaultParagraphClass}>{directorItem.name}, </p>)
                            }
                        </>
                    ))}
                </div>
                
                <div>
                    
                    <div className={defaultContainerInfo}>
                        <h5 className={defaultSubTitleClass}>Writers:</h5>
                        {writers.map((writerItem, indexWriter) => (
                            <>
                                {indexWriter === (writers.length - 1) ?
                                    (<p className={defaultParagraphClass}>{writerItem.name} </p>)
                                    : (<p className={defaultParagraphClass}>{writerItem.name}, </p>)
                                }
                            </>
                        ))}
                    </div>
                </div>
                
                
                <div className={defaultContainerInfo}>
                    <h5 className={defaultSubTitleClass}>Release Date:</h5>
                    <p className={defaultParagraphClass}>
                        <>
                            {item?.release_date ?
                                (formatDate(item.release_date)): ('not register')}
                        </>
                    </p>
                </div>
                <div className={defaultContainerInfo}>
                    <h5 className={defaultSubTitleClass}>Duration:</h5>
                    <p className={defaultParagraphClass}>2h 57 m</p>
                </div>
            </div>
            <div className="w-full mt-5 flex flex-col text-white items-start ">
                <LabelTitle customClass="text-xl ml-0 font-bold text-yellow-400 mb-0 ml-1" title="WHERE TO WATCH:" />
                <div className="flex flex-row justify-start mt-5">
                    <StreamingPlatformList
                        listDataRender={tempStreaming}
                        selectFlag={false}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full items-start my-5 justify-start">
                <LabelTitle customClass="text-xl ml-0 font-bold text-yellow-400 mb-0 ml-1" title="TOP CAST:" />
                <div className="mt-5 mx-2">
                    {stars.map((item) => (
                        <button
                            type='button'
                            className='text-white text-2xl rounded-full font-medium border-2 border-zinc-500 px-5 py-2 mb-3 text-center mr-3 hover:bg-zinc-400 active:zinc-400 focus:outline-none'
                            >
                            {item.name}
                        </button>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default MovieInfoElement;