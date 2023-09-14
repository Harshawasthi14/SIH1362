import { Card, Space, Statistic, Table, Typography, Col, Row } from "antd";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  getCustomers,
  getInventory,
  getOrders,
  getRevenue,
  salseData,
} from "../../API";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import './index.css';

export default function Institute() {
  return (
    <div className="institute" style={{ marginTop: 15 }}>
      <div className="line"><span>Institute Dashboard</span></div>
      <Space direction="vertical" size={20}>
        <HeadData />
        <Space direction="horizontal" size={15} block>
          <Ss />
          <div style={{background:"rgba(31, 41, 55, 1)", borderRadius:20, height:280, width:932, display:"flex", justifyContent:'center', alignItems:'center'}}><YearDropouts/></div>
        </Space>
      </Space>
    </div>
  );
}

function HeadData() {
  return (
    <>
      <Space direction="horizontal" size={30} block>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "rgba(196, 181, 253, 1)",
                borderRadius: 20,
                fontSize: 50,
                padding: 8,
              }}
            />
          }
          title={"Total Student Registered"}
          value={1489115}
        />
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "rgba(196, 181, 253, 1)",
                borderRadius: 20,
                fontSize: 50,
                padding: 8,
              }}
            />
          }
          backgroundColor="rgba(31, 41, 55, 1)"
          title={"Total Dropouts"}
          value={123456}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "rgba(196, 181, 253, 1)",
                borderRadius: 20,
                fontSize: 50,
                padding: 8,
              }}
            />
          }
          title={"Male Dropouts"}
          value={123456}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "rgba(196, 181, 253, 1)",
                borderRadius: 20,
                fontSize: 50,
                padding: 8,
              }}
            />
          }
          title={"Female Dropouts"}
          value={123456}
        />
      </Space>
    </>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card style={{ width: 322, backgroundColor: "rgba(31, 41, 55, 1)" }}>
      <Space direction="horizontal">
        {icon}
        <Statistic
         className="stats"
            style={{ color: "white" }}
          title={title}
          value={value}
        />
      </Space>
    </Card>
  );
}

function Ss() {
  return (
    <Space direction="vertical" size={20}>
      <Card
        bordered={false}
        style={{ width: 430, backgroundColor: "rgba(31, 41, 55, 1)" }}
      >
        <Statistic
          title="State Dropout Rate"
          style={{ textColor: "#ffffff" }}
          value={11.28}
          precision={2}
          valueStyle={{
            color: "#3f8600",
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>

      <Card
        bordered={false}
        style={{ width: 430, backgroundColor: "rgba(31, 41, 55, 1)" }}
      >
        <Statistic
          title="Institute Dropout Rate"
          value={9.3}
          precision={2}
          valueStyle={{
            color: "#cf1322",
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Space>
  );
}

function YearDropouts() {
  const [state, setState] = useState({
    series: [
      {
        name: "Total Dropouts",
        data: [31, 40, 28, 51, 42, 109, 100, 110,120],
      },
      {
        name: "Male Dropouts",
        data: [11, 32, 45, 32, 34, 52, 41,51,61],
      },
      {
        name: "Female Dropouts",
        data: [15, 25, 35, 24, 21, 22, 51,41,61],
      },
    ],
    title: {
        text: "Dropouts",
        align: "left",
        style: {
            fontSize: "16px",
            color: "rgba(196, 181, 253, 1)"
        }
    },
    options: {
        fill:{
            colors:['rgba(139, 92, 246, 1)','rgba(196, 181, 253, 1)','#2E93fA']
        },
      chart: {
        height: 350,
        type: "area",
        style: {
            color:"#ffffff",
        }
      },
      colors: ['rgba(139, 92, 246, 1)','rgba(196, 181, 253, 1)','#2E93fA'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "year",
        categories: [
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
        ],
      },
      legend:{
            labels:{
                colors:['#ffffff','#ffffff','#ffffff']
            },
      },
      tooltip: {
        x: {
          format: "yyyy",
        },
      },
    },
  });
  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={250}
        width={900}
        style={{color:"#ffffff"}}
      />
    </div>
  );
}
