import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  TableOutlined
} from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
              <h3>{this.state.collapsed ? 'MR' : 'MasterReact'}</h3>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
            <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="/tables" icon={<TableOutlined />}>
              <Link to='/tables'>Tables</Link>
            </Menu.Item>

            <Menu.Item key="/forms" icon={<VideoCameraOutlined />}>
              <Link to='/forms'>Forms</Link>
            </Menu.Item>

            <Menu.Item key="/todolist" icon={<VideoCameraOutlined />}>
              <Link to='/todolist'>TodoList</Link>
            </Menu.Item>

            <Menu.Item key="/api" icon={<VideoCameraOutlined />}>
              <Link to='/api'>API</Link>
            </Menu.Item>
           
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 , textAlign : 'left' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
       
       
          <Content
            className="site-layout-background"
            
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard