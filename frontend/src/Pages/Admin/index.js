import { Card, Space, Statistic, Table, Typography } from "antd";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue, salseData} from "../../API";
import Chart from "react-apexcharts";
function Admin(){
    return(
        <>
   <Space size={35} direction="vertical">
      <Typography.Title level={6}>Admin - Dashboard</Typography.Title>
      <Space direction="horizontal" size={35} block>
        <DashboardCard
        
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"School Registered"}
          value={1489115}
        />
        <DashboardCard
        size={100}
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Government School"}
          value={123456}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Private School"}
          value={123456}
        />
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Total Dropouts"}
          value={123456}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
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
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Female Dropouts"}
          value={123456}
        />
      </Space>
      <BarChart/>
      <Space direction="horizontal" size={40}>
    <RecentOrders itype="Private"/>
    <RecentOrders itype="Government"/>
    </Space>
    <Space direction="horizontal" size={40}>
      <LineChart/>
      <LineChart/>
    </Space>
    </Space>
        </>
    )
}

function BarChart(){
  const[state,setState]=useState({
    
    colors: ['FF7D17','FF7D17'],
    options: {
    chart: {
      id: "basic-bar",
      background: '#ffffff',
      title: {
        text: 'Dropouts',
        align: 'left',
    }
    },
    xaxis: {
      categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
    }
  },
  series: [
    {
      name: "Government",
      data: [3000, 4000, 4500, 5000, 4900, 6000, 7000, 9100]
    },
    {
      name: "Private",
      data: [3500, 3200, 6745, 8150, 4349, 5260, 7870, 6591]
    }
  ]});

  return(
    <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="1370px"
              height="500px"
            />
  );
}

function LineChart(){
  const[state,setState]=useState({
    title: {
      text: 'Dynamic Updating Chart',
      align: 'left',
      color:'#000000',
    },
    colors: ['FF7D17','FF7D17'],
    options: {
    chart: {
      id: "basic-bar",
      background: '#ffffff'
    },
    xaxis: {
      categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
    }
  },
  series: [
    {
      name: "Boys",
      data: [3000, 4000, 4500, 5000, 4900, 6000, 7000, 9100]
    },
    {
      name: "Girls",
      data: [3500, 3200, 6745, 8150, 4349, 5260, 7870, 6591]
    }
  ]});

  return(
    <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="665px"
              height="500px"
            />
  );
}
function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders(props) {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>{props.itype} School</Typography.Text>
      <Table style={{width: 665}}
        columns={[
          {
            title: "School Name",
            dataIndex: "title",
          },
          {
            title: "Dropout",
            dataIndex: "quantity",
          },
          {
            title: "District",
            dataIndex: "district",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

export default Admin;