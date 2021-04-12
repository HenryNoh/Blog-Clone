import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchList } from '../modules/lists';
import SearchLists from '../components/Search';

const SearchContainer = (search) => {
    const { data, loading, error } = useSelector((state) => state.lists.lists);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchList(search));
    }, [search, dispatch]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;
    return <SearchLists lists={data} />;
};

const SearchPage = ({ match }) => {
    const { search } = match.params;
    return <SearchContainer search={search} />;
};

export default SearchPage;
