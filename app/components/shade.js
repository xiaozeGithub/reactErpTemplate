import React from 'react'
import { Row, Col, Icon } from 'antd';
import $ from 'jquery'

class Shade extends React.Component {
    static defaultProps = {
        title: '我是遮罩层',
       
    }

    constructor(props, context) {
        super(props, context)
    }
    state = {
        shadeContent : normalShade,
        ismaxScreen : false
    }
    closeShade = (e) => {
        if($(e.target).attr('id') == 'shadeContainer'){
            this.props.callBack();
            return;
        }else if($(e.target).attr('id') == 'closeShade'){
            this.props.callBack();
            return;
        }
    }
    maxScreen = () => {
        this.setState({shadeContent:maxShade,
        ismaxScreen : true
        });

    }
    normalScreen = () => {
        this.setState({shadeContent:normalShade,
        ismaxScreen : false
        });
    }
    render() {
        let {ismaxScreen} = this.state
        let IconScreen;
        ismaxScreen?IconScreen =  <Icon  onClick={this.normalScreen} className='shadeIcon' style={{marginRight:'2px'}} type="shrink" />
        :IconScreen = <Icon  onClick={this.maxScreen} className='shadeIcon' style={{marginRight:'2px'}} type="arrows-alt" />
        return (
            <div  style={shadeContainer}  onClick={this.closeShade}>
                    <Row id="shadeContainer" style={{width:'100%',height:'100%'}} type="flex" justify="center" align="middle">
                         
                             <div style={this.state.shadeContent}>
                                 <div style={{width:'100%',height:'48px',background:'#c3a279',color:'white',lineHeight:'48px'}}>
                                    <span style={shadeTitleText}>{this.props.title}</span>
                                    <Icon id = "closeShade" onClick={this.closeShade} className='shadeIcon' type="close" />
                                    {IconScreen}
                                 </div>
                            </div>
                         
                    </Row>
            </div>
        )
    }
}
module.exports = Shade

const shadeContainer = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background:'rgba(0,0,0,.6)',
    zIndex: '99'
}
const normalShade = {
     marginRight:'-15px',
        width: '46%',
        height:'600px',
        background: 'white',
        borderRadius: '6px'
}
const maxShade = {
        marginRight:'-15px',
        width: '100%',
        height:'100%',
        background: 'white',
        borderRadius: '6px'
}
const shadeTitleText = {
    paddingLeft: '24px',
    borderLeft:'4px solid #fff',
    fontSize: '14px',
    cursor: 'pointer'
}