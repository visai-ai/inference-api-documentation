import React from "react";
import clsx from "clsx";
import styles from "./style.module.css";
import Link from "@docusaurus/Link";

const textFeatureList = [
  {
    title: "Sentiment Analysis",
    src: require("/img/products/sentiment-analysis.webp").default,
    href: "/docs/ai-marketplace/sentiment-analysis",
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
    href: "/docs/ai-marketplace/text-classification",
    description: (
      <>
        AI categorizes text content by classifying topics or identifying
        responsible staff mentioned in the text.
      </>
    ),
  },
  {
    title: "Word Tokenization",
    src: require("/img/products/word-tokenization.webp").default,
    href: "/docs/ai-marketplace/word-tokenization",
    description: (
      <>
        AI can split sentences into words for use in text search, keyword
        extraction, and data retrieval.
      </>
    ),
  },
  {
    title: "Machine Translation",
    src: require("/img/products/machine-translation.webp").default,
    href: "/docs/ai-marketplace/machine-translation",
    description: (
      <>AI can translate between Thai-English and English-Thai on documents.</>
    ),
  },
];

const speechFeatureList = [
  {
    title: "Speech Segmentation",
    src: require("/img/products/speech-segmentation.webp").default,
    href: "/docs/ai-marketplace/speech-segmentation",
    description: (
      <>
        AI can detect human speech from other sounds and is widely used in
        voice-activated apps.
      </>
    ),
  },
  {
    title: "Speech to Text",
    src: require("/img/products/speech-to-text.webp").default,
    href: "/docs/ai-marketplace/speech-to-text",
    description: (
      <>
        AI can transcribe speech into text, supporting multiple file types such
        as mp3, wav, and flac.
      </>
    ),
  },
];

const docFeatureList = [
  {
    title: "OCR General Document",
    src: require("/img/products/ocr.webp").default,
    href: "/docs/ai-marketplace/ocr-documentation",
    description: (
      <>
        AI can read images of documents such as PDF, PNG, and JPG and convert
        them into text.
      </>
    ),
  },
  {
    title: "OCR Thai ID Card",
    src: require("/img/products/ocr-card.webp").default,
    href: "/docs/ai-marketplace/ocr-thai-id-card",
    description: (
      <>AI reads ID card images and converts them into Thai-English data.</>
    ),
  },
  {
    title: "OCR Passport",
    src: require("/img/products/ocr-passport.webp").default,
    href: "/docs/ai-marketplace/ocr-passport",
    description: (
      <>
        AI technology is capable of scanning and analyzing passport images,
        extracting relevant information, and converting it into structured data.
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

export default function AIMarketplaceFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx("container")}>
        <h2>Text</h2>
        <div className={clsx("row", styles.rowsContainer)}>
          {textFeatureList.map((props, idx) => (
            <Feature key={idx} {...props}></Feature>
          ))}
        </div>
      </div>
      <div className="container">
        <h2>Voice/Speech</h2>
        <div className={clsx("row", styles.rowsContainer)}>
          {speechFeatureList.map((props, idx) => (
            <Feature key={idx} {...props}></Feature>
          ))}
        </div>
      </div>
      <div className="container">
        <h2>Image/Vision</h2>
        <div className={clsx("row", styles.rowsContainer)}>
          {docFeatureList.map((props, idx) => (
            <Feature key={idx} {...props}></Feature>
          ))}
        </div>
      </div>
    </section>
  );
}
