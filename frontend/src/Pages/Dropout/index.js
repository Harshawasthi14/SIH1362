import React from 'react';
import {
  
  UserDeleteOutlined ,
  BankOutlined,

  
}from "@ant-design/icons";
import "./index.css";
import { Card, Space, Statistic, Table, Typography, Col, Row } from "antd";
import { Select } from 'antd';
const { Option } = Select;
export default function Dropout() {
  return ( 
  
    <div className="dropout" style={{ marginTop: 2 }}>
     <h2>Dropout Information</h2>
    <div className="line"></div>
    <Space direction="vertical" size={20}>
      <FirstLine />
      <SecondLine/>
     
      <DropdownList />
    </Space>
  </div>
  );
}

function FirstLine() {
  return (
    <>
      <Space direction="horizontal" size={90} block>
        <DashboardCard
            icon={
              <BankOutlined
                style={{
                  color: "rgba(196, 181, 253, 1)",
                  borderRadius: 20,
                  fontSize: 50,
                  padding: 8,
                }}
              />
            }
          title={"School Registered"}
          value={1489115}
        />
        <DashboardCard
           icon={
            <BankOutlined
              style={{
                color: "rgba(196, 181, 253, 1)",
                borderRadius: 20,
                fontSize: 50,
                padding: 8,
              }}
            />
          }
          backgroundColor="rgba(31, 41, 55, 1)"
          title={"Government Schools"}
          value={1400000}
        />
        <DashboardCard
           icon={
            <BankOutlined
              style={{
                color: "rgba(196, 181, 253, 1)",
                borderRadius: 20,
                fontSize: 50,
                padding: 8,
              }}
            />
          }
          title={"Private Schools"}
          value={89115}
        />
      </Space>
    </>
  );
}
function SecondLine() {
  return (
    <>
      <Space direction="horizontal" size={90} block>
        <DashboardCard
            icon={
              <UserDeleteOutlined
                style={{
                  color: "rgba(196, 181, 253, 1)",
                  borderRadius: 20,
                  fontSize: 50,
                  padding: 8,
                }}
              />
            }
          title={"Total Dropouts"}
          value={1500}
        />
        <DashboardCard
           icon={
            <UserDeleteOutlined
              style={{
                color: "rgba(196, 181, 253, 1)",
                borderRadius: 20,
                fontSize: 50,
                padding: 8,
              }}
            />
          }
          backgroundColor="rgba(31, 41, 55, 1)"
          title={"Male Dropouts"}
          value={700}
        />
        <DashboardCard
           icon={
            <UserDeleteOutlined
              style={{
                color: "rgba(196, 181, 253, 1)",
                borderRadius: 20,
                fontSize: 50,
                padding: 8,
              }}
            />
          }
          title={"Female Dropouts"}
          value={800}
        />
      </Space>
    </>
  );
}
function ThirdLine() {
  return (
    <>
    <div className='info'>
    <h2>District:</h2>
    <h2>Block:</h2>
    <h2>Academic Year:</h2></div>
    </>
  );
}
function DropdownList() {
  return (
    <div className='info'>
    <div className='info1'>
      <h2>District:</h2>
      <Select style={{ width: 200 }}>
 <Option value="Ahmedabad ">Ahmedabadh</Option>
        <Option value="Amreli">Amreli</Option>
        <Option value="Anand">Anand</Option>
        <Option value="Arvalli">Arvalli</Option>
        <Option value="Banaskantha">Banaskantha</Option>
        <Option value="Bharuch">Bharuch</Option>
        <Option value="Bhavnagar">Bhavnagar</Option>
        <Option value="Botad">Botad</Option>
        <Option value="Chota Udaipur">Chota Udaipur</Option>
        <Option value="Dahod">Dahod</Option>
        <Option value="Karnataka">Karnataka</Option>
        <Option value="Kerala">Kerala</Option>
        <Option value="Madhya Pradesh">Madhya Pradesh</Option>
        <Option value="Maharashtra">Maharashtra</Option>
        <Option value="Manipur">Manipur</Option>
        <Option value="Meghalaya">Meghalaya</Option>
        <Option value="Mizoram">Mizoram</Option>
        <Option value="Nagaland">Nagaland</Option>
        <Option value="Odisha">Odisha</Option>
        <Option value="Punjab">Punjab</Option>
        <Option value="Rajasthan">Rajasthan</Option>
        <Option value="Sikkim">Sikkim</Option>
        <Option value="Tamil Nadu">Tamil Nadu</Option>
        <Option value="Telangana">Telangana</Option>
        <Option value="Tripura">Tripura</Option>
        <Option value="Uttar Pradesh">Uttar Pradesh</Option>
        <Option value="Uttarakhand">Uttarakhand</Option>
        <Option value="West Bengal">West Bengal</Option>
    
      </Select>
      </div>
      <div className='info2'>
      <h2>Block:</h2>
      <Select style={{ width: 200 }}></Select>
      </div>
      <div className='info3'><h2>Academic Year:</h2>
      <Select style={{ width: 200 }}></Select>
    </div></div>
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