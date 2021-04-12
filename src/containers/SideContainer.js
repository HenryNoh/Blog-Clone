import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sideList } from '../modules/lists';
import Side from '../components/Side';

const SideContainer = () => {
    const { data, loading, error } = useSelector((state) => state.lists.side);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sideList());
    }, [dispatch]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;
    return <Side side={data.data} />;
};

export default SideContainer;
