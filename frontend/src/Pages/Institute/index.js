import { Card, Space, Statistic, Table, Typography, Col, Row } from "antd";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./index.css";
import { Divider, Steps, Form, Input, Button, Radio, Select, Upload} from "antd";
import {
  ProfileFilled,
  FileTextFilled,
  CheckCircleFilled,
  UploadOutlined,
} from "@ant-design/icons";

export default function Institute() {
  return (
    <div className="institute" style={{ marginTop: 15 }}>
      <div className="line">
        <span>Institute Dashboard</span>
      </div>
      <Space direction="vertical" size={20}>
        <HeadData />
        <Space direction="horizontal" size={15} block>
          <Ss />
          <div
            style={{
              background: "rgba(31, 41, 55, 1)",
              borderRadius: 20,
              height: 280,
              width: 932,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <YearDropouts />
          </div>
        </Space>
        <Divider style={{fontSize:'15px'}} plain>Institute Dropout Form</Divider>
        <div className="dropoutForm">
          <DropoutForm />
        </div>
      </Space>
    </div>
  );
}

function DropoutForm() {
  const [current, setCurrent] = useState(0);
  const [loginDetails, setLoginDetails] = useState(null);
  const [documentUpload, setDocumentUpload] = useState(null);
  const onFinishLoginForm = (values) => {
    setLoginDetails(values);
    setCurrent(1);
  };
  const onFinishDocumentUpload = (values) => {
    setDocumentUpload(values);
    setCurrent(2);
  };
  const onFinish = () => {
    setCurrent(0);
  };
  const forms = [
    <PersonalDetails onFinish={onFinishLoginForm} initialValues={loginDetails}/>,
    <Document onFinish={onFinishDocumentUpload} initialValues={documentUpload}/>,
    <Finish onFinish={onFinish}/>,
  ];
  const isStepDisabled = (step) => {
    if (step === 0 ) {
      return false;
    }
    if (step === 1 ) {
      return loginDetails === null;
    }
    if (step === 2 ) {
      return documentUpload === null || loginDetails === null;
    }
  };
  return (
    <>
      <Steps
        className="dropoutFormstep"
        onChange={setCurrent}
        current={current}
      >
        <Steps.Step disabled={isStepDisabled(0)}title="Student Detail" icon={<ProfileFilled style={{color:'white' ,fontSize:'35px'}}/>} />
        <Steps.Step disabled={isStepDisabled(1)} title="Document upload" icon={<FileTextFilled style={{color:'white' ,fontSize:'35px'}}/>} />
        <Steps.Step disabled={isStepDisabled(2)} title="Finish" icon={<CheckCircleFilled style={{color:'white' ,fontSize:'35px'}}/>} />
      </Steps>
      {forms[current]}
    </>
  );
}

function Finish({onFinish, initialValues}){
  return(
    <div style={{color:"green", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <h1>Successfully Uploaded!</h1>
      <Button type="primary" htmlType="submit" onClick={onFinish}>Finish</Button>
    </div>
  )
}

function Document({onFinish, initialValues}) {
  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Form onFinish={onFinish} initialValues={initialValues}>
      <Form.Item
        label="Adhar Number"
        name={"adharnumber"}
        rules={[
          {
            required: true,
            message: "Please enter your adhar number",
          },
        ]}
      >
        <Input type= "number"/>
      </Form.Item>
      <Form.Item label="Adhar Card" name={"adharcard"}>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}></Button>
        </Upload>
      </Form.Item>
      <Form.Item label="Last standard passing certificate" name={"passingcertificate"}>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}></Button>
        </Upload>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Next
      </Button>
    </Form>
  );
}

function PersonalDetails({onFinish, initialValues}) {
  return (
    <Form onFinish={onFinish} initialValues={initialValues}>
      <Form.Item
        label="Name"
        name={"name"}
        rules={[
          {
            required: true,
            message: "Please input your name",
            type: "string",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name={"email"}
        rules={[
          {
            required: true,
            message: "Please input your email",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name={"phone"}
      >
        <Input type="number"/>
      </Form.Item>
      <Form.Item
        label="Address"
        name={"address"}
        rules={[
          {
            required: true,
            message: "Please input your address",
            type: "string",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Gender"
        name={"gender"}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group>
          <Radio value={1}>Male</Radio>
          <Radio value={2}>Female</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Caste"
        name={"caste"}
      >
        <Select
          defaultValue="General"
          style={{
            width: 200,
          }}
          options={[
            {
              label: "Caste",
              options: [
                {
                  label: "General",
                  value: "general",
                },
                {
                  label: "EWS",
                  value: "ews",
                },
                {
                  label: "OBC",
                  value: "obc",
                },
                {
                  label: "SC",
                  value: "sc",
                },
                {
                  label: "ST",
                  value: "st",
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Next
      </Button>
    </Form>
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
        data: [31, 40, 28, 51, 42, 109, 100, 110, 120],
      },
      {
        name: "Male Dropouts",
        data: [11, 32, 45, 32, 34, 52, 41, 51, 61],
      },
      {
        name: "Female Dropouts",
        data: [15, 25, 35, 24, 21, 22, 51, 41, 61],
      },
    ],
    title: {
      text: "Dropouts",
      align: "left",
      style: {
        fontSize: "16px",
        color: "rgba(196, 181, 253, 1)",
      },
    },
    options: {
      fill: {
        colors: ["rgba(139, 92, 246, 1)", "rgba(196, 181, 253, 1)", "#2E93fA"],
      },
      chart: {
        height: 350,
        type: "area",
        style: {
          color: "#ffffff",
        },
      },
      colors: ["rgba(139, 92, 246, 1)", "rgba(196, 181, 253, 1)", "#2E93fA"],
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
      legend: {
        labels: {
          colors: ["#ffffff", "#ffffff", "#ffffff"],
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
        style={{ color: "#ffffff" }}
      />
    </div>
  );
}
