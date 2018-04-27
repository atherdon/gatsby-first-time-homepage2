import React from 'react'
import Link  from 'gatsby-link'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                {/*}<li>
                  <a href="/" className="icon alt fa-twitter">
                    <span className="label">Create Grocery Lists in a few minutes</span>
                  </a>
                </li>*/}
                {/*<li>
                  <a href="#" className="icon alt fa-facebook">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                */}
                <li>
                  <Link className="icon alt fa-instagram" to="/auth/facebook">
                    <span className="label">Continue with Facebook</span>
                  </Link>

                </li>
                <li>
                <Link className="icon alt fa-github" to="https://github.com/GroceriStar">
                  <span className="label">GitHub Project</span>
                </Link>

                </li>
                <li>
                <Link className="icon alt fa-linkedin" to="https://www.linkedin.com/company/11486092/">
                  <span className="label">LinkedIn</span>
                </Link>

                </li>
                <li>
                <Link className="icon alt fa-linkedin" to="/terms">
                <span className="label">Terms</span>
                </Link>

                </li>
                <li>
                <Link className="icon alt fa-linkedin" to="/privacy">
                  <span className="label">Privacy</span>
                </Link>

                </li>
                <li>
                <Link className="icon alt fa-linkedin" to="/credits">
                    <span className="label">Credits</span>
                </Link>

                </li>
                <li>
                <Link className="icon alt fa-email" to="mailto:arthur.tkachenko.netweight@gmail.com">
                  <span className="label">Email Us</span>
                </Link>

                </li>

            </ul>

            <ul className="copyright">
                <li>
                  &copy; Groceristar
                </li>
                <li>
                  Design:
                  <Link  to="https://html5up.net">
                  HTML5 UP
                  </Link>

                </li>
            </ul>

        </div>
    </footer>
)

export default Footer
