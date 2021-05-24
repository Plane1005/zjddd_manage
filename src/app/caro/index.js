import React, { Component } from 'react'
import {Button} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './style.less';
var API_SERVER = 'http://localhost:2000'

export default class Caro extends Component {

    constructor(props){
        super(props)

        this.state={
            carl:[]
        }

    }

    componentDidMount(){
        fetch(`${API_SERVER}/api/caro/getAllCarousel`)
        .then(data=>{
            return data.json();
        })
        .then(data=>{
            this.setState({carl:data.carl})
            console.log(this.state.carl);
        })
    }

    editcarl=()=>{
        
    }

    render() {

        const {carl} = this.state

        return (
            <div className='m-caro'>
                {carl.map((item,i)=>
                <div className="u-item" key={i}>
                    <img className="u-img"  src={`${API_SERVER}/${item.img}`} />
                    <div className="m-button" >
                    <Button type="primary" size='middle' onClick={this.editcarl}>
                        修改图片
                    </Button>
                    <Button type="primary" size='middle'>
                        删除图片
                    </Button>
                    </div>
                </div>
                )}
                <div type="primary" size='middle' className="u-addimg">
                    增加图片
                </div>
            </div>
        )
    }
}
