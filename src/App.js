import React from 'react';
import { Route } from 'react-router-dom';
import HeadContainer from './containers/HeadContainer';
import MainContainer from './containers/MainContainer';
import PostContainer from './containers/PostContainer';
import SearchContainer from './containers/SearchContainer';
import ListContainer from './containers/ListContainer';
import UpdateContainer from './containers/UpdateContainer';
import CategoryContainer from './containers/CategoryContainer';
import FootContainer from './containers/FootContainer.js';
import styled from 'styled-components';

const Block = styled.div`
    body {
        margin: 0;
    }
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #fafafa;
`;
const App = () => {
    return (
        <Block>
            <HeadContainer />
            <Route path="/" exact={true} component={MainContainer} />
            <Route
                path="/Search/:search"
                exact={true}
                component={SearchContainer}
            />
            <Route
                path="/Update/:id"
                exact={true}
                component={UpdateContainer}
            />
            <Route path="/List/:id" exact={true} component={ListContainer} />
            <Route path="/Post" component={PostContainer} />
            <Route
                path="/Category/:parent/:child"
                exact={true}
                component={CategoryContainer}
            />
            <FootContainer />
        </Block>
    );
};

export default App;
