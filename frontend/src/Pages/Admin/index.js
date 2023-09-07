import { Card, Space, Statistic, Table, Typography } from "antd";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue, salseData} from "../../API";
import {Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";
function Admin(){
    return(
        <>
   <Space size={15} direction="vertical">
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
      <Space direction="horizontal" size={40}>
    <RecentOrders itype="Private"/>
    <RecentOrders itype="Government"/>
    </Space>
    <Space >
      <Ff/>
    </Space>
    </Space>
        </>
    )
}

function Ff(){
  const data =[
    { year: 2012, dropouts: 35 }, { year: 2013, dropouts: 28 },
    { year: 2014, dropouts: 34 }, { year: 2015, dropouts: 32 },
    { year: 2016, dropouts: 40 }, { year: 2017, dropouts: 32 },
    { year: 2018, dropouts: 35 }, { year: 2019, dropouts: 55 },
    { year: 2020, dropouts: 38 }, { year: 2021, dropouts: 30 },
    { year: 2022, dropouts: 25 }, { year: 2023, dropouts: 32 }
];
const primaryyAxis = { labelFormat: '${value}K' };
const primaryxAxis = { valueType: 'Category' };
const legendSettings = { visible: true };
const marker = { dataLabel: { visible: true } };
return (
  <div style={{backgroundColor:"white", borderRadius:"10px"}}>
<ChartComponent style={{width:"89vw"}} id="charts" primaryXAxis={primaryxAxis}  title='Dropout Analysis'>
<Inject services={[ColumnSeries, Tooltip, LineSeries, Category]}/>
<SeriesCollectionDirective >
  <SeriesDirective dataSource={data} xName='year' yName='dropouts' name='Dropouts'/>
</SeriesCollectionDirective>
</ChartComponent>
</div>
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