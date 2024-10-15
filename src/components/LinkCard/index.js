import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./style.module.css";

export default function LongRunCard({ title, href }) {
  return (
    <Link to={href} className={clsx("", styles.longRunCardContainer)}>
      <span className={clsx("", styles.longRunTitle)}>Go to {title}</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="arrow-right">
          <path
            id="Icon"
            d="M4.16699 10.0001H15.8337M15.8337 10.0001L10.0003 4.16675M15.8337 10.0001L10.0003 15.8334"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </Link>
  );
}
