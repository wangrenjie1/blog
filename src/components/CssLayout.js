import React,{Component } from 'react';
import Code from 'react-markdown';
import ResizeBox from './ResizeBox';
import {
    Layout,
    Menu,
    Icon,
    Timeline,
    Row,Col,
    Tooltip
} from 'antd';
const {
    Header, Footer, Sider, Content,
  } = Layout;
class  CssLayout extends Component {
    render(){
        return (
            <Layout style={{marginLeft:200}}>
                <Header style={{ background: '#fff', padding: 0,paddingLeft:20 ,fontSize:20,fontWeight:900}} >
                    <h2> CSS基本布局</h2> 
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'inherit'}}>
                <div style={{padding:24,backgroundColor:'#fff',height: ' calc(100vh - 160px)',overflowY:'auto'}}>
                    <Timeline>
                        <Timeline.Item>
                            <h3>自适应两栏布局</h3>
                            <p>利用BFC实现自适应两栏布局</p>
                            <Row style={{display:'flex'}}>
                                <Col span={12}>
                                   
                                        <Code source='
                                        ```js
                                            /****css****/
                                                .aside{
                                                float: left;
                                                width: 180px;
                                                height: 500px;
                                                background-color: red;
                                                opacity: 0.5;
                                                }
                                                .main{
                                                overflow: hidden;
                                                height: 500px;
                                                background-color: green;
                                                }

                                                <!--html-->
                                                <div class="box">
                                                <div class="aside">左侧</div>
                                                <div class="main">右侧</div>
                                                </div>
                                                 ```'>
                                        </Code>
                                  
