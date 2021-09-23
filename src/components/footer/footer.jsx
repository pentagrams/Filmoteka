import './footer.scss';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__content-wrapper">
            <p className="footer__text">&copy; 2021 | All Rights Reserved |</p>
            <p className="footer__text">
              &nbsp;Developed with{' '}
              <span className="footer__text--orange">love</span> by GoIT
              Students
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
