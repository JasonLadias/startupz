import React, { FC } from "react";
import {
  AllRightsReserved,
  FooterLink,
  FooterTitle,
} from "../Typographies/Typographies";
import { ourWorks } from "@/services/constants";
import Anchor from "../Anchor";
import styles from "./footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: FC = () => {
  return (
    <footer className="bg-back-gray py-20">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 px-4 lg:container">
        {/* Logo Column */}
        <div className="lg:col-start-1 lg:col-end-2 col-start-2 col-end-3 row-start-2 lg:row-start-1">
          <img src="/logo.svg" alt="Company Logo" className="mb-4" />
          <AllRightsReserved>
            © 2020 Startupz. <br />
            All rights reserved.
          </AllRightsReserved>
        </div>

        {/* Companies Column */}
        <div className="lg:col-start-2 lg:col-end-3 col-start-1 col-end-2 row-start-1">
          <FooterTitle style={{ marginBottom: "1rem" }}>Companies</FooterTitle>
          {ourWorks.map((work, index) => (
            <Anchor href={work.url} key={index}>
              <FooterLink>{work.title}</FooterLink>
            </Anchor>
          ))}
        </div>

        {/* Contact Column */}
        <div className="lg:col-start-3 lg:col-end-4 col-start-2 col-end-3 row-start-1">
          <FooterTitle style={{ marginBottom: "1rem" }}>Contact</FooterTitle>
          <address className={styles["address"]}>
            World Trade Center - The Hague
            <br />
            Prinses Margrietplantsoen 33
            <br />
            2595 AM The Hague <br />
            The Netherlands
          </address>
          <Anchor href="/">
            <FooterLink style={{ marginTop: "10px" }}>
              Send Us an Email
            </FooterLink>
          </Anchor>
        </div>

        {/* Follow Us Column */}
        <div className="lg:col-start-4 lg:col-end-5 col-start-1 col-end-2 row-start-2 lg:row-start-1">
          <FooterTitle style={{ marginBottom: "1rem" }}>Follow us</FooterTitle>
          <div className="flex flex-col items-start gap-2">
            <Anchor href="https://twitter.com">
              <TwitterIcon className={styles["icon"]} />
            </Anchor>
            <Anchor href="https://linkedin.com">
              <LinkedInIcon className={styles["icon"]} />
            </Anchor>

            <Anchor href="https://instagram.com">
              <InstagramIcon className={styles["icon"]} />
            </Anchor>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
