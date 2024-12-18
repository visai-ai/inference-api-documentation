import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./style.module.css";

export default function AsynchronousCard({ Svg, title, description, href }) {
  return (
    <Link to={href} className={clsx("", styles.cardContainer)}>
      <div>
        {Svg && (
          <div className={styles.iconContainer}>
            <Svg className={styles.icon} role="img" />
          </div>
        )}
        <span className={clsx("", styles.title)}>{title}</span>
        <p className={clsx("", styles.description)}>{description}</p>
      </div>
      <div className={styles.readMore}>Read more</div>
    </Link>
  );
}
