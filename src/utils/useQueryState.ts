import { useSearchParams } from 'react-router-dom';
// import { DEFAULT_PAGE_SIZE } from 'util/constants';

export default function useQueryState() {
	const [searchParams, setSearchParams] = useSearchParams();

	// some common query params
	// const pageNumber = searchParams.get('page') || 1;
	// const pageSize = localStorage.pageSize || DEFAULT_PAGE_SIZE;

	const setQuery = (key, value) => {
		setSearchParams(
			{ [key]: value },
			{
				replace: true,
			}
		);
	};

	function updateQuery(queryObject) {
		setSearchParams({ ...Object.fromEntries(searchParams), ...queryObject });
	}

	function deleteQuery(key) {
		searchParams.delete(key);
		setSearchParams({ ...Object.fromEntries(searchParams) });
	}

	return {
		query: searchParams,
		setQuery,
		updateQuery,
		deleteQuery,
		// pageNumber,
		// pageSize,
	};
}
