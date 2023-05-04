import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <>
      <Navigation />
      <Container className="my-5">
        <Row>
          <Col>
            <h1 className="mb-4">PRIVACY POLICY</h1>
            <p>
              Privacy and security are essential to TravelPey. This privacy statement explains how TravelPey and its
              affiliates handle the data we gather about our visitors via our website and other customer service
              channels.
            </p>
            <hr className="my-5" />
            <h2 className="mb-4">Types of Information Acquired</h2>
            <p>
              We gather the following personal information from you when you sign up for an account, request a
              transaction, join in a program, or otherwise contact us through our website.
            </p>
            <hr className="my-5" />
            <h2 className="mb-4">Identification and Contact details</h2>
            <p>
              Your complete name, date of birth, gender, and other information on government-issued identity documents
              are examples of this sort of information. In addition, your contact information, such as your email
              address, postal address, and phone numbers, is also collected.
            </p>
            <hr className="my-5" />
            <h2 className="mb-4">Financial information</h2>
            <p>
              Financial data comprises information about your bank account and payment card, as well as information
              about its appropriateness and income, account balance, financial history, credit history, credit ratings,
              and so on.
            </p>
            <hr className="my-5" />
            <h2 className="mb-4">Usage Information</h2>
            <p>
              This includes information on how you access and use our websites, such as your interactions with others,
              photographs or material you publish on the side, your username, and other content you supply. With your
              consent, we can access your device's camera roll and camera. By using our website, you agree that any
              information you give or receive will be recorded, stored, and disclosed for any reason on our website.
            </p>
            <hr className="my-5" />
            <h2 className="mb-4">Changes to the privacy policy</h2>
            <p>
              This privacy policy may be updated from time to time to reflect new methods by which we treat your data.
              The last updated date will be updated if we make changes to this privacy policy. The new privacy policy
              will take effect as soon as it is posted on the website. We will notify you if we make substantial changes
              that impact your personal information. We urge you to check this page for the most up-to-date information
              on our privacy policies on a regular basis.
            </p>
            <hr className="my-5" />
            <h2 className="mb-4">Cookies Policy</h2>
            <p>
              Cookies are used to improve our website performance and to customize it. These cookies potentially improve
              and personalize your experience on our website. It helps us learn about the user's interests, and the
              website can provide the user with features and services for additional purposes with the assistance of
              cookies. However, you may disable the cookies option to prevent them from being stored, but this will
              affect the functioning of our website.
            </p>
            <hr className="my-5" />
            <h2 className="mb-4">Links to other websites</h2>
            <p>
              Our site may include links to other websites or information maintained by third parties. We are not
              accountable for the truth,
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Privacy;
