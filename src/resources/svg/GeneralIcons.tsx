import { IconProps } from "../../types/generalTypes";

const defaultColor = "#fff";

const Search = ({ color = defaultColor }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='16'
		height='16'
		fill={color}
		className='bi bi-search'
		viewBox='0 0 16 16'>
		<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
	</svg>
);

const StartFill = () => (
	<svg
		aria-hidden='true'
		className='w-5 h-5 text-yellow-400'
		fill='currentColor'
		viewBox='0 0 20 20'
		xmlns='http://www.w3.org/2000/svg'>
		<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
	</svg>
);

const Start = ({ color = defaultColor }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='16'
		height='16'
		fill={color}
		className='bi bi-star'
		viewBox='0 0 16 16'>
		<path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' />
	</svg>
);

const GraphUpArrow = ({ color = defaultColor }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='16'
		height='16'
		fill={color}
		className='bi bi-graph-up-arrow'
		viewBox='0 0 16 16'>
		<path
			fill-rule='evenodd'
			d='M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z'
		/>
	</svg>
);

export { Search, StartFill, Start, GraphUpArrow,};
