import React,{Component } from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import HtmlBasic from "./components/HtmlBasic";
import JsBasic from "./components/JsBasic";
import CssConcept from "./components/CssConcept";
import CssLayout from "./components/CssLayout";
import CssObject from "./components/CssObject";
import CssAnimated from "./components/CssAnimated";
import CssPreset from "./components/CssPreset";
import  './css/index.css';
import {
    Layout,
    Menu,
    Icon
} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
const {
    Header, Footer, Sider, Content,
  } = Layout;
class App extends  Component  {
    constructor(props){
        super(props);
        this.state = {
            catalogue:[
                
            ]
        }
    }
    render(){
        return(
            <Router basename="/blog">
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
                                    <SubMenu title={<p><span className="icon">&#xe605;</span><span>CSS基础</span></p>}>
                                        <Menu.Item> <Link to="/cssconcept">基础概念</Link></Menu.Item>
                                        <Menu.Item> <Link to="/csslayout">基本布局</Link></Menu.Item>
                                        <Menu.Item> <Link to="/cssobject">Css分层与面向对象</Link></Menu.Item>
                                        <Menu.Item> <Link to="/cssanimated">Css动画与3D</Link></Menu.Item>
                                        <Menu.Item> <Link to="/csspreset">Css与处理器</Link></Menu.Item>
                                    </SubMenu>
                                    <Menu.Item>
                                        <Link to="/jsbasic"><span className="icon">&#xec68;</span>JS基础</Link>
                                    </Menu.Item>
                            </Menu>
                        </Sider>
                        <Switch>
                            <Route path="/htmlbasic" component={HtmlBasic}/>
                            <Route path="/jsbasic" component={JsBasic}/>
                            <Route path="/cssconcept" component={CssConcept}/>
                            <Route path="/csslayout" component={CssLayout}/>
                            <Route path="/cssobject" component={CssObject}/>
                            <Route path="/cssanimated" component={CssAnimated}/>
                            <Route path="/csspreset" component={CssPreset}/>
                        </Switch>
                    </Layout>
                </Router>
                )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
