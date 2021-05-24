import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import logo from "../../img/logo.svg"
import './index.less'
import { Layout, Menu } from 'antd';

const { Header} = Layout;

class NavWrapper extends Component {

  constructor(props){
    super(props)

    this.state = {
      cur: 'caro'
    }
  }

  doMenu = (e) => {
    this.setState({ cur: e.key })
    this.props.history.push(e.key)
  }

  render(){

    const { cur } = this.state

    return (
    <div className="layout">
    <Header style={{ zIndex: 1, width: '100%' }} className="m-nav" >
      <div className="logo">
        <img src={logo} width="40" height="40" alt=""></img>
        <label className='u-name' >浙江东都建筑设计研究院管理系统</label>
      </div>
      <Menu theme="dark" 
            mode="horizontal" 
            selectedKeys={[cur]}
            onClick={this.doMenu} 
            >
        <Menu.Item key="caro">管理轮播器</Menu.Item>
        <Menu.Item key="news">管理新闻</Menu.Item>
        <Menu.Item key="proj">管理工程</Menu.Item>
        <Menu.Item key="desi">管理设计师</Menu.Item>
        <Menu.Item key="cont">管理留言</Menu.Item>
      </Menu>
    </Header>
    <div className="site-layout-content">
       {this.props.children}
    </div>
  </div>
    )
  }
}

export default withRouter(NavWrapper)
