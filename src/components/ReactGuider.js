require('styles/App.scss');

import React from 'react';
import ReactGuiderItem from './ReactGuiderItem';

//let yeomanImage = require('../images/yeoman.png');
class ReactGuider extends React.Component {
    render() {
        return (
            <div className="Wizard--guideBox --initialState">
                <ReactGuiderItem />
            </div>
        );
    }
}

ReactGuider.defaultProps = {
};

export default ReactGuider;
