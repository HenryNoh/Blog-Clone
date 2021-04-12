import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchList, login } from '../modules/lists';
import Head from '../components/Head';
import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    border-bottom: 1px solid #ccc;

    background-color: #fff !important;
`;

const HeadContainer = () => {
    const { data, loading, error } = useSelector((state) => state.lists.login);
    const dispatch = useDispatch();

    const onSearch = (e) => dispatch(searchList(e));
    const onLogin = (e) => dispatch(login(e));

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    return (
        <Header>
            <Head data={data} onSearch={onSearch} onLogin={onLogin} />
        </Header>
    );
};

export default HeadContainer;
