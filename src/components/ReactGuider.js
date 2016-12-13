import React, { PropTypes } from 'react';

class ReactGuider extends React.Component {
    render() {
        return (
            <div id='ReactGuider' className={this.props.isOpen ? 'ReactGuider ReactGuider--Open' : 'ReactGuider'}>
               {
                   this.props.children
               }
            </div>
        );
    }
}

ReactGuider.defaultProps = {
    isOpen: PropTypes.bool,
    children: PropTypes.node
};

export default ReactGuider;
