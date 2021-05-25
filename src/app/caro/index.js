import React, { Component } from 'react'
import {Upload,message,Button} from 'antd';
import './style.less';
var API_SERVER = 'http://localhost:2000'

let changeid = 1
let carlsize = 7
let upfilename = `0${changeid}.jpg`
let addfilename = `0${carlsize}.jpg`
const up = {
    name: upfilename,
    action: `${API_SERVER}/api/caro/editCarousel`,
    data:{
        id:changeid
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    }
  };

  const add = {
    name: addfilename,
    action: `${API_SERVER}/api/caro/addCarousel`,
    data:{
        id:changeid
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    }
  };

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
        })
    }

    deletecarl=()=>{

    }

    render() {

        const {carl} = this.state

        return (
            <div className='m-caro'>
                {carl.map((item,i)=>
                <div className="u-item" key={i}>
                    <img className="u-img" alt='' src={`${API_SERVER}/${item.img}`} />
                    <div className="m-button" >
                    <Upload {...up} >
                    <Button type="primary" className='u-btn' id={i} size='middle' >
                        修改图片
                    </Button>
                    </Upload>
                    <Button type="primary" className='u-btn' id={i} size='middle' onClick={this.deletecarl}>
                        删除图片
                    </Button>
                    </div>
                </div>
                )}
                <Upload {...add} >
                <div type="primary" size='middle' className="u-addimg" >
                    增加图片
                </div>
                </Upload>
            </div>
        )
    }
}
