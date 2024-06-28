import React from "react";
import "./Footer.css";
import { ChevronRight, FileX, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <section>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3" style={{ maxWidth: 300 }}>
              <a href="index.html">
                <img
                  style={{ objectFit: "contain" }}
                  width={260}
                  height={150}
                  src="https://logo-download.com/wp-content/data/images/2021/08/Levi_Strauss__Co.-Logo.png"
                  alt=""
                  className="img-fluid logo-footer"
                />
              </a>
              <div className="footer-about">
                <p style={{ margin: 0, color: "#817c7c" }}>
                  Lorem Ipsum is simply dumm Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </div>
              <div className="social-links">
                <h2>Follow Us</h2>
                <div className="social-icons">
                  <li>
                    <a
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                      href="index.html"
                    >
                      {" "}
                      <Instagram size={14} color={"#817c7c"} /> Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                      href="index.html"
                    >
                      {" "}
                      <Instagram size={14} color={"#817c7c"} /> Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                      href="index.html"
                    >
                      {" "}
                      <Instagram size={14} color={"#817c7c"} />
                      LinkedIn
                    </a>
                  </li>
                </div>
              </div>
            </div>
          
            <div className="col-md-3">
              <div className="address">
                <h2>Address</h2>
                <div className="address-links">
                  <li className="address1">
                    <i className="fa-solid fa-location-dot"></i> Kolathur
                    ramankulam- Malappuram Dt Kerala 679338
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-phone"></i> +91 90904500112
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-envelope"></i> mail@1234567.com
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </footer>
=======
      </div>

    </footer>
  
    <section id="copy-right">
      <div className="copy-right-sec"><i className="fa-solid fa-copyright"></i>  
        <a href="#">Bad Talks</a> © Copyright bad talk. All Rights Reserved


      </div>
>>>>>>> 2999372608e1a90ad7c2fb3fa05a14a56758d4cf

      <section id="copy-right">
        <div className="copy-right-sec">
          <i className="fa-solid fa-copyright"></i>
          <a href="#">lorem ispum</a> © Copyright bad talk. All Rights Reserved
        </div>
      </section>
    </section>
  );
}
