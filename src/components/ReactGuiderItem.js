import React, { Component, PropTypes } from 'react';

class ReactGuiderItem extends Component {
    constructor(props){
        super(props);
        this.state={
            isActive: false
        }
        this._handleOpenClick = this._handleOpenClick.bind(this);
        this._handleCloseClick = this._handleCloseClick.bind(this);
    }
    _handleOpenClick(){
        this.setState({
            isActive: true
        });
    }
     _handleCloseClick(){
        this.setState({
            isActive: false
        });
    }
    render() {
     const _s = this.state;
        return (
            <div className={_s.isActive ? 'Guide--Expandable--Item --active-Item' : 'Guide--Expandable--Item'} style={{ left: '321px', top: '50%', right: '817px', bottom: '126px' }}>
                    <div className="Guide--Expandable--Item--Icon" onClick={this._handleOpenClick}>
                        <svg width="13px" height="13px" viewBox="30 30 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.6001054,39.268188 L31.6001054,37.2027312 C31.6001054,36.7613328 31.2425042,36.4030963 30.8001027,36.4030963 C30.3585012,36.4030963 30.0001,36.7613328 30.0001,37.2027312 L30.0001,41.2009055 C30.0001,41.6343076 30.3577012,42.0005403 30.8001027,42.0005403 L34.8001161,42.0005403 C35.2425176,42.0005403 35.6001188,41.6431036 35.6001188,41.2009055 C35.6001188,40.759507 35.2425176,40.4012706 34.8001161,40.4012706 L32.7297092,40.4012706 L35.360918,37.7624756 C35.6737191,37.4498184 35.6729191,36.9436495 35.360118,36.6317919 C35.046517,36.3191347 34.5409153,36.3191347 34.2289142,36.6325915 L31.6001054,39.268188 Z M41.9891003,30.8001349 C41.9891003,30.3667328 41.6394991,30.0005 41.1858976,30.0005 L37.2058842,30.0108953 C36.7634827,30.0124945 36.4066815,30.3707309 36.4074815,30.812929 C36.4074815,31.2535278 36.7666827,31.610165 37.2074842,31.610165 L39.2554911,31.6045675 L36.6290823,34.2393644 C36.3162812,34.551222 36.3170812,35.0573908 36.6298823,35.3700481 C36.7858828,35.5259769 36.9906835,35.6035414 37.1954842,35.6035414 C37.4002849,35.6035414 37.6050856,35.5251772 37.7610861,35.3692484 L40.3938949,32.7280545 L40.400295,34.8183 C40.401095,35.2596985 40.7586962,35.6163356 41.2002976,35.6163356 C41.6434991,35.6147363 42.0011003,35.2557003 42.0003003,34.8151015 L41.9891003,30.8001349 Z"
                                 stroke="none" fill="#5C9DF5" fillRule="evenodd">
                            </path>
                        </svg>
                    </div>
                    <div className="Guide--Expandable--Item--Content" >

                        <div className="Guide--Expandable--Item--Content--Info">
                            <div className="Guide--Expandable--Item--Content--Info--blueContent">
                                <div className="Guide--Expandable--Item--Content--Info--blueContent--text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ipsa!
                        </div>
                                <button className="Guide--Expandable--Item--Content--Info--blueContent--button">
                                    Next
                                </button>
                            </div>
                        </div>
                        <div className="Guide--Expandable--Item--Exit" onClick={this._handleCloseClick}>
                            <svg width="13px" height="12px" viewBox="10 11 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M13.1147994,11.7005858 C12.7278765,11.313663 12.1003537,11.3138598 11.7071068,11.7071068 L11.7071068,11.7071068 C11.3165825,12.0976311 11.3188876,12.7331012 11.7005858,13.1147994 L15.2426407,16.6568542 L11.7005858,20.1989091 C11.313663,20.585832 11.3138598,21.2133548 11.7071068,21.6066017 L11.7071068,21.6066017 C12.0976311,21.997126 12.7331012,21.9948209 13.1147994,21.6131227 L16.6568542,18.0710678 L20.1989091,21.6131227 C20.585832,22.0000455 21.2133548,21.9998487 21.6066017,21.6066017 L21.6066017,21.6066017 C21.997126,21.2160774 21.9948209,20.5806073 21.6131227,20.1989091 L18.0710678,16.6568542 L21.6131227,13.1147994 C22.0000455,12.7278765 21.9998487,12.1003537 21.6066017,11.7071068 L21.6066017,11.7071068 C21.2160774,11.3165825 20.5806073,11.3188876 20.1989091,11.7005858 L16.6568542,15.2426407 L13.1147994,11.7005858 Z"
                                     stroke="none" fill="#BEC2C9" fillRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
        );
    }
}

ReactGuiderItem.propTypes = {
    onButtonClick: PropTypes.func
};

export default ReactGuiderItem;