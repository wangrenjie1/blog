import React,{Component } from 'react';
import Code from 'react-markdown';
import boxurl from '../images/css盒子模型.png';
import {
    Layout,
    Menu,
    Icon,
    Timeline,
    Row, Col
} from 'antd';
const {
    Header, Footer, Sider, Content,
  } = Layout;
class  CssConcept extends Component {
    render(){
        return (
            <Layout style={{marginLeft:200}}>
                <Header style={{ background: '#fff', padding: 0,paddingLeft:20 ,fontSize:20,fontWeight:900}} >
                    <h2> CSS基础概念</h2> 
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'inherit'}}>
                <div style={{padding:24,backgroundColor:'#fff',height: ' calc(100vh - 160px)',overflowY:'auto'}}>
                    <Timeline>
                        <Timeline.Item>
                            <h3>什么是css</h3>
                            <p>层叠样式表（cascading Style Sheets），一种用来表现html或者xml等文件样式的计算机语言。</p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>标准盒子模型-怪异盒模型</h3>
                            <ol>
                                <li>在html文档中，每一个渲染在页面中的标签都是一个个盒子模型；</li>
                                <li>盒子模型分为w3c标准盒子模型和IE标准盒子模型；当不对Doctype进行定义时，会触发怪异模式。</li>
                                <li>盒子模型 ：
                                    <pre>
                                        <Code source='/****css****/
                                            .box{
                                            width:100px;
                                            height:100px;
                                            border:10px;
                                            background-color:red;
                                            padding:20px;
                                            margin:20px;
                                            }

                                            <!--html-->
                                            <div class="box"></div>'></Code>
                                    </pre>
                                   <img src={boxurl}/>
                                </li>
                            </ol>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>BFC  IFC   FFC GFC  KFC</h3>
                            <ol>
                                <li>BFC
                                    <ul>
                                        <li>定义（Block fomatting context）：块级格式化上下文(每一个元素盒子从上向下排列)</li>
                                        <li>block-level box:display 属性为 block, list-item, table 的元素，会生成 block-level box。并且参与 block fomatting context；</li>
                                        <li>是一个独立的渲染区域，只有Block-level box参与</li>
                                        <li>布局规则
                                            <ol type="i">
                                                <li>内部的Box会在垂直方向连接放置</li>
                                                <li>Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠</li>
                                                <li>每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。</li>
                                                <li>BFC的区域不会与float box重叠</li>
                                                <li>BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。外面也影响不了里面</li>
                                                <li>计算BFC的高度时，浮动元素也参与计算</li>
                                            </ol>
                                        </li>
                                        <li>哪些元素会生成BFC
                                            <ol type="i">
                                                <li>根元素</li>
                                                <li>float元素不为none</li>
                                                <li>position为 absolute或者fixed</li>
                                                <li>display为inline-block, table-cell, table-caption, flex, inline-flex</li>
                                                <li>overflow不为visible</li>
                                            </ol>
                                        </li>
                                        <li>BFC的作用
                                            <ol type="i">
                                                <li><p>自适应两栏布局：</p>
                                                <Row>
                                                    <Col span={12}>
                                                        <pre>
                                                            <Code source='
                                                                /****css****/
                                                                .main{
                                                                overflow: hidden;
                                                                height: 500px;
                                                                background: yellow;
                                                                }
                                                                .aside{
                                                                float: left;
                                                                width: 200px;
                                                                height: 500px;
                                                                background-color: red;
                                                                }
                                                                
                                                                <!--html-->
                                                                <div class="box">
                                                                <div class="aside">侧边栏区域</div>
                                                                <div class="main">内容区域</div>
                                                                </div>
                                                            '></Code>
                                                        </pre>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div id="demo1" className="demobox">
                                                            <div className="aside">侧边栏区域</div>
                                                            <div className="main">内容区域
                                                                <div style={{width:300,height:300,backgroundColor:'#ccc'}}> </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                </li>
                                                <li><p>清除内部浮动  解决float元素使其父元素高度塌陷问题</p>
                                                    <Row>
                                                        <Col span={12}>
                                                            <pre>
                                                                <Code source='
                                                                      /****css****/
                                                                      .parent{
                                                                        border: 1px solid red;
                                                                        width: 400px;
                                                                        /****overflow: hidden;****/
                                                                        padding: 10px;
                                                                      }
                                                                      .child{
                                                                        float: left;
                                                                        height: 150px;
                                                                        width: 198px;
                                                                        border: 1px solid green;
                                                                      }
                                                                      
                                                                      <!--html-->
                                                                      <div class="parent">
                                                                        <div class="child"></div>
                                                                        <div class="child"></div>
                                                                      </div>
                                                                '></Code>
                                                            </pre>
                                                        </Col>
                                                        <Col span={12}>
                                                            <div id="demo2" className="demobox parent">
                                                                <div className="child"></div>
                                                                <div className="child"></div> 
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </li>
                                                <li><p>防止margin重叠</p>
                                                    <Row>
                                                        <Col span={12}>
                                                            <pre>
                                                                <Code source='
                                                                    /****css****/
                                                                    .box div{
                                                                        width: 300px;
                                                                        height: 160px;
                                                                        background: red;
                                                                    }
                                                                    .first{
                                                                        margin-bottom: 50px;
                                                                    }
                                                                    .second{
                                                                        margin-top:50px;
                                                                        /**** display: inline-block;****/
                                                                    }
                                                                    
