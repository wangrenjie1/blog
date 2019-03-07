import React,{Component } from 'react';
import Code from 'react-markdown/with-html';
import {
    Layout,
    Menu,
    Icon,
    Timeline,
    Row,Col
} from 'antd';
const {
    Header, Footer, Sider, Content,
  } = Layout;
class  CssObject extends Component {
    render(){
        return (
            <Layout style={{marginLeft:200}}>
                <Header style={{ background: '#fff', padding: 0,paddingLeft:20 ,fontSize:20,fontWeight:900}} >
                    <h2> CSS分层与面向对象理论</h2> 
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'inherit'}}>
                <div style={{padding:24,backgroundColor:'#fff',height: ' calc(100vh - 160px)',overflowY:'auto'}}>
                    <Timeline>
                        <Timeline.Item>
                            <h3>css分层理论</h3>
                            <p>css分层理论和命名规则将有助于它的可扩展性，性能的提高和代码的组织管理。</p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>OOSS</h3>
                           <ol>
                               <li>定义：Object Oriented CSS 面向对象css</li>
                               <li>设计原则：表现与结构分离，容器与内容分离</li>
                               <li>用途：创建可复用的CSS模块以提高性能</li>
                               <li>提高团队开发效率，减少耦合</li>
                           </ol>
                           
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>SMACSS</h3>
                            <ol>
                                <li>定义：可扩展的模块化架构的CSS</li>
                                <li>设计原则：使用一套五个层次来划分CSS</li>
                                <li>用途：创建更结构化的模块以提高性能，增加效率</li>
                            </ol>
                            <Row>
                                <Col span={12}>
                                    <Code source='
                                        ```js
                                        Base - 设定HTML elements 的默认值
                                        Layout -Page structure 整个网站的「大架构」的外观   
                                        Module - Re-usable code bloks 不同页面公共模块 
                                        State - Active/Inactive etc 定义元素不同的状态 
                                        Theme - Typography and colour schemes 页面上所有「主视觉」的定义  
                                        ```
                                    '></Code>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Code  source='
                                        ```javascript
                                            .header {}
                                            .header-top {}
                                            .header-top__title {}
                                            .header-top__title--ico {} 
                                    
                                            <div class="header">
                                                <div class="header-top">
                                                    <div class="header-top__title">
                                                        <div class="header-top__title--ico"></div>
                                                    </div>
                                                </div>
                                            </div>
                                          ```
                                    '></Code>
                                </Col>
                            </Row>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3></h3>
                            <p></p>
                        </Timeline.Item>
                    </Timeline>      
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    This is my study note,welcome to comunicated with me , my wechat is "kannihappy"
                </Footer>
            </Layout>   
        )
    }
}
export default  CssObject;