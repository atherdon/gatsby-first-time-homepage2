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
                  <Link onClick={props.onToggleMenu} to="/">Home</Link>
                  <a href="/auth/facebook" className="icon alt fa-instagram">
                    <span className="label">Continue with Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/GroceriStar" className="icon alt fa-github">
                    <span className="label">GitHub Project</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/11486092/" className="icon alt fa-linkedin">
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="/terms" className="icon alt fa-linkedin">
                    <span className="label">Terms</span>
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="icon alt fa-linkedin">
                    <span className="label">Privacy</span>
                  </a>
                </li>
                <li>
                  <a href="/credits" className="icon alt fa-linkedin">
                    <span className="label">Credits</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:arthur.tkachenko.netweight@gmail.com" className="icon alt fa-linkedin">
                    <span className="label">Email Us</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="icon alt fa-linkedin">
                    <span className="label">FAQ</span>
                  </a>
                </li>
            </ul>

            <ul className="copyright">
                <li>
                  &copy; Groceristar
                </li>
                <li>
                  Design: <a href="https://html5up.net">HTML5 UP</a>
                </li>
            </ul>

        </div>
    </footer>
)

export default Footer
