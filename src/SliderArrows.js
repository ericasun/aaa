import React,{Component} from 'react';

export default class SliderDots extends React.Component {
    render(){
        return (
            <div className='slider-dots'>
                {(this.props.todos || []).map((item,index)=>(
                    <span key={index} className={this.props.index===index?'active':''}
                          onClick={()=>{this.props.go(index-this.props.index)}}></span>
                ))}
            </div>
        )
    }
}
