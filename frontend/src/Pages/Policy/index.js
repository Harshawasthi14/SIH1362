import React, { useState } from "react";
import "./index.css";
import { Card, Space } from "antd";
const { Meta } = Card;
const DropoutPolicy = () => {
  const [isDropout, setIsDropout] = useState(false);
  const handleDropout = () => {
    setIsDropout(true);
  };

  return (
    <div style={{ marginTop: 15 }}>
      <div className="line">
        <span>Policy</span>
      </div>
      <div className="dropout-policy">
        <Space direction="vertical" size={40} style={{width:'75vw', margin: '0 auto'}}>
          <h1>Education Projects and Initatives</h1>

          <section className="Card">
            <Space direction="horizontal" size={60}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://gujaratindia.gov.in/images/education-initative.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://digitallearning.eletsonline.com/wp-content/uploads/2020/04/Gujarat-govt.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://resize.indiatvnews.com/en/resize/oldbucket/730_-/mainnational/IndiaTv2c1a35_gujaratschool.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://gujaratindia.gov.in/images/education-initative.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Space>
          </section>
          <section className="Card">
            <Space direction="horizontal" size={60}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://gujaratindia.gov.in/images/education-initative.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://gujaratindia.gov.in/images/education-initative.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://gujaratindia.gov.in/images/education-initative.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://gujaratindia.gov.in/images/education-initative.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Space>
          </section>
          <section className="Card">
            <Space direction="horizontal" size={60}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://gujaratindia.gov.in/images/education-initative.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://gujaratindia.gov.in/images/education-initative.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://gujaratindia.gov.in/images/education-initative.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://gujaratindia.gov.in/images/education-initative.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Space>
          </section>
          <div>
            <p>
              ‘Smart Goals’ with a future vision 'Education for All' is a major
              Project of the Education Department with its Continuous Education
              and Literacy Policies geared to promote Literacy, reduce drop out
              rates, Focus on Girl Education, Teachers’ Training and a series of
              other Initiatives being implemented.
            </p>
            <p>
              Girl Education, Infrastructure, Health and Sanitation are the many
              areas in the process of continuous Education, Literacy, Edu
              Awareness and on path to enhancement in quality implementation.
              The Government vision is for SEE (Socio-Economic-Education) growth
              with primary education, secondary education, higher education,
              continuous education, literacy education, technical education,
              pharmacy education etc.
            </p>
            <p>
              The focus is on Concentration of plan and non-plan provisions and
              best use of investments made in education sector and the purpose
              of development. It aims for UEE (universalisation of primary
              education) for children in age group 6 to 14 years with specific
              planning, target setting and power initiative key role to 100%
              male and female literacy by 2010.
            </p>
            <p>
              The Campaign for ‘Education for All’ is implemented with Literacy
              initiatives like Training to 9000 teachers, covering all the
              students of Standards 4 and 7 under student Achievement profile,
              Extra coaching to girls studying in standards 2,3,4 and 5 in
              12,500 schools to upgrade level by 10 to 15% in Gujarati and
              Arithmetic . It aims for increase in capability by 5 to 10% in
              writing, reading and calculating by students of standard-3.{" "}
            </p>
            <section>
              <ul>
                <li>
                  <strong>Academic Performance:</strong> A student may be
                  dropped from a course or program if their academic performance
                  falls below the minimum standards set by the institution.
                </li>
                <li>
                  <strong>Attendance:</strong> A student may be dropped from a
                  course or program if they fail to attend class regularly.
                </li>
                <li>
                  <strong>Misconduct:</strong> A student may be dropped from a
                  course or program if they engage in misconduct, such as
                  cheating or plagiarism.
                </li>
              </ul>
              <p>
                A student who is dropped from a course or program will be
                notified in writing by the institution. The student will have
                the opportunity to appeal the decision.
              </p>
            </section>

            <section id="drop">
              <button onClick={handleDropout}>Dropout-Analysis</button>
            </section>
          </div>
        </Space>
      </div>
    </div>
  );
};
export default DropoutPolicy;
