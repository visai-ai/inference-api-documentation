import React from "react";
import clsx from "clsx";
import styles from "./style.module.css";
import Link from "@docusaurus/Link";

const featureList = [
  {
    title: "Sentiment Analysis",
    src: require("/img/products/sentiment-analysis.webp").default,
    href: "/docs/customized-ai/sentiment-analysis",
    description: (
      <>
        AI can classify emotions from text into 3 categories: positive, neutral,
        or negative.
      </>
    ),
  },
  {
    title: "Text Classification",
    src: require("/img/products/text-classification.webp").default,
    href: "/docs/customized-ai/text-classification",
    description: (
      <>
        AI categorizes text content by classifying topics or identifying
        responsible staff mentioned in the text.
      </>
    ),
  },
  {
    title: "Time Series Forecasting",
    src: require("/img/products/tsr.webp").default,
    href: "/docs/customized-ai/time-series-forecasting",
    description: (
      <>
        AI predicts future values based on historical data, mainly used in
        finance and, retail.
      </>
    ),
  },
];

function Feature({ src, title, href, description }) {
  return (
    <div className={clsx("col col--4", styles.cardContainer)}>
      <Link to={href} className={clsx(styles.featuresLink)}>
        <div className="text--center">
          <img src={src} className={styles.featureSvg} alt={title} />
        </div>
        <div className={clsx("text--center", styles.textCard)}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.paragraph}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function CustomizedAIFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx("container")}>
        <div className={clsx("row", styles.rowsContainer)}>
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props}></Feature>
          ))}
        </div>
      </div>
    </section>
  );
}
