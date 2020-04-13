import React, { Fragment, Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import HomePageOne from '../Pages/HomePageOne'
import HomePageTwo from '../Pages/HomePageTwo'
import HomePageThree from '../Pages/HomePageThree'
import AboutPage from '../Pages/AboutPage'
import PracticePage from '../Pages/PracticePage'
import PracticeSinglePage from '../Pages/PracticeSinglePage'
import PortfolioPage from '../Pages/PortfolioPage'
import SinglePortfolioPage from '../Pages/SinglePortfolioPage'
import TeamPage from '../Pages/TeamPage'
import SingleTeamPage from '../Pages/SingleTeamPage'
import ContactPage from '../Pages/ContactPage'
import BlogLeftPage from '../Pages/BlogLeftPage'
import BlogRightPage from '../Pages/BlogRightPage'
import BlogFullWidth from '../Pages/BlogFullWidth'
import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <ToastContainer autoClose={2500} position="top-center" />
                    <Switch>
                        <Route exact path="/" component={HomePageOne} />
                        <Route exact path="/home-two" component={HomePageTwo} />
                        <Route exact path="/home-three" component={HomePageThree} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/practice" component={PracticePage} />
                        <Route exact path="/practice-details" component={PracticeSinglePage} />
                        <Route exact path="/case-stadies" component={PortfolioPage} />
                        <Route exact path="/case-stadies-details" component={SinglePortfolioPage} />
                        <Route exact path="/attorneys" component={TeamPage} />
                        <Route exact path="/attorneys-single" component={SingleTeamPage} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/blog-left" component={BlogLeftPage} />
                        <Route exact path="/blog-right" component={BlogRightPage} />
                        <Route exact path="/blog-fullwidth" component={BlogFullWidth} />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