                                </Col>
                                <Col span={12}>
                                    <ResizeBox>
                                        <div id="demo6">
                                                <div className="aside">左侧</div>
                                                <div className="main">鼠标拖动移动右侧可改变大小</div>
                                        </div>
                                    </ResizeBox>
                                </Col>
                            </Row>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>圣杯布局和双飞翼布局</h3>
                            <ol>
                                <li>解决什么问题：两边定宽，中间自适应的三栏布局，中间栏放在文档流前面以优先渲染</li>
                                <li>相同点：三栏全float浮动，左右两栏加上负margin让中间栏div 并排，形成三栏</li>
                                <li>不同点：
                                    <ul>
                                        <li>圣杯布局为了中间内容不被遮挡，将container设置左右padding-left和padding-right，将左右两个div用相对定位position:relative并分别配合right和left属性，以便左右两栏div移动后不会遮挡中间div。</li>
                                        <li>双飞翼布局，直接在中间main内部创建子div content用于放置内容，在content上设置margin-left和margin-right为左右两栏div留出位置。</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>圣杯布局代码</p>
                                    <Row style={{display:'flex'}}>
                                        <Col span={12}>
                                            <Code source='
                                                ```js
                                                /****css****/
                                                .main{
                                                  width: 100%;
                                                  background: green;
                                                }
                                                .left{
                                                  left: -200px;
                                                  width: 200px;
                                                  margin-left: -100%;
                                                  background: yellowgreen;
                                                }
                                                .right{
                                                  right: -200px;
                                                  width: 200px;
                                                  margin-left: -200px;
                                                  background-color: red;
                                                }
                                                .main,.left,.right{
                                                  position: relative;
                                                  float: left;
                                                  min-height: 500px;
                                                }
                                                .container{
                                                  padding: 0 200px;
                                                  overflow: hidden;
                                                  border: 5px solid #ccc;
                                                }
                                                
                                                <!--html-->
                                                <div class="container">
                                                    <div class="main">中间栏目</div>
                                                    <div class="left">左侧栏目</div>
                                                    <div class="right">右侧栏目</div>
                                                </div> 
                                                ```
                                            '></Code>
                                        </Col>    
                                        <Col span={12}>
                                                <ResizeBox>
                                                    <div id="demo7" className="container">
                                                        <div className="main">中间栏目</div>
                                                        <div className="left">左侧栏目</div>
                                                        <div className="right">右侧栏目</div>
                                                    </div>
                                                </ResizeBox>
                                        </Col>    
                                    </Row>
                                </li>
                                <li>
                                    <p>双飞翼布局代码</p>
                                    <Row style={{display:'flex'}}>
                                        <Col span={12}>
                                            <Code source='
                                                ```js
                                                /****css****/
                                                .main,.left,.right{
                                                  float: left;
                                                  min-height: 500px;
                                                }
                                                .main{
                                                  width:100%;
                                                  background-color: red;
                                                }
                                                .left{
                                                  width: 200px;
                                                  margin-left: -100%;
                                                  background-color: yellow;
                                                }
                                                .right{
                                                  width: 200px;
                                                  background-color: green;
                                                  margin-left: -200px;
                                                }
                                                .content{
                                                  margin: 0 200px;
                                                }
                                                
                                                <!--html-->
                                                <div class="container"> 
                                                　　<div class="main">
                                                    　　<div class="content">中间栏目</div> 
                                                    </div>
                                                　　<div class="left">左侧栏目</div> 
                                                　　<div class="right">右侧栏目</div> 
                                                </div>       
                                                ```
                                            '></Code>
                                        </Col>
                                        <Col span={12}>
                                            <ResizeBox>
                                                <div id="demo8" className="container">
                                                    <div className="main">
                                                        <div className="content">中间栏目</div>
                                                    </div>
                                                    <div className="left">左侧栏目</div>
                                                    <div className="right">右侧栏目</div>
                                                </div>
                                            </ResizeBox>
                                        </Col>
                                    </Row>
                                </li>
                            </ol>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>flex弹性盒子布局</h3>
                            <ol>
                                <li>定义：Flex是Flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。</li>
                                <li>优点：相对于传统布局更具有灵活性</li>
                                <li>缺点：虽然现代浏览器都支持，但是还是有少部分浏览器需要单独处理其兼容性</li>
                                <li><p>问题：</p>
                                    <ul>
                                        <li>绝对定位与固定定位的盒子不参与flex布局</li>
                                        <li>使用Flex布局以后，子元素的float、clear和vertical-align等属性将失效</li>
                                        <li>具体语法，参考阮一峰的两篇文章
                                            <p><a target="_blank" href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html">http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html</a></p>
                                            <p><a target="_blank" href="http://www.ruanyifeng.com/blog/2015/07/flex-examples.html">http://www.ruanyifeng.com/blog/2015/07/flex-examples.html</a></p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p>三栏布局示例</p>
                                    <Row style={{display:'flex'}}>
                                        <Col span={12}>
                                            <Code source='
                                                ```js
                                                /****css****/
                                                .container{
                                                display: flex;
                                                min-height: 500px;
                                                }
                                                .main{
                                                flex-grow:1;
                                                background-color: red;
                                                }
                                                .left{
                                                order: -1;
                                                flex-basis: 200px;
                                                background-color: yellow;
                                                }
                                                .right{
                                                flex-basis: 200px;
                                                background-color: green;
                                                }
                                                
                                                <!--html-->
                                                <div class="container">
                                                <div class="main">中间内容区域</div>
                                                <div class="left">左边栏区域</div>
                                                <div class="right">右边栏区域</div>
                                                </div>     
                                                ```
                                        '></Code>
                                        </Col>
                                        <Col span={12}>
                                            <ResizeBox>
                                                <div id="demo9" className="container">
                                                    <div className="main">中间内容区域</div>
                                                    <div className="left">左边栏区域</div>
                                                    <div className="right">右边栏区域</div>
                                                </div>
                                            </ResizeBox>
                                        </Col>
                                    </Row>
                                </li>
                            </ol>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>绝对定位布局</h3>
                            <ol>
                                <li>position:absolute绝对定位使元素脱离文档流，因此不占据当前层级的空间</li>
                                <li>
                                    <p>三栏布局代码示例</p>
                                    <Row style={{display:'flex'}}>
                                        <Col span={12}>
                                            <Code source='
                                                ```js
                                                /****css****/
                                                .container{
                                                  position: relative;
                                                }
                                                .main,.left,.right{
                                                  min-height: 500px;
                                                  top: 0;
                                                }
                                                .main{
                                                  background-color: red;
                                                  margin: 0 200px;
                                                }
                                                .left{
                                                  position: absolute;
                                                  left: 0px;
                                                  width: 200px;
                                                  background-color: green;
                                                }
                                                .right{
                                                  position:absolute;
                                                  right: 0px;
                                                  width: 200px;
                                                  background: yellow;
                                                }
                                                
                                                <!--html-->
                                                <div class="container">
                                                  <div class="main">中间内容区域</div>
                                                  <div class="left">左边区域</div>
                                                  <div class="right">右边区域</div>
                                                </div>  
                                                ```
                                            '></Code>
                                        </Col>
                                        <Col span={12}>
                                            <ResizeBox>
                                                <div id="demo10" className="container">
                                                    <div className="main">中间内容区域</div>
                                                    <div className="left">左边区域</div>
                                                    <div className="right">右边区域</div>
                                                </div>
                                            </ResizeBox>
                                        </Col>
                                    </Row>
                                </li>
                            </ol>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>media响应式布局</h3>
                            <ol>
                                <li>定义：一个网站能够兼容多个终端，而不是为每个终端做一个特定的版本</li>
                                <li>优点：
                                    <ul>
                                        <li>跨平台，面对不同分辨率设备灵活性强</li>
                                        <li>能够快捷解决多设备显示适应问题</li>
                                        <li>节约成本</li>
                                    </ul>
                                </li>
                                <li>缺点：
                                    <ul>
                                        <li>兼容性 不兼容低版本浏览器，各种设备工作量大，效率低下</li>
                                        <li>代码冗余量大，加载时间长</li>
                                        <li>折中方案，达不到理想的布局效果</li>
                                    </ul>
                                </li>
                            </ol>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>移动端rem布局</h3>
                            <ol>
                                <li>定义：相对于根元素的字体大小的单位</li>
                                <li>作用：通过js动态计算html font-size 能够使html页面比响应式布局，流式布局，设置最大宽度布局等效果更完善</li>
                                <li>需要考虑当前手机的dpr</li>
                            </ol>
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
export default  CssLayout;