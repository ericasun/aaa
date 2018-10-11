import React,{Component} from 'react';
export default class MessageBox extends React.Component {
    render(){
        let style={
            width:(this.props.items.length+1)*400+'px', // 设置ul默认宽度
            left:this.props.index*400*-1 + 'px', // 根据当前index  移动left值
            transition:`left ${this.props.speed}s linear`
        }
        return (
            <ul style={style} ref='ul'>
                {this.props.items.map((item,index)=>(
                    <li><img src={item.src} key={index}/></li>
                ))}
                {/*实现无缝轮播要再增加一张图*/}
                <li><img src={this.props.items[0].src} alt=""/></li>
            </ul>
        )
    }
}
