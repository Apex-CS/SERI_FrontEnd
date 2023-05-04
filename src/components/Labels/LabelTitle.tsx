interface LabelTitleProps {
    title: string,
    customClass?: string,
};
const LabelTitle = ({title, customClass}: LabelTitleProps) => {
    const classDefault = `font-bold dark:text-yellow-400 ${customClass}`;
    return ( <div className='flex justify-start items-center border-l-4 border-yellow-400'>
                <h1 className={classDefault}>{title}</h1>
            </div> );
}

export default LabelTitle;