                                                                    <!--html-->
                                                                    <div class="box">
                                                                        <div class="first"></div>
                                                                        <div class="second"></div>
                                                                    </div>
                                                                '></Code>
                                                            </pre>
                                                        </Col>
                                                        <Col span={12}>
                                                                <div id="demo3" className="demobox">
                                                                        <div className="first"></div>
                                                                        <div className="second"></div>
                                                                </div>
                                                        </Col>
                                                    </Row>
                                                </li>                               
                                            </ol>
                                        </li>
                                    </ul>
                                </li>
                                <li>IFC
                                    <ul>
                                        <li>布局规则
                                            <ol type="i">
                                                <li>定义（Inline Formatting Contexts）：内联格式化上下文（每一个元素盒子从左到右排列）</li>
                                                <li>IFC的line box高度 由其行内元素中 最高的实际高度计算而来（竖直方向的padding/margin   不起作用)</li>
                                                <li>inline-level box:display 属性为 inline, inline-box，inline-table，table-cell，table-column-group等，会生成 inline-level box。并且参与 inline fomatting context；</li>
                                                <li>当inline-level box的宽度大于containing block，且达到内容换行条件时，会将inline-level拆散为多个inline-level box并分布到多行中</li>
                                                <li>inline-level box一般左右都贴紧整个IFC，但是会因为float元素而扰乱。float元素会位于IFC与与line box之间，使得line box宽度缩短</li>
                                                <li>IFC中不可能有块级元素，当插入块级元素时（如p中插入div）会产生两个匿名块与div分隔开，即产生两个IFC，每个IFC对外表现为块级元素，与div垂直排列。</li>
                                            </ol>
                                        </li>
                                        <li>作用</li>
                                            <ol>
                                                <li><p>水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。</p>
                                                    <Row>
                                                        <Col span={12}>
                                                            <pre>
                                                                <Code source='
                                                                      /****css****/
                                                                      .box{text-align: center;}
                                                                      .content{
                                                                        display: inline-block;
                                                                        border: 1px solid red;
                                                                      }
                                                                      
                                                                      <!--html-->
                                                                      <div class="box">
                                                                        <div class="content">内容区域</div>
                                                                      </div>
                                                                '></Code>
                                                            </pre>
                                                        </Col>
                                                        <Col span={12}>
                                                            <div id="demo4" className="demobox">
                                                                <span className="content">内容区域</span>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </li>
                                                <li><p>垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。</p>
                                                    <Row>
                                                        <Col span={12}>
                                                            <pre>
                                                                <Code source='
                                                                      /****css****/
                                                                      .box{
                                                                        text-align: center;
                                                                        border: 1px solid red;
                                                                      }
                                                                      .label{
                                                                        display: inline-block;
                                                                        height: 100px;
                                                                        width: 100px;
                                                                        vertical-align: middle;
                                                                      }
                                                                      
                                                                      <!--html-->
                                                                      <div class="box">
                                                                        <span class="content">盒子1</span>
                                                                        <span class="label">盒子2</span>
                                                                      </div>
                                                                '></Code>
                                                            </pre>
                                                        </Col>
                                                        <Col span={12}>
                                                                <div id="demo5" className="demobox">
                                                                        <span className="content">盒子1</span>
                                                                        <span className="label">盒子2  设置盒子2为inline-block，则会在box上产生ifc，设置其vertical-align:middle，盒子1垂直居中。 </span>
                                                                </div>
                                                        </Col>
                                                    </Row>              
                                                </li>
                                            </ol>
                                    </ul>
                                </li>
                                <li>FFC
                                    <ul>
                                        <li>定义(Flex Formatting Contexts)：自适应格式化上下文</li>
                                        <li>display值为flex或者inline-flex的元素将会生成自适应容器（flex container）</li>
                                        <li>FFC和BFC区别
                                            <ol type='i'>
                                                <li>Flexbox 不支持 ::first-line 和 ::first-letter 这两种伪元素</li>
                                                <li>vertical-align 对 Flexbox 中的子元素失效</li>
                                                <li>float 和 clear 属性对 Flexbox 中的子元素是没有效果的，也不会使子元素脱离文档流</li>
                                                <li>多栏布局（column-*） 在 Flexbox 中失效</li>
                                                <li>Flexbox 下的子元素不会继承父级容器的宽</li>
                                            </ol>
                                        </li>
                                    </ul>
                                </li>
                                <li>GFC
                                    <ul>
                                        <li>定义(GridLayout Formatting Contexts)：网格布局格式化上下文</li>
                                        <li>display值为grid的元素，获得一个独立的渲染区域，可在网格内定义项目（item）、行（row）、列（columns）</li>
                                    </ul>
                                </li>
                                <li>KFC
                                    <p>肯德基（KentuckyFried Chicken，肯塔基州炸鸡），简称KFC，是美国跨国连锁餐厅之一，也是世界第二大速食及最大炸鸡连锁企业，1952年由创始人哈兰·山德士（Colonel Harland Sanders）创建， [1]  主要出售炸鸡、汉堡、薯条、盖饭、蛋挞、汽水等高热量快餐食品。</p>
                                </li>
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
export default  CssConcept;