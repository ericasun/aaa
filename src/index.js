import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';

import Slider from "./Slider";
import './index.css'

import a from './1.jpg';
import b from './2.jpg';
import c from './3.jpg';

let items = [{src:a},{src:b},{src:c}];

ReactDOM.render(
    <Slider
        delay={2}
        speed={0.5}
        autoplay={true}
        dots={true}
        arrows={true}
        items={items}
    />,window.root
);

