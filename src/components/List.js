import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #555;
`;

const ListsBlock = styled.div`
    max-width: 1080px;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 340px;
        border-bottom: 1px black solid;
        h1 {
            margin: 0;
            padding-top: 130px;
            font-size: 2.125em;
            height: 50px;
            line-height: 50px;
        }
        .title_bar {
            p {
                margin: 0;
            }
            margin-top: 30px;
            height: 30px;
            line-height: 30px;
            display: flex;
            flex-direction: row;
        }
    }
    .text {
        padding: 72px 0 60px 0;
    }
`;

const List = ({ list, onDelete }) => {
    const { id, title, text, list_date, category } = list;
    const date =
        list_date.substring(0, 4) +
        '. ' +
        list_date.substring(5, 7) +
        '. ' +
        list_date.substring(8, 10);
    const [suc, setSuc] = useState(false);

    const onSubmit = (e) => {
        if (window.confirm('?��?��?��?��겠습?���??')) {
            onDelete(id);
        }
    };
    useEffect(() => {
        if (sessionStorage.login) {
            setSuc(true);
        } else {
            setSuc(false);
        }
    }, [suc]);
    return (
        <ListsBlock>
            <div className="title">
                <h1>{title}</h1>
                <div className="title_bar">
                    <p>by HenryNoh　</p>
                    <p>{date}　</p>
                    <p>{category}　</p>
                    {suc ? (
                        <p>
                            <StyledLink to={`/Update/${list.id}`}>
                                수정　
                            </StyledLink>
                        </p>
                    ) : null}
                    {suc ? (
                        <p>
                            <StyledLink to="/" type="submit" onClick={onSubmit}>
                                삭제
                            </StyledLink>
                        </p>
                    ) : null}
                </div>
            </div>
            <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
        </ListsBlock>
    );
};

export default List;
