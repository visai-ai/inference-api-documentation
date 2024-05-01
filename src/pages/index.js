import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import VISAILogo from "/img/full_visai_logo.webp";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      {/* <div className={clsx(styles.halfBannerBG)}></div> */}

      <div className={clsx("container", styles.heroBannerContainer)}>
        <div className={styles.providedSection}>
          Provided by{" "}
          <a href="https://visai.ai" target={`_blank`}>
            <img src={VISAILogo} alt="VISAI logo" width={76} height={17} />
          </a>
        </div>
        <h1 className={styles.heroBannerTitle}>API Documentation</h1>
        <p className={styles.heroBannerSubtitle}>{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="https://console.visai.ai/"
            target={`_blank`}
          >
            ACP Console
          </a>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="VISAI Inference API Documentation"
    >
      <HomepageHeader />
      <main className={clsx(styles.homepageContainer)}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
