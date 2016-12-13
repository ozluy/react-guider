# react-guider
Guide menu for applications

#### demo
<a href="http://ozluy.github.io/projects/react-guider/"> DEMO LINK </a>

#### useage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactGuider, ReactGuiderItem } from './lib/main';
require('./lib/react-guider.scss');

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
                            activeElement: -1,
                            isGuideOpen: false
                        })
                    }
                }
            ],
            activeElement: -1
        }
    }
    _handleOnClose() {
        this.setState({
            activeElement: -1
        });
    }
    _handleOnOpen(_index) {
        this.setState({
            activeElement: _index
        });
    }
    render() {
        const _s = this.state;
        return (
            <div>
                 {
                    !_s.isGuideOpen
                    &&
                    <button
                        className="GuideExpandableItem__Content__Info__BlueContent__Button"
                        onClick={() => this.setState({ isGuideOpen: true })}>
                        Restart
                    </button>
                }

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
                                onOpen={this._handleOnOpen.bind(this, _index)}
                                onClose={this._handleOnClose.bind(this)}
                                bottom={_item.bottom}
                                contentPositon={_item.contentPositon}
                                onButtonClick={_item.onButtonClick}
                                />
                        )
                    })
                }
            </ReactGuider>
            </div>
          
        );
    }
}
if (module.hot) {
    module.hot.accept();
}
ReactDOM.render(<App />, document.getElementById('app'));



```
