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
class  HtmlBasic extends Component {
    render(){
        return (
            <Layout style={{marginLeft:200}}>
                <Header style={{ background: '#fff', padding: 0,paddingLeft:20 ,fontSize:20,fontWeight:900}} >
                    <h2> HTML基础</h2>
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'inherit'}}>
                    <div style={{padding:24,backgroundColor:'#fff',height: ' calc(100vh - 160px)',overflowY:'auto'}}>
                        <Timeline>
                            <Timeline.Item>
                                <h3>什么是html</h3>
                                <p>超文本标记语言（HyperText Markup language）,是 网页浏览器中看到展示信息 设计的一种标记语言</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <h3>Doctype含义</h3>
                                <p>声明位于位于HTML文档中的第一行，告诉浏览器的解释器用什么文档标准来解析这个文档。</p>
                                <p>DOCTYPE书写错误或者不存在会导致文档已兼容模式呈现。</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <h3>标准模式和混杂模式</h3>
                                <p>标准模式：html排版和js渲染工作模式都是以该浏览器支持的最高标准运行。</p>
                                <p>兼容模式：页面已宽松的向后兼容的方式显示，模拟老浏览器的行为。</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <h3>HTML5 为什么只需要写" &lt;!DOCTYPE HTML&gt;"</h3>
                                <p> html5不是基于SGML,所以不需要对DTD进行引用，但是它需要对文档类型声明，需要doctype来规范浏览器行为。</p>
                                <p className="annotation">
                                SGML是指“标准通用标记语言”(Standard Generalized Markup Language), 是1986年出版发布的一个信息管理方面的国际标准(ISO 8879)，它是国际上定义电子文件结构和内容描述的标准，是一种非常复杂的文档的结构，主要用于大量高度结构化数据的防卫区和其他各种工业领域，利于分类和索引。SGML规定了在文档中嵌入描述标记的标准格式，指定了描述文档结构的标准方法，目前在WEB上使用的HTML格式便是使用固定标签集的一种SGML文档。由于SGML可以支持无数的文档结构类型，并且可以创建与特定的软硬件无关的文档，因此很容易与使用不同计算机系统的用户交换文档。同XML相比，定义的功能很强大，缺点是它不适用于Web数据描述，而且SGML软件价格非常价格昂贵！
                                </p>
                            </Timeline.Item>
                            <Timeline.Item>
                                    <h3>行内元素-块级元素-空元素</h3>
                                    <p>css中规定每个元素都有默认的display属性和值 ：</p>
                                    <ul>
                                        <li>该元素的属性的值为‘inline’的则为行内元素（如:span,a img,input等）</li>
                                        <li>该元素的属性的值为‘block’的则为块级元素（div，ul,li h1...p等）</li>
                                        <li>空（void）元素 &lt;br> &lt;hr> &lt;img>&lt;input> &lt;link>&lt;meta> 等</li>
                                    </ul>
                            </Timeline.Item>
                            <Timeline.Item>
                                <p>html语义化</p>
                                <ol>
                                    <li>定义：正确的标签做正确的事情</li>
                                    <li>为什么要做语义化
                                        <ul>
                                            <li>有利于SEO，有利于搜索引擎爬虫更好的理解我们的网页，从而获取更多的有效信息，提升网页的权重。</li>
                                            <li>在没有CSS的时候能够清晰的看出网页的结构，增强可读性，便于团队开发和维护。</li>
                                            <li>支持多终端设备的浏览器渲染。</li>
                                        </ul>
                                    </li>
                                    <li>SEO
                                        <ul>
                                            <li>汉译为搜索引擎优化。是一种方式：利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。</li>
                                            <li>目的： 为网站提供生态式的自我营销解决方案，让其在行业内占据领先地位，获得品牌收益；SEO包含站外SEO和站内SEO两方面；为了从搜索引擎中获得更多的免费流量，从网站结构、内容建设方案、用户互动传播、页面等角度进行合理规划，还会使搜索引擎中显示的网站相关信息对用户来说更具有吸引力。</li>
                                            <li>优化方式：
                                                <ul>
                                                    <li>内部优化：
                                                        <p>a.META标签优化：例如：TITLE，KEYWORDS，DESCRIPTION等的优化。</p>
                                                        <p>b.内部链接的优化，包括相关性链接（Tag标签），锚文本链接，各导航链接，及图片链接。</p>
                                                        <p>c.网站内容更新：每天保持站内的更新(主要是文章的更新等)。</p>
                                                    </li>
                                                    <li>
                                                        外部优化：
                                                        <p>a.外部链接类别：友情链接、博客、论坛、B2B、新闻、分类信息、贴吧、知道、百科、站群、相关信息网等尽量保持链接的多样性。</p>
                                                        <p>b.外链运营：每天添加一定数量的外部链接，使关键词排名稳定提升。</p>
                                                        <p>c.外链选择：与一些和你网站相关性比较高,整体质量比较好的网站交换友情链接,巩固稳定关键词排名。</p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </Timeline.Item>
                            <Timeline.Item>
                                    <h3>同源策略</h3>
                                    <ol>
                                        <li>概念：域名、协议、端口（80端口可省略不写）都相同。内部表单不受此限制</li>
                                        <li>目的：保证用户信息安全，防止恶意网站窃取数据，防止cookie共享</li>
                                        <li>同源策略限制对象：
                                            <ul>
                                                <li>cookie、localStorage、indexedDB无法读取</li>
                                                <li>dom 无法获取</li>
                                                <li>ajax不能发送</li>
                                            </ul>
                                        </li>
                                        <li>如何设置同源策略
                                            <ol>
                                                <li>在  test.xxx.com	a.html   设置：
                                                    <pre>
                                                        document.domain = "xxx.com"//设置同源策略 <br/>
                                                        document.cookie = "test1=hello"
                                                    </pre>
                                                </li>
                                                <li>在 test2.xxx.com	b.html 设置：
                                                    <pre>
                                                        document.cookie  //取得 a.html 中的test1
                                                    </pre>
                                                </li>
                                            </ol>
                                        </li>
                                        <li>前端跨域的几种方式
                                            <ol>
                                                <li>img标签</li>
                                                <li>iframe标签</li>
                                                <li>script标签</li>
                                                <li>link标签  background属性的 url </li>
                                                <li>Jsonp:
                                                    <p>原理：网页添加一个&lt;script>元素，向服务器请求JSON数据。服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。</p>
                                                    <ul>
                                                        <li>缺点只支持get请求</li>
                                                        <li>优点简单方便，易理解，兼容性良好</li>
                                                        <li>代码如下
                                                            <Code source="
                                                            ```js
                                                             //动态创建script，用于跨越操作
                                                             function creatScriptTag(src) {
                                                               var script = document.createElement('script');
                                                               script.setAttribute('type','text/javascript');
                                                               script.src = src;
                                                               document.body.appendChild(script);
                                                             }
                                                             // 调用creatScriptTag函数
                                                             window.onload = function () {
                                                               var url = '/index.php?jsoncallback=result';
                                                               creatScriptTag(url);
                                                             }
                                                             // 定义回调函数
                                                             function result (data) {
                                                               console.log(data);
                                                             } 
                                                            ```
                                                            ">
                                                            </Code> 
                                                            <Code source="
                                                                ```js
                                                                // index.php 
                                                                <?php
                                                                header('Content-type: application/json');
                                                                //获取回调函数名
                                                                $jsoncallback = htmlspecialchars($_REQUEST ['jsoncallback']);
                                                                //取数据
                                                                $data = [
                                                                  'data'=>'123',
                                                                ];
                                                                $json_data = json_encode(array('code'=>'200','msg'=>'请求成功','data' => $data),JSON_UNESCAPED_UNICODE);
                                                                //输出jsonp格式的数据
                                                                echo $jsoncallback .'(' . $json_data . ')';
                                                                ?>
                                                                ```
                                                            "></Code>  
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>WebSocket:是一种通信协议，使用ws://（非加密）和wss://（加密）作为协议前缀。该协议不实行同源政策，只要服务器设置利用origin字段设置白名单，就可以通过它进行跨源通信。</li>
                                                <li>CORS（Cross-Origin Resource Sharing） 通用方式  需要后台配合
                                                    <ul>
                                                        <li>在请求头信息中增加Origin字段，用来说明此次请求来自那个源（协议+域名+端口），此字段可以设置相应白名单</li>
                                                        <li>必须设置Access-Control-Allow-Origin字段，值要求是Origin字段的值或者是*，*的意思是接受任意域名的请求</li>
                                                        <li>CORS请求默认不发送cookie和http认证信息，如果要发送，要在服务器端指Access-Control-Allow-Credentials: true,并且ajax请求必须打开withCredentials属性
                                                            <pre>
                                                                <Code source="
                                                                    ```js
                                                                    var xhr = new XMLHttpRequest();
                                                                    xhr.withCredentials = true; 
                                                                    ```
                                                                "></Code>
                                                            </pre>
                                                        </li>
                                                        <li>如果选择发送cookie,Access-Control-Allow-Origin字段不能设为*，必须指定明确的，与当前网页一致的域名</li>
                                                    </ul>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                            </Timeline.Item>
                            <Timeline.Item>
                                <h3>Sublime编辑器</h3>
                                <p>beautiful 主题：seti-ui,material-ui </p>
                                <p>sexy 字体：Comic Sans MS</p>
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
export default  HtmlBasic;