import { Image , Typography, Space, Badge} from "antd";
import { FacebookOutlined, MailOutlined,InstagramOutlined } from "@ant-design/icons";
import logo from "./logo.png"
function AppHeader(){
    return(
        <div className="AppHeader">
            <Image width={50} src={logo}></Image>
            <Typography.Title>SIH - 1362</Typography.Title>
            <Space>
                <MailOutlined style={{fontSize:24}}/>
                <InstagramOutlined style={{fontSize:23}}/>
                <FacebookOutlined style={{fontSize:23}} />
            </Space>
        </div>
    )
}

export default AppHeader;