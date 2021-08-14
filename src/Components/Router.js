import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Main from 'Routes/Main/index';
import Trade from 'Routes/Trade/index';

const Container = styled.section`
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
`;

const RouterContainer = () => {
    return (
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Main></Main>
                </Route>
                <Route path="/trade">
                    <Container>
                        <Trade></Trade>
                    </Container>
                </Route>
                <Redirect from="*" to="/"></Redirect>
            </Switch>
            <Footer></Footer>
        </Router>
    );
};

// eslint-disable-next-line
export default RouterContainer;
