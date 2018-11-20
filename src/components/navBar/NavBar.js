import { Icon, Input, Menu } from "antd";
import React from "react";
import { Link } from "gatsby";

import * as routes from "../../constant/routes";
import { NavBarStyle } from "./NavBar.style";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;



class NavBar extends React.Component {
  state = {
    current: true
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };


  render() {
    return (
      <NavBarStyle
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to={routes.HOME}><Icon type="appstore"/>Home</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to={routes.ABOUT}><Icon type="appstore"/>About Us</Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Link to="/contact"><Icon type="mail"/>Contact Us</Link>
        </Menu.Item>
        <SubMenu
          title={<span className="submenu-title-wrapper"><Icon type="setting"/>Products</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item><Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: "200px", marginTop: "15px" }}
        /></Menu.Item>
      </NavBarStyle>
    );
  }
}

export default NavBar;
