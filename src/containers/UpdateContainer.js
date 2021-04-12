import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Update from '../components/Update';
import styled from 'styled-components';
import { getList, sideList, updateList } from '../modules/lists';

const Wrapper = styled.div`
    background-color: #fff;
`;
const UpdateContainer = (listId) => {
    const { data, categoryList, loading, error } = useSelector((state) => ({
        data: state.lists.list.data,
        loading: state.lists.list.loading,
        error: state.lists.list.error,
        categoryList: state.lists.side.data,
    }));
    const dispatch = useDispatch();
    const onUpdate = (e) => dispatch(updateList(e));
    useEffect(() => {
        dispatch(getList(listId));
        dispatch(sideList());
    }, [listId, dispatch]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;
    if (!categoryList) return null;
    return (
        <Wrapper>
            <Update
                list={data}
                categoryList={categoryList}
                onUpdate={onUpdate}
            />
        </Wrapper>
    );
};

const UpdatePage = ({ match }) => {
    const { id } = match.params;
    return <UpdateContainer listId={parseInt(id, 10)} />;
};

export default UpdatePage;
