import React from 'react';
import styles from './style/App.css';
import CSSModules from 'react-css-modules';

class App extends React.Component
{
    render()
    {
        return (
            <div styleName='container'>
                Hello
            </div>
        );
    }
}

export default CSSModules( App, styles );