import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <footer>
        <p>
          Copyright © {currentYear} @Zaid Airbnb Clone ! No Rights reserved |
          This Is A Demo |
        </p>
        <p>Privacy | Terms | SiteMap | Company Details</p>
      </footer>
    </div>
  );
}
export default Footer;
