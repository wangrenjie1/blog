import React,{Component } from 'react';
import ReactDOM from 'react-dom';
import Code from 'react-markdown/with-html';
import reanImg from '../images/rean.png';
import {
    Layout,
    Menu,
    Icon,
    Timeline,
    Row,Col,
    Card 
} from 'antd';
const {
    Header, Footer, Sider, Content,
  } = Layout;
const {Meta} = Card; 
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
                               <li>设计原则：Separate structure and skin 表现与结构分离，Separate container and content 容器与内容分离</li>
                               <li>用途：创建可复用的CSS模块以提高性能</li>
                               <li>提高团队开发效率，减少耦合</li>
                               <li>
                                   <p>举例说明</p>
                                   <Row>
                                       <Col span={12}>
                                            <Code source={
                                                `
    <div class="media media-shadow">
        <div class="media-image-container">
            <img class="media-image" src="rean.jpg" alt="">
        </div>
        <div class="media-body">
            <p class="media-text">本作的主角，帝国北部地方贵族施瓦泽男爵的养子，
            也是托尔兹士官学校特科班“Ⅶ组”的成员。</p>
        </div>
    </div>     
    -------------------------
    .media{
        padding: 10px;
    }
    .media:after{
        display: table;
        clear: both;
        content: " ";
    }
    .media-image-container{
        float: left;
        margin-right: 10px;
    }
    .media-image{
        display: block;
    }
    .media-body{
        overflow: hidden;
    }
    .media-shadow{
        box-shadow: 1px 1px 3px rgba(0, 0, 0, .5);
    }
                                                `
                                            }></Code>

                                       </Col>
                                       <Col span={12}>
                                            <Card
                                                hoverable
                                                bordered={false}
                                                cover={<img src={reanImg}/>}
                                               type="inner"
                                            >
                                                <p> 这个例子中用media表示了这种图文排列的页面元素。如果把架构它的html、css以及javascript看作一个整体，那就相当于这是一个元件，或者说对象。它可以在站点的任何地方被重用。</p>
                                                <h3>结构与表现的分离如何提现</h3>
                                                <p>分离结构和主题是在于将一些视觉样式效果（例如background、color）作为单独的“主题”来应用。在上面的例子中的阴影效果，没有被直接写在media的样式规则内，而是被单独写在了一个名为media-shadow的class中。因此，它成为了可选择、可拆分的主题。如果不需要对应主题，什么也不要加，如果需要，加上对应的class，就是这样的思路。</p>
                                                <h3>结构与内容的分离如何提现</h3>
                                                <p>分离容器和内容要求使页面元素不依赖于其所处位置。在上面的例子中，css的选择符都很短，无继承选择符（例如.header  .media ），所以，这个图文排列的元件，可以在任何地方使用，且会有一致的外观。如果需要在特定的地方让这个元件看起来不一样一些，继续为这个元件增加class，将“不一样的部分”作为可配置的选项。元件的外观仍不依赖其所处位置。</p>
                                                <h3>操作指南</h3>
                                                <p>可以看出，OOCSS风格的css可以描述为两点</p>
                                                <ul>
                                                    <li>增加class</li>
                                                    <li>不使用继承选择符</li>
                                                </ul>
                                                <p>OOCSS追求元件的复用，其class命名比较抽象，一般不体现具体内容。</p>
                                            </Card>
                                       </Col>
                                   </Row>
                               </li>
                           </ol>
                           
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>SMACSS</h3>
                            <ol>
                                <li>定义：可扩展的模块化架构的CSS</li>
                                <li>
                                    <p>设计原则:</p>
                                    <ol type="i">
                                        <li>
                                            <h3>Categorizing CSS Rules（为css分类）</h3> 
                                            <p>这一点是SMACSS的核心。SMACSS认为css有5个类别，分别是：</p>
                                            <Row gutter={16}>
                                                <Col span={8}>
                                                    <Card title="Base Rules， 基础样式"  >描述的是任何场合下，页面元素的默认外观。它的定义不会用到class和ID。css reset也属于此类。</Card>
                                                </Col>
                                                <Col span={8}>
                                                    <Card title="Layout Rules， 布局样式">它和后面的Module Rules一同，描述的是页面中的各类具体元素。元素是有层次级别之分的，Layout Rules属于较高的一层，它可以作为层级较低的Module Rules元素的容器。左右分栏、栅格系统等都属于布局样式</Card>
                                                </Col>
                                                <Col span={8}>
                                                    <Card title="Module Rules， 模块样式">它可以是一个产品列表，一个导航条。一般来说，Module Rules定义的元素放置于前面说的Layout Rules元素之内。模块是独立的，可以在各种场合重用。</Card>
                                                </Col>
                                            </Row>
                                            <Row gutter={16}>
                                                <Col span={8}>
                                                    <Card title="State Rules， 状态样式">描述的是任一元素在特定状态下的外观。例如，一个消息框可能有success和error两种状态，导航条中的任一项都可能有current状态。</Card>
                                                </Col>
                                                <Col span={8}>
                                                    <Card title="Theme Rules， 主题样式">描述了页面主题外观，一般是指颜色、背景图。Theme Rules可以修改前面4个类别的样式，且应和前面4个类别分离开来（便于切换，也就是“换肤”）。SMACSS的Theme Rules不要求使用单独的class命名，也就是说，你可以在Module Rules中定义.mod { }然后在Theme Rules中也用.mod { }来定义需要修改的部分。</Card>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={12}>
                                                    <Code source={
                                                        `
    .product-details {}
    .product-details__header {}
    .product-details__header--ico {}

    <div class="product-details">
        <div class="product-details__header">
            <div class="product-details__header--ico"><div> 
        </div>
    </div>
                                                        `
                                                    }></Code>
                                                </Col>
                                            </Row>
                                        </li>
                                        <li>
                                            <h3>Naming Rules（命名规则）</h3>
                                            <p>Naming Rules是说在想class等的命名时，考虑用命名体现样式对应的类别。</p>
                                            <p>按照前面5种的划分，Layout Rules用l-或layout-这样的前缀，例如：.l-header、.l-sidebar。</p>
                                            <p>Module Rules用模块本身的命名，例如图文排列的.media、.media-image。</p>
                                            <p>State Rules用is-前缀，例如：.is-active、.is-hidden。</p>
                                            <p>Theme Rules如果作为单独class，用theme-前缀，例如.theme-a-background、.theme-a-shadow。</p>
                                            <p>Base Rules不会用到class和ID，是以标签选择符为主的样式，例如p、a，无需命名。</p>
                                            <p>命名规则不需要严格遵守，可以根据实际情况和自身喜好做其他的约定。记录自己的约定（写文档），然后遵守，就是可行的。</p>
                                        </li>
                                        <li>
                                            <h3>Minimizing the Depth of Applicability（最小化适配深度）</h3>
                                            <p>字面翻译是最小化适配深度。通过一个简单的描述来说明：</p>
                                            <Code source={
                                             `
    /* depth 1 */
    .sidebar ul h3 { }
    
    /* depth 2 */
    .sub-title { } 
                                             `   
                                            }></Code>
                                            <p>上下两端css的区别在于html和css的耦合度。可以想到，由于上面的样式规则使用了继承选择符，因此对于html的结构实际是有一定依赖的。如果把h3元素搬到另一个位置，就有可能不再具有这些样式。对应的，下面的样式规则只有一个选择符，因此不依赖于特定html结构，只要为元素添加class，就可以获得对应样式。</p>
                                            <p>当然，继承选择符是有用的，它可以减少因相同命名引发的样式冲突（常发生于多人协作开发）。但是，我们不应过度使用，在不造成样式冲突的允许范围之内，尽可能使用短的、不限定html结构的选择符。这就是SMACSS的最小化适配深度的意义。</p>
                                            <p>看起来，这一点和OOCSS的分离容器和内容的原则非常相似。</p>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <h3>主要设计目标</h3>
                                    <ul>
                                        <li>更语义化的html和css</li>
                                        <li>降低对特定html结构的依赖</li>
                                    </ul>
                                </li>
                            </ol>
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