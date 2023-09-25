import "./index.css";
import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
export default function Overview() {
  return <Home />;
}

function Home() {
  return (
    <>
      <div className="home">
        <div className="one">
          <Space className="spaceCard" direction="horizontal" size={30}>
            <Caard
              headone={"Number of"}
              headtwo={"Schools"}
              Typeone={"Government"}
              Typetwo={"Private"}
              totalone={1.54}
              totaltwo={"1.32"}
            />
            <Caard
              headone={"Number of"}
              headtwo={"Students"}
              Typeone={"Female"}
              Typetwo={"Male"}
              totalone={1.54}
              totaltwo={"1.32"}
            />
            <Caard
              headone={"Number of"}
              headtwo={"Dropouts"}
              Typeone={"Female"}
              Typetwo={"Male"}
              totalone={1.54}
              totaltwo={"1.32"}
            />
          </Space>
        </div>
        <div className="two"></div>
      </div>
    </>
  );
}

function Caard(props) {
  return (
    <>
      <div style={{ height: "50vh", width: "25vw", borderRadius: "20px" }}>
        <div
          className="head"
          style={{
            backgroundColor: "white",
            height: "21vh",
            borderRadius: "20px 20px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Space direction="horizontal" style={{ fontSize: "25px" }} size={100}>
            <span>
              {props.headone}
              <p>{props.headtwo}</p>
            </span>
            <Avatar shape="square" size={100} icon={<UserOutlined />} />
          </Space>
        </div>
        <div
          className="type"
          style={{
            backgroundColor: "rgba(0, 126, 165, 1)",
            height: "8vh",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Space direction="horizontal" style={{ fontSize: "25px" }} size={100}>
            <span>{props.Typeone}</span>
            <span>{props.Typetwo}</span>
          </Space>
        </div>
        <div
          className="total"
          style={{
            backgroundColor: "rgba(0, 175, 199, 1)",
            height: "14vh",
            borderRadius: "0 0 20px 20px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Space direction="horizontal" style={{ fontSize: "25px" }} size={100}>
            <span>
              {props.totalone} <p style={{ fontSize: "15px" }}>in Lakhs</p>
            </span>
            <span>
              {props.totaltwo} <p style={{ fontSize: "15px" }}>in Lakhs</p>
            </span>
          </Space>
        </div>
      </div>
    </>
  );
}
