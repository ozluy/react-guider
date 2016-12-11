require('styles/Guider.scss');

import React from 'react';
import ReactGuiderItem from './ReactGuiderItem';

//let yeomanImage = require('../images/yeoman.png');
class ReactGuider extends React.Component {
    render() {
        return (
            <div className="WizardGuideBox WizardGuideBox--InitialState">
                <ReactGuiderItem
                    buttonLabel='skip'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, harum?'
                    />
            </div>
        );
    }
}

ReactGuider.defaultProps = {
};

export default ReactGuider;
