import { Button, InputFile, InputSelect, InputText, InputTextArea } from "../../../components"
import ContainerSearch from "./ContainerSearch"
import GenrsList from "./GenrsList/GenrsList"
import StreamingPlatformList from "./StreamingPlatformList"
import TagsList from "./Tags/TagsList"

interface FormMovieProps {
    onSubmitHandler: () => void,

}

const FormMovie = ({

} : FormMovieProps) => {

    return (
        <></>
        // <div className="flex w-full items-center justify-center">
		// 	<div className='flex w-full flex-col justify-center items-center '>
		// 		<div className='flex justify-center items-stretch flex-col container mx-auto mt-5 mb-5 text-white'>
		// 			<form
		// 				onSubmit={onSubmitHandler}
		// 				className=''>∏
		// 				{/* Titulo */}
		// 				<div className='relative z-0 w-full mb-1 group flex flex-row items-start justify-between'>
		// 					<InputText
		// 						type={"text"}
		// 						name={"title"}
		// 						id={"title"}
		// 						placeHolder={"Title Movie"}
		// 						required={true}
		// 						label={"Title"}
		// 						value={title}
		// 						setValue={setTitle}
		// 						classNameContainer={`w-2/4 mr-4 mt-2 flex items-center`}
		// 					/>
		// 					<InputFile
		// 						label={"Poster"}
		// 						valueImage={poster}
		// 						setValueImage={setPoster}
		// 					/>
		// 				</div>

		// 				<div className='inline-flex items-center justify-center w-full'>
		// 					<span className='absolute px-3 font-medium  -translate-x-1/2  left-1/2 dark:text-white '>
		// 						Info
		// 					</span>
		// 					<hr className='w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
		// 				</div>

		// 				{/* Synopsis */}
		// 				<InputTextArea
		// 					name='synopsis'
		// 					value={synopsis}
		// 					setValue={setSynopsis}
		// 					label={"Synopsis"}
		// 					id={"synopsis"}
		// 					placeHolder={""}
		// 				/>
		// 				<div className={rowClass}></div>
		// 				{/* Genres */}
		// 				<div className='flex items-center justify-center py-5 '>
		// 					<GenrsList
		// 						listGenrs={genres}
		// 						setGenres={setGenres}
		// 					/>
		// 				</div>
		// 				<div className='flex flex-row w-full justify-around items-center py-1'>
		// 					{/* Languages */}
		// 					<InputSelect
		// 						data={languages}
		// 						id={"language"}
		// 						label={"Original Language"}
		// 						key={"language"}
		// 						setValue={setLanguage}
		// 						value={language}
		// 						containerClass={inputSelecContainerClass}
		// 					/>
		// 					{/* Clasifications */}
		// 					<InputSelect
		// 						data={classificationData}
		// 						id={"clasifications"}
		// 						label={"Clasification"}
		// 						key={"clasifications"}
		// 						setValue={setClassification}
		// 						value={classification}
		// 						containerClass={inputSelecContainerClass}
		// 					/>

		// 					<InputText
		// 						type='number'
		// 						numberValue={duration}
		// 						setNumberValue={setDuration}
		// 						label={"duration"}
		// 						maxNumber={500}
		// 						placeHolder={""}
		// 						classNameContainer={`w-2/12 m-5 flex justify-between`}
		// 					/>

		// 					<div className={`w-2/5 flex justify-center items-center flex-col mx-2`}>
		// 						<h1>Release Date</h1>
		// 						<InputDatePicker
		// 							setDateValue={setReleaseDate}
		// 							dateValue={releaseDate}
		// 						/>
		// 					</div>
		// 				</div>
		// 				<div
		// 					id='container-search'
		// 					className='flex py-5 flex-col'>
		// 					{/* Director */}
		// 					<ContainerSearch
		// 						label='Directors'
		// 						listData={directorsData}
		// 						onSearchHandlerEvent={handlerSearchDirectors}
		// 						placeHolder={"Search Directores by name..."}
		// 						setListData={setDirectorsData}
		// 						handlerClickElement={handlerClickDirectorEvent}
		// 					/>
		// 					{/* Writers */}
		// 					<ContainerSearch
		// 						label='Writers'
		// 						listData={writersData}
		// 						setListData={setWritersData}
		// 						onSearchHandlerEvent={handlerSearchWritter}
		// 						placeHolder={"Search Writers by name..."}
		// 						handlerClickElement={handlerClickWritterEvent}
		// 					/>
		// 					{/* Stars */}
		// 					<ContainerSearch
		// 						label='Stars'
		// 						listData={starsData}
		// 						setListData={setStarsData}
		// 						onSearchHandlerEvent={handlerSearchStars}
		// 						placeHolder={"Search Stars by name..."}
		// 						handlerClickElement={handlerClickStarEvent}
		// 					/>
		// 				</div>

		// 				<div className='flex items-center justify-between py-5'>
		// 					<div className=' w-full justify-between items-center '>
		// 						<h1 className='my-2'>Where to Watch:</h1>
		// 						<StreamingPlatformList
		// 							setListDataRender={setStreamingPlatforms}
		// 							listDataRender={streamingPlatforms}
		// 						/>
		// 					</div>
		// 				</div>
		// 				<div className='flex bg-gray-800 h-auto p-3'>
		// 					<div className='flex flex-col justify-center w-1/4'>
		// 						<h1>Tags:</h1>
		// 						<InputText
		// 							label=''
		// 							value={tagInput}
		// 							setValue={setTagInput}
		// 							onSubmitEvent={onsubmitTag}
		// 						/>
		// 					</div>

		// 					<TagsList
		// 						onClickRemoveTag={removeTagFromList}
		// 						tagsList={tags}
		// 					/>
		// 				</div>
		// 				<div
		// 					id='buttons-container'
		// 					className='flex w-full items-center justify-around my-6'>
		// 					<Button 
		// 						label='Save'
		// 						isPillStyle={true}
		// 						type={"submit"}
		// 						customClass={"mx-2 w-1/6 bg-yellow-500 text-lg text-center text-white"}
		// 					/>
		// 					<Button
		// 						label='Cancel'
		// 						isPillStyle={true}
		// 						type={"button"}
		// 						onClickHandler={onResetHandlerEvent}
		// 						customClass={"mx-2 w-1/6 bg-yellow-500 text-lg text-center text-white"}
		// 					/>
		// 				</div>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div>
    )
}

export default FormMovie