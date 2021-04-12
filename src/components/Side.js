import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideHeader = styled.div`
    color: black;
    font-size: 1em;
    font-weight: 600;
`;

const SidesListBlock = styled.div`
    display: flex;
    flex-direction: column;
    li {
        line-height: 35px;
        list-style: none;
        font-weight: 400;
        font-size: 1em;
        .parent {
            color: black;
            margin-top: 10px;
            text-decoration: none;
            div {
                line-height: 20px;
                font-size: 0.8125rem;
                padding: 3px 0 3px 9px;
                border-left: 2px solid #999;
                a.child {
                    color: #555;
                    text-decoration: none;
                    :hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;

const SideList = ({ side, parent }) => {
    return side.map((child, key) =>
        child.parent_id === parent.id ? (
            <div key={child.id}>
                <Link
                    className="child"
                    to={`/Category/${parent.name}/${child.name}`}
                >
                    {child.name}
                </Link>
            </div>
        ) : null
    );
};

const SideLists = ({ side }) => {
    return (
        <SidesListBlock>
            <SideHeader>분류 전체보기</SideHeader>
            {side.map((parent, key) =>
                parent.parent_id === 0 ? (
                    <li key={parent.id}>
                        <div className="parent">
                            {parent.name}
                            <SideList side={side} parent={parent} />
                        </div>
                    </li>
                ) : null
            )}
        </SidesListBlock>
    );
};

const Side = ({ side }) => {
    return <SideLists side={side} />;
};

export default Side;
