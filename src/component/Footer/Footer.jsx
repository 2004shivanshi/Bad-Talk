import React from 'react'
import "./Footer.css"
import { ChevronRight, FileX, Instagram } from 'lucide-react'
export default function Footer() {
  return (
   <>

+

    <footer id="footer">
      <div className="container ">
        <div className="row">
          <div className="col-md-3" style={{maxWidth:300 } }>
             <a href="index.html"><img style={{objectFit:"contain"} } width={260} height={150} src="https://logo-download.com/wp-content/data/images/2021/08/Levi_Strauss__Co.-Logo.png" alt="" className="img-fluid logo-footer"/></a> 
                 <div className="footer-about">
                           <p style={{margin:0, } }>Lorem Ipsum is simply dumm Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p> 
                      </div>

          </div>
          <div className="col-md-3">
            <div className="useful-link">
              <h2>Useful Links</h2>
           
              <div className="use-links"style={{display:"flex", justifyContent:"center", gap:10, flexDirection:"column"}} >
                <li><a style={{display:"flex", alignItems:"center", padding:0}}  href="index.html"> <ChevronRight size={14}/> Home</a></li>
                <li><a style={{display:"flex", alignItems:"center"}}  href="index.html"> <ChevronRight size={14}/> About Us</a></li>
                <li><a style={{display:"flex", alignItems:"center"}}  href="index.html"> <ChevronRight size={14}/> Gallery</a></li>
                <li><a style={{display:"flex", alignItems:"center"}}  href="index.html"> <ChevronRight size={14}/> Contact</a></li>
              </div>
            </div>

          </div>
                    <div className="col-md-3">
                        <div className="social-links">
              <h2>Follow Us</h2>
           
              <div className="social-icons">
                <li><a style={{display:"flex", alignItems:"center",  gap:10}}  href="index.html"> <Instagram size={14}/>  Facebook</a></li>
                <li><a style={{display:"flex", alignItems:"center",  gap:10}}  href="index.html"> <Instagram size={14}/> Instagram</a></li>
                <li><a style={{display:"flex", alignItems:"center",  gap:10}}  href="index.html"> <Instagram size={14}/>Linkdein</a> </li>
              </div>
            </div>
                    

                    </div>
          <div className="col-md-3">
            <div className="address">
              <h2>Address</h2>
           
              <div className="address-links">
                <li className="address1"><i className="fa-solid fa-location-dot"></i> Kolathur ramankulam-
                  Malappuram Dt 
                   Kerala 679338</li>
                   <li><a href=""><i className="fa-solid fa-phone"></i> +91 90904500112</a></li>
                   <li><a href=""><i className="fa-solid fa-envelope"></i> mail@1234567.com</a></li>
              </div>
            </div>
          </div>
                  
        </div>
      </div>

    </footer>
  
    <section id="copy-right">
      <div className="copy-right-sec"><i className="fa-solid fa-copyright"></i>  
        <a href="#">lorem ispum</a> © Copyright bad talk. All Rights Reserved


      </div>

    </section>
    


</>




  )
}
