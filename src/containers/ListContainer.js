import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteList, getList } from '../modules/lists';
import List from '../components/List';

const ListContainer = (listId) => {
    const { data, loading, error } = useSelector((state) => state.lists.list);
    const dispatch = useDispatch();
    const onDelete = (e) => dispatch(deleteList(e));
    useEffect(() => {
        dispatch(getList(listId));
    }, [listId, dispatch]);
    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;
    return <List list={data} onDelete={onDelete} />;
};

const ListPage = ({ match }) => {
    const { id } = match.params;
    return <ListContainer listId={parseInt(id, 10)} />;
};

export default ListPage;
