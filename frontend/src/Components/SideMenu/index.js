import { Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function SideMenu(){
   const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  const styleoption = {height:"100px", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",padding:"10px" ,position:"sticky", left:"0", top:"0", backgroundColor:"white", zIndex:"1"}
    return(
        <div className="SideMenu">
          
            <Menu 
            className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            style:styleoption,
            label: "Overview",
            icon: <AppstoreOutlined style={{fontSize:50}}/>,
            key: "/",
          },
          {
            style:styleoption,
            label: "Dropout",
            key: "/dropout",
            icon: <ShopOutlined style={{fontSize:30}}/>,
          },
          {
            style:styleoption,
            label: "Policy",
            key: "/policy",
            icon: <ShoppingCartOutlined style={{fontSize:30}}/>,
          },
          {
            style:styleoption,
            label: "Institute",
            key: "/institute",
            icon: <UserOutlined style={{fontSize:30}}/>,
          },
          {
            style:styleoption,
            label: "Admin",
            key: "/admin",
            icon: <UserOutlined style={{fontSize:30}}/>,
          },
          {
            style:styleoption,
            label: "Feedback",
            key: "/feedback",
            icon: <UserOutlined style={{fontSize:30}}/>,
          },
        ]}
      ></Menu>
        </div>
    )
}

export default SideMenu;