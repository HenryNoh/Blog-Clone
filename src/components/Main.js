import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SideContainer from '../containers/SideContainer';
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #555;
`;

const MainItemBlock = styled.div`
    max-width: 740px;
    min-height: 166px;
    margin-bottom: 28px;
    .title {
        max-width: 555px;
        max-height: 28px;
        padding-top: 7px;
        margin-bottom: 12px;
        font-weight: 400;
        font-size: 1.25em;
    }
    .text {
        max-width: 555px;
        max-height: 60px;
        margin-bottom: 20px;
        overflow-y: hidden;
        text-overflow: ellipsis;
        line-height: 1.25rem;
        font-size: 0.875rem;
    }
    .date {
        font-size: 0.75em;
        max-width: 740px;
        max-height: 15px;
    }
`;
const MainListBlock = styled.div`
    padding-top: 72px;
    max-width: 740px;
    width: 740px;
    padding-right: 55px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ccc;
`;
const MainSideBlock = styled.div`
    width: 230px;
    max-width: 230px;
    display: flex;
    flex-direction: column;
    padding: 75px 0 40px 55px;
`;
const MainListsHeader = styled.div`
    h1 {
        font-size: 1em;
        span {
            margin-left: 7px;
            color: #04beb8;
        }
    }
    width: 740px;
    max-width: 740px;
    padding: 4px 0 18px 0;
    margin-bottom: 28px;
    border-bottom: 1px solid #ccc;
`;
const MainListsBlock = styled.div`
    max-width: 1080px;
    position: relative;
    margin: 0 auto;
    padding: 0 20px 0 20px;
    display: flex;
    .form {
        text-align: center;
    }
`;

const MainItem = ({ list }) => {
    const text = list.text.replace(/(<([^>]+)>)/gi, '');
    const date = list.list_date;
    // list.list_date.substring(0, 4) +
    //     '. ' +
    //     list.list_date.substring(5, 7) +
    //     '. ' +
    //     list.list_date.substring(8, 10);
    return (
        <MainItemBlock>
            <StyledLink to={`/List/${list.id}`}>
                <div className="title">{list.title}</div>
                <div
                    className="text"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
                <div className="date">{date}</div>
            </StyledLink>
        </MainItemBlock>
    );
};
const MainList = ({ lists }) => {
    return (
        <MainListBlock>
            <MainListsHeader>
                <h1>
                    ? „ì²? ê¸? <span>{lists.length}</span>
                </h1>
            </MainListsHeader>
            {lists.map((list, index) => (
                <MainItem key={list.id} list={list} />
            ))}
        </MainListBlock>
    );
};

const MainLists = ({ lists }) => {
    return (
        <MainListsBlock>
            <MainList lists={lists} />
            <MainSideBlock>
                <SideContainer />
            </MainSideBlock>
        </MainListsBlock>
    );
};

export default MainLists;
