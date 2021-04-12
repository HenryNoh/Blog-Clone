import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 55px;
    border-top: 1px solid #ccc;
    padding: 38px 0 28px 0;
    background-color: white !important;
`;

const Footer = styled.div`
    margin: 0 auto;
    display: flex;
    max-width: 1080px;
    height: 100%;
    p {
        color: #555;
        height: 17.5px;
        line-height: 17.5px;
        margin: 0;
    }
    span {
        position: absolute;
        height: 32px;
        width: 32px;
        font-size: 32px;
        right: 15%;
        cursor: pointer;
    }
`;
const FootContainer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <Wrapper>
            <Footer>
                <p>TEL. 010.3049.8044 / Henry Noh</p>
                <span className="material-icons" onClick={scrollToTop}>
                    arrow_circle_up
                </span>
            </Footer>
        </Wrapper>
    );
};

export default FootContainer;
