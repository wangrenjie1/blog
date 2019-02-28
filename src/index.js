import React,{Component } from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import HtmlBasic from "./components/HtmlBasic";
import JsBasic from "./components/JsBasic";
import  './css/index.css';
import {
    Layout,
    Menu,
    Icon
} from 'antd';
const {
    Header, Footer, Sider, Content,
  } = Layout;
class App extends  Component  {
    render(){
        return(
            <Router>
                <Layout>
                        <Sider 
                        style={{height:"100vh",position:"fixed",left:"0", overflow:'hidden'}
                        }>
                            <div className="logo">
                               天道酬勤
                            </div>
                            <Menu theme="dark" mode="inline">
                                    <Menu.Item>
                                        <Link to="/htmlbasic"><Icon type="html5" />HTML基础</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/jsbasic"><span className="icon">&#xec68;</span>JS基础</Link>
                                    </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{marginLeft:200}}>
                            <Header style={{ background: '#fff', padding: 0,paddingLeft:20 ,fontSize:20,fontWeight:900}} >
                                这里是标题
                            </Header>
                            <Content style={{ margin: '24px 16px 0', overflow: 'inherit'}}>
                               <div style={{padding:24,backgroundColor:'#fff',height: ' calc(100vh - 160px)',overflowY:'auto'}}>
                                        <Switch>
                                            <Route path="/htmlbasic" component={HtmlBasic}/>
                                            <Route path="/jsbasic" component={JsBasic}/>
                                        </Switch>
                               </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                This is my study note,welcome to comunicated with me , my wechat is "kannihappy"
                            </Footer>
                        </Layout>   
                    </Layout>
                </Router>
                )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
