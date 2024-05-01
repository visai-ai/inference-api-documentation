import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

const apiList = [
  {
    title: "AI Marketplace",
    Svg: require("@site/static/img/shopping_bag.svg").default,
    href: "/docs/ai-marketplace",
    description: (
      <>
        High-quality AI Models and AI Applications on cloud integrated easily
        with your software and applications.
      </>
    ),
  },
  {
    title: "Customized AI",
    Svg: require("@site/static/img/tool.svg").default,
    href: "/docs/customized-ai",
    description: (
      <>
        Your own AI model by uploading data, measuring its performance accuracy,
        and using it when satisfied.
      </>
    ),
  },
];

function Feature({ Svg, title, href, description }) {
  return (
    <div className={clsx("col col--4", styles.cardContainer)}>
      <Link to={href} className={clsx(styles.featuresLink)}>
        <div className={clsx("text--center", styles.cardIcon)}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={clsx("text--center", styles.cardDetail)}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.paragraph}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.rowContainer)}>
          {apiList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
