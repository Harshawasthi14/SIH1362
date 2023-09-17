import background from './main-banner.png'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import banner2 from './banner2.png'
export default function Overview() {
  return (
    <div  style={{ marginTop: 15 }}>
      <div className="line">
        <span>Overview</span>
      </div>
      <div className="background">
        <img src= {background} alt="" />
      <ul>
        <li>
          <div
            className="container"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <div className="top">
              <div className="top-left" style={{ fontSize: 28 }}>
                Number Of
                <div style={{ fontSize: 32, color: "#29a8cd" }}>
                  <b>School</b>
                </div>
              </div>
              <div className="top-right">
                <img src={img1} alt="" />
              </div>
            </div>
            <div style={{ fontSize: 36, color: "#646464", paddingLeft: 12 }}>
              <b>1489115</b>
            </div>
            <div className="mid">
              <div style={{ float: "left" }}>Urban Area</div>{" "}
              <div style={{ float: "right" }}>Rural Area</div>
            </div>
            <div className="bottom">
              <div style={{ float: "left", fontSize: 20 }}>
                <b>2.54</b>
                <div style={{ fontSize: 18, fontWeight: "lighter" }}>Lakhs</div>
              </div>
              <div style={{ float: "right", fontSize: 20 }}>
                {" "}
                <b>12.34 </b>{" "}
                <div style={{ fontSize: 18, fontWeight: 400 }}>Lakhs</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          {" "}
          <div
            className="container"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <div className="top">
              <div className="top-left" style={{ fontSize: 28 }}>
                Number Of
                <div style={{ fontSize: 32, color: "#e49814" }}>
                  <b>Teacher</b>
                </div>
              </div>
              <div className="top-right">
                <img src={img2} alt="" />
              </div>
            </div>
            <div style={{ fontSize: 36, color: "#646464", paddingLeft: 12 }}>
              <b>9507123</b>
            </div>
            <div className="mid2">
              <div style={{ float: "left", paddingLeft: 12 }}> Female</div>{" "}
              <div style={{ float: "right", paddingRight: 20 }}>Male </div>
            </div>
            <div className="bottom2">
              <div style={{ float: "left", fontSize: 20 }}>
                <b>48.76</b>
                <div style={{ fontSize: 18, fontWeight: "lighter" }}>Lakhs</div>
              </div>
              <div style={{ float: "right", fontSize: 20 }}>
                {" "}
                <b>46.30</b>{" "}
                <div style={{ fontSize: 18, fontWeight: 400 }}>Lakhs</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          {" "}
          <div
            className="container"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <div className="top">
              <div className="top-left" style={{ fontSize: 28 }}>
                Number Of
                <div style={{ fontSize: 32, color: "#d14a50" }}>
                  <b>Students</b>
                </div>
              </div>
              <div className="top-right">
                <img src={img3} alt="" />
              </div>
            </div>
            <div style={{ fontSize: 36, color: "#646464", paddingLeft: 12 }}>
              <b>265235830</b>
            </div>
            <div className="mid3">
              <div style={{ float: "left", paddingLeft: 20 }}>Girls</div>{" "}
              <div style={{ float: "right", paddingRight: 20 }}>Boys</div>
            </div>
            <div className="bottom3">
              <div style={{ float: "left", fontSize: 20 }}>
                <b>12.73</b>
                <div style={{ fontSize: 18, fontWeight: "lighter" }}>Lakhs</div>
              </div>
              <div style={{ float: "right", fontSize: 20 }}>
                {" "}
                <b>13.79</b>{" "}
                <div style={{ fontSize: 18, fontWeight: 400 }}>Lakhs</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="banner2">
        <img src={banner2} alt="" />
      </div>
    </div>
    </div>
  );
}
 