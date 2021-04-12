import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import styled from 'styled-components';
import { addList, sideList } from '../modules/lists';

const Wrapper = styled.div`
    background-color: #fff;
`;

const PostContainer = () => {
    const { data, loading, error } = useSelector((state) => state.lists.side);

    const dispatch = useDispatch();
    const onCreate = (e) => dispatch(addList(e));
    useEffect(() => {
        dispatch(sideList());
    }, [dispatch]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;
    return (
        <Wrapper>
            <Post onCreate={onCreate} categoryList={data}></Post>
        </Wrapper>
    );
};

export default PostContainer;
