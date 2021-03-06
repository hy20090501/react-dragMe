import React from 'react'
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import DragMe from './libs/react-dragme/src/';
// import DragMe from 'react-dragme';

const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            dragList: [
                {
                    key: "1",
                    x: 50,
                    y: 0,
                    draggable: true
                },
                {
                    key: "2",
                    x: 0,
                    y: 80,
                    draggable: true
                },
                {
                    key: "3",
                    x: 100,
                    y: 130,
                    draggable: false
                }
            ]
        }; 
    }
    handleClick() {
        console.log(this.state)
    }
    render() {
        const dragMeProps = { dragList: this.state.dragList, minHeight: "600px", height: "600px" };
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px'}}>
                    <div style={{ background: '#fff', padding: 25 }}>
                        <DragMe { ...dragMeProps }>
                            <span 
                                style = {{
                                    display: "inline-block",
                                    color: "#666666",
                                    width: "60px",
                                    height: "30px",
                                    background: "yellow",
                                    lineHeight: "30px",
                                    textAlign: "center"
                                }}
                            >drag me 1</span>
                            <span 
                                style = {{
                                    display: "inline-block",
                                    color: "#666666",
                                    width: "60px",
                                    height: "30px",
                                    background: "yellow",
                                    lineHeight: "30px",
                                    textAlign: "center"
                                }}
                            >drag me 2</span>
                            <div
                                style = {{
                                    color: "#ffffff",
                                    width: "60px",
                                    height: "30px",
                                    background: "red",
                                    lineHeight: "30px",
                                    textAlign: "center"
                                }}
                            >stay here</div>
                        </DragMe>
                        <div onClick={ (e)=>this.handleClick(e) }>get state</div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('content'));