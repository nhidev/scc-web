import { useTranslation } from "next-i18next";
import styled from "styled-components";

import { Grid, Row, Col } from "react-styled-flexboxgrid";

const FooterStyled = styled.footer`
  background: #1e2428;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  .site-footer {
    width: 100%;
    color: #fff;
    position: relative;
    padding: 5rem 0;
  }
  .site-footer__top-illustration {
    display: flex;
    position: absolute;
    bottom: 95%;
    width: 100vw;
    max-width: 100%;
  }
  .site-footer__top-illustration img {
    display: block;
    width: 100%;
    height: 15rem;
  }
`;

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <FooterStyled>
      <div className="site-footer__top-illustration">
        <img src="/top-footer.svg" alt="banner" />
      </div>
      <Grid>
        <Row className="site-footer">
          <div>{t("description")}</div>
        </Row>
      </Grid>
    </FooterStyled>
  );
};

export default Footer;