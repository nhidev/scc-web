import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Grid, Row, Col } from "react-styled-flexboxgrid";

const Homepage = () => {
  const { t } = useTranslation("common");

  return (
    <main>
      <img src="https://parthianclimbing.com/harrogate/wp-content/uploads/sites/19/2019/05/HCC-Home-Page-Huddersfield-Climbing.jpg" />
      <br />
      <Grid>
        <Row className="row">
          <Col className="col" xs={12}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna. Sed consequat, leo eget bibendum sodales, augue velit
              cursus nunc,
            </p>
          </Col>
        </Row>
      </Grid>
      <br />
      <Grid>
        <Row className="row">
          <Col className="col" xs={12} sm={6} md={3} lg={3}>
            <img src="https://placeimg.com/400/400/nature" />
          </Col>
          <Col className="col" xs={12} sm={6} md={3} lg={3}>
            <img src="https://placeimg.com/400/400/animals" />
          </Col>
          <Col className="col" xs={12} sm={6} md={3} lg={3}>
            <img src="https://placeimg.com/400/400/arch" />
          </Col>
          <Col className="col" xs={12} sm={6} md={3} lg={3}>
            <img src="https://placeimg.com/400/400/tech" />
          </Col>
        </Row>
      </Grid>
    </main>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Homepage;
