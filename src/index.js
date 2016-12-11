import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactGuider, ReactGuiderItem } from './main';

// // Render the main component into the dom

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isGuideOpen: true,
            listOfItems: [

                {
                    top: '300px',
                    left: '50px',
                    buttonLabel: 'next',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, unde!',
                    onButtonClick: () => {
                        this.setState({
                            activeElement: 2
                        })
                    }
                },
                {
                    top: '300px',
                    left: '50%',
                    right: '50%',
                    buttonLabel: 'next',
                    text: 'Lorem ipsum dolor sit amet, consectetur.',
                    onButtonClick: () => {
                        this.setState({
                            activeElement: 3
                        })
                    }
                },
                {
                    top: '100px',
                    right: '60px',
                    buttonLabel: 'next',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, excepturi.',
                    contentPositon: {
                        top: '-50px',
                        right: 'auto',
                        bottom: 'auto',
                        left: '-300px'
                    },
                    onButtonClick: () => {
                        this.setState({
                            activeElement: 1
                        })
                    }
                },
                {
                    top: '500px',
                    right: '50px',
                    buttonLabel: 'finish',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, autem.',
                    contentPositon: {
                        top: '-150px',
                        right: 'auto',
                        bottom: 'auto',
                        left: '-300px'
                    },
                    onButtonClick: () => {
                        this.setState({
                            isGuideOpen: false
                        })
                    }
                }
            ],
            activeElement: -1
        }
    }
    _handleOnToggle(_index) {
        const _container = document.getElementById('ReactGuider');
        if (_container.className !== 'ReactGuider ReactGuider--Open') {
            _container.className = 'ReactGuider ReactGuider--Open';
            this.setState({
                activeElement: _index
            });
        }
        else {
            _container.className = 'ReactGuider ReactGuider--Open ReactGuider--HasActiveChildren';
            this.setState({
                activeElement: _index
            });
        }
    }
    render() {
        const _s = this.state;
        return (
            <ReactGuider isOpen={_s.isGuideOpen}>
                {
                    _s.listOfItems.map((_item, _index) => {
                        return (
                            <ReactGuiderItem
                                key={'ReactGuiderItem--' + _index}
                                buttonLabel={_item.buttonLabel}
                                text={_item.text}
                                top={_item.top}
                                right={_item.right}
                                left={_item.left}
                                isActive={_index === _s.activeElement}
                                onToggle={() => this._handleOnToggle.bind(this, _index)}
                                bottom={_item.bottom}
                                contentPositon={_item.contentPositon}
                                onButtonClick={_item.onButtonClick}
                                />
                        )
                    })
                }
            </ReactGuider>
        );
    }
}
if (module.hot) {
    module.hot.accept();
}
ReactDOM.render(<App />, document.getElementById('app'));

