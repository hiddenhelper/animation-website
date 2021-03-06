import React from "react";

import { SocialMediaIconsReact } from "social-media-icons-react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = ({ pageType }) => {
  var FooterDivType = "HomeFooterDiv";

  if (pageType === "About") {
    FooterDivType = "AboutFooterDiv";
  } else if (pageType === "Book") {
    FooterDivType = "BookFooterDiv";
  } else if (pageType === "Contact") {
    FooterDivType = "ContactFooterDiv";
  }
  return (
    <div className={FooterDivType}>
      <Container className="footerContainerForMobile">
        <Row>
          <Col xs={12}>
            <div className="footerIcons">
              <div className="footerItem">
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  icon="linkedin"
                  iconColor={
                    pageType === "Home"
                      ? "rgba(255,255,255,1)"
                      : pageType === "About"
                      ? "rgba(255,255,255,1)"
                      : pageType === "Book"
                      ? "rgba(40, 184, 211,1)"
                      : "rgba(3, 51, 76,1)"
                  }
                  backgroundColor="rgba(28,186,223,0)"
                  iconSize="10"
                  roundness="0%"
                  url="https://www.linkedin.com/company/inspiredcompanies/"
                  size="30"
                />
              </div>
              <div className="footerItem">
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  icon="instagram"
                  iconColor={
                    pageType === "Home"
                      ? "rgba(255,255,255,1)"
                      : pageType === "About"
                      ? "rgba(255,255,255,1)"
                      : pageType === "Book"
                      ? "rgba(40, 184, 211,1)"
                      : "rgba(3, 51, 76,1)"
                  }
                  backgroundColor="rgba(28,186,223,0)"
                  iconSize="10"
                  roundness="0%"
                  url="https://www.instagram.com/inspiredcompanies/"
                  size="30"
                />
              </div>
              <div className="footerItem">
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  icon="twitter"
                  iconColor={
                    pageType === "Home"
                      ? "rgba(255,255,255,1)"
                      : pageType === "About"
                      ? "rgba(255,255,255,1)"
                      : pageType === "Book"
                      ? "rgba(40, 184, 211,1)"
                      : "rgba(3, 51, 76,1)"
                  }
                  backgroundColor="rgba(28,186,223,0)"
                  iconSize="10"
                  roundness="0%"
                  url="https://twitter.com/InspiredCos"
                  size="30"
                />
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div
              className="footerItem footerFontSize"
              style={{
                color:
                  pageType === "Home"
                    ? "rgba(255,255,255,1)"
                    : pageType === "About"
                    ? "rgba(255,255,255,1)"
                    : pageType === "Book"
                    ? "rgba(40, 184, 211,1)"
                    : "rgba(3, 51, 76,1)",
              }}
            >
              @2020 @inspiredcompanies Pty Ltd. All rights reserved
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="footerContainerForDesktop">
        <div className="footerStyleForDesktop">
          <div className="footerItem">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="0"
              borderStyle="solid"
              icon="linkedin"
              iconColor={
                pageType === "Home"
                  ? "rgba(255,255,255,1)"
                  : pageType === "About"
                  ? "rgba(255,255,255,1)"
                  : pageType === "Book"
                  ? "rgba(40, 184, 211,1)"
                  : "rgba(3, 51, 76,1)"
              }
              backgroundColor="rgba(28,186,223,0)"
              iconSize="10"
              roundness="0%"
              url="https://www.linkedin.com/company/inspiredcompanies/"
              size="25"
            />
          </div>
          <div className="footerItem">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="0"
              borderStyle="solid"
              icon="instagram"
              iconColor={
                pageType === "Home"
                  ? "rgba(255,255,255,1)"
                  : pageType === "About"
                  ? "rgba(255,255,255,1)"
                  : pageType === "Book"
                  ? "rgba(40, 184, 211,1)"
                  : "rgba(3, 51, 76,1)"
              }
              backgroundColor="rgba(28,186,223,0)"
              iconSize="10"
              roundness="0%"
              url="https://www.instagram.com/inspiredcompanies/"
              size="25"
            />
          </div>
          <div className="footerItem">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="0"
              borderStyle="solid"
              icon="twitter"
              iconColor={
                pageType === "Home"
                  ? "rgba(255,255,255,1)"
                  : pageType === "About"
                  ? "rgba(255,255,255,1)"
                  : pageType === "Book"
                  ? "rgba(40, 184, 211,1)"
                  : "rgba(3, 51, 76,1)"
              }
              backgroundColor="rgba(28,186,223,0)"
              iconSize="10"
              roundness="0%"
              url="https://twitter.com/InspiredCos"
              size="25"
            />
          </div>
          <div
            className="footerItem footerFontSize"
            style={{
              color:
                pageType === "Home"
                  ? "rgba(255,255,255,1)"
                  : pageType === "About"
                  ? "rgba(255,255,255,1)"
                  : pageType === "Book"
                  ? "rgba(40, 184, 211,1)"
                  : "rgba(3, 51, 76,1)",
            }}
          >
            @2020 @inspiredcompanies Pty Ltd. All rights reserved
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
