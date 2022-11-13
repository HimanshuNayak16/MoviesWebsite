import React, { Component } from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faCodepen,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className={styles.authorName}>&#169; 2022 Himanshu Naik</p>
        <div className={styles.socialIcons}>
          <a href="mailto:rahulnayak1996@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className={styles.socialIcon} />
          </a>
          <a href="https://github.com/HimanshuNayak16" target="_blank">
            <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-naik-995214114/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
          </a>
          <a href="https://codepen.io/himanshu-nayak" target="_blank">
            <FontAwesomeIcon icon={faCodepen} className={styles.socialIcon} />
          </a>
          <a href="https://www.hackerrank.com/rahulnayak1996" target="_blank">
            <FontAwesomeIcon
              icon={faHackerrank}
              className={styles.socialIcon}
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
