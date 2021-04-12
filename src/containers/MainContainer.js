import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLists } from '../modules/lists';
import MainLists from '../components/Main';

const MainContainer = () => {
    const { data, loading, error } = useSelector((state) => state.lists.lists);
    console.log(data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLists());
    }, [dispatch]);

    if (loading) return <div>loadingÁß</div>;
    if (error) return <div>error ¹ß»ı!</div>;
    if (!data) return null;
    return <MainLists lists={data.data} />;
};

export default MainContainer;
