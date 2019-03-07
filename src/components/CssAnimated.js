import React,{Component } from 'react';
import Code from 'react-markdown';
import {
    Layout,
    Menu,
    Icon,
    Timeline
} from 'antd';
const {
    Header, Footer, Sider, Content,
  } = Layout;
class  CssAnimated extends Component {
    render(){
        return (
            <Layout style={{marginLeft:200}}>
                <Header style={{ background: '#fff', padding: 0,paddingLeft:20 ,fontSize:20,fontWeight:900}} >
                    <h2> CSS动画与3D</h2> 
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'inherit'}}>
                <div style={{padding:24,backgroundColor:'#fff',height: ' calc(100vh - 160px)',overflowY:'auto'}}>
                    <Timeline>
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
export default  CssAnimated;