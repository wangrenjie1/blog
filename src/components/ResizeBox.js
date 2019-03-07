import React,{Component } from 'react';
import { Tooltip } from 'antd';
class ResizeBox  extends Component{
    constructor(props){
        super(props);
        this.state = {
            ox:0,
            el:null,
        }
    }
    getPositoinx = (e)=>{
        return e.clientX;
    } 
    isDrag = (e)=>{
        const xPos = this.getPositoinx(e);
        const elem = this.state.el;
        const elemRect = elem.getBoundingClientRect();
        const offset = 30;
        if(xPos > (Math.ceil(elemRect.left)+elem.offsetWidth - offset)){
           return  true;
        }else{
          return false;
        }
    } 
    doDown = (e)=>{
        const elem = this.state.el;
        if(this.isDrag(e)){
            let ox = e.clientX;
            this.setState({
                ox
            })
            elem.onmousemove = (e) => this.doMove(e);
            elem.onmouseleave = (e) => this.doUp(e);
            elem.onmouseup = (e) => this.doUp(e);
        }
    }
    doMove = (e)=>{
        const xMin = 310;
        let oWdith = this.state.el.offsetWidth;
        let dis = e.clientX - this.state.ox;
        let step = dis>0?2:-2;
        this.state.el.style.width  = Math.max((oWdith + dis + step),xMin) + 'px';
        let ox = e.clientX;
        this.setState({
            ox
        })
    }
    doUp = (e) =>{
      const elem = this.state.el;
      this.state.ox = 0;
      elem .onmousemove = null;
      elem.onmouseleave = null;
    }
    render(){
        return(
            <Tooltip placement="right" title="拖动右边可以左右拉伸，查看响应式">
                <div 
                    className="resizeBox" 
                    ref={(box) => {this.state.el = box;}} 
                    onMouseDown={(e)=>{this.doDown(e)}} >{this.props.children}
                </div>
            </Tooltip>
        )
    }
}
export default ResizeBox;