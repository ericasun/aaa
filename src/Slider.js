import React,{Component} from 'react';

let index1 = 0;
let index2 = 0;
let flag = false;

export default class Slider extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="slider">
                <div className="sliderList" ref="div">
                    <div className="one">1</div>
                    <div className="two">2</div>
                    <div className="three">3</div>
                </div>
                <span className="left" onClick={this.left.bind(this)}>左</span>
                <span className="right" onClick={this.right.bind(this)}>右</span>
            </div>
        )
    }

    left=()=>{

        let $div = this.refs.div
        let length = $div.children.length


        if(index1 < 3 && flag === false){
            for( let i =0 ; i< length; i++){
                $div.children[i].style.left = 100 * (i-1-index1) + "px"
                $div.children[i].style.transitionDuration = 1+'s';// 再增加回来这个动画

            }
            index1++;
            if(index1 === 3){
                flag =  true;
            }
        }

        console.log(flag)

        if(flag === true){
            console.log(1)
            for( let i =0 ; i< length; i++){
                $div.children[i].style.left = 100 * i + (-100) * index2 +"px"
                $div.children[i].style.transitionDuration = 1+'s';// 再增加回来这个动画
            }
            index2++
        }

        if( $div.children[0].style.left === (-200 + "px")){
            $div.children[0].style.left = 100 + "px";
        }

        if( $div.children[1].style.left === (-200 + "px")){
            $div.children[1].style.left = 100 + "px";
        }

        if( $div.children[2].style.left === (-200 + "px")){
            $div.children[2].style.left = 100 + "px";
        }


        // $div.children[0].style.left = -100 + "px"
        // $div.children[0].style.transitionDuration = 3+'s';// 再增加回来这个动画
        //
        // $div.children[1].style.left = 0
        // $div.children[1].style.transitionDuration = 3+'s';// 再增加回来这个动画
        //
        // $div.children[2].style.left = 100 + "px"
        // $div.children[2].style.transitionDuration = 3+'s';// 再增加回来这个动画

    }

    right=()=>{
        console.log("右")
    }

}

//
// export default class Slider extends React.Component {
//     constructor(){
//         super();
//         this.state = {index:0}// 表示当前是第几张
//     }
//
//     go =(step)=>{ // 去哪  传入要动几个
//         let index = this.state.index+step;// 先加的
//         if(index > this.props.items.length){ // 当等于最后一张时  越界回到0
//             this.$ul.style.transitionDuration = '';// 清除ul上的动画
//             this.$ul.style.left = 0;// 回到0处
//
//             setTimeout(()=>{// 等动画移除后并且回到了0点  再增加回动画时间（dom刷新一般是30s）
//                 this.$ul.style.transitionDuration = this.props.speed+'s';// 再增加回来这个动画
//                 index = 1;// 下一次该走1了
//                 this.setState({index});
//             },30)
//             return;//因为设置了setTimeout所以要等待setTimeout后再设置最新状态
//         }
//         if(index < 0){// 当小于第一张时  回到最后一张
//             this.$ul.style.transitionDuration = '';// 清除ul上的动画
//             this.$ul.style.left = this.props.items.length*-1*400+'px';
//             setTimeout(()=>{
//                 this.$ul.style.transitionDuration = this.props.speed+'s';
//                 index = this.props.items.length -1;
//                 this.setState({index});
//             },30);
//                 return
//         }
//
//         this.setState({
//             index:index
//         })
//     }
//
//     turn = () =>{ // 轮播
//         this.timer = setInterval(()=>{
//              this.go(1)
//          },this.props.delay*1000);
//     }
//
//     componentDidMount(){ // 页面加载完成后  看是否需要自动轮播
//         if(this.props.autoplay){
//             this.turn();
//         }
//         // 通过ulfs获取sliderList中的ul元素(操作dom节点)
//         console.log(this.$ul = this.refs.list.refs.ul)
//     }
//
//     render(){
//     // 越界了并且只是第一个span加上active属性
//        return (
//             <div className='slider-container'
//                  onMouseEnter={()=>{ clearInterval(this.timer);}}
//                  onMouseLeave={()=>{ this.turn();}} >
//                 <SliderList ref='list' index={this.state.index} items={this.props.items} speed={this.props.speed}/>
//                 {this.props.arrows?<SliderArrows go={this.go}/>:null}
//                 {this.props.dots?<SliderDots go={this.go} items={this.props.items} index={this.state.index}/>:null}
//             </div>
//         )
//     }
// }
