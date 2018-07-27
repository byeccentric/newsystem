import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './header/header';
import Content from './content/content';
import Footer from './footer/footer';

export default class Page extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Дефолтный заголовок страницы типа'
        }
    }

    header() {
        return (
            <header>
                <Header {...this.state} />
            </header>
        )
    }

    content() {
        return (
            <div>
                <h2>Контент по умолчанию</h2>
            </div>
        )
    }

    footer() {
        return (
            <footer>
                <Footer />
            </footer>
        )
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline>
                    {this.header()}
                    <Content>
                        {this.content()}
                    </Content>
                    {this.footer()}
                </CssBaseline>
            </React.Fragment>
        )
    }
}