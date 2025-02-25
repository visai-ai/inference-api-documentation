module.exports = [
  // { type: "doc", id: "petstore/swagger-petstore-yaml" },
  {
    type: "doc",
    id: "ai-marketplace/sentiment-analysis",
    label: "Sentiment Analysis",
    className: "api-method post",
  },
  {
    type: "doc",
    id: "ai-marketplace/text-classification",
    label: "Text Classification",
    className: "api-method post",
  },
  {
    type: "doc",
    id: "ai-marketplace/word-tokenization",
    label: "Word Tokenization",
    className: "api-method post",
  },
  {
    type: "doc",
    id: "ai-marketplace/machine-translation",
    label: "Machine Translation",
    className: "api-method post",
  },
  {
    type: "doc",
    id: "ai-marketplace/speech-segmentation",
    label: "Speech Segmentation",
    className: "api-method post",
  },
  {
    type: "doc",
    id: "ai-marketplace/ocr-documentation",
    label: "OCR Documentation",
    className: "api-method post",
  },
  {
    type: "category",
    label: "Speech to Text",
    link: {
      type: "generated-index",
      title: "Speech to Text",
      description: "Speech to Text Inference API",
      slug: "/ai-marketplace/speech-to-text",
    },
    items: [
      {
        type: "doc",
        id: "ai-marketplace/speech-to-text/synchronous-api",
        label: "Synchronous API",
        className: "api-method post",
      },
      {
        type: "category",
        label: "Asynchronous API",
        link: {
          type: "generated-index",
          title: "Asynchronous API",
          description: "Asynchronous - Speech to Text Inference API",
          slug: "/ai-marketplace/speech-to-text/asynchronous",
        },
        items: [
          {
            type: "doc",
            id: "ai-marketplace/speech-to-text/asynchronous-api/uploading-file",
            label: "Uploading files",
            className: "api-method post",
          },
          {
            type: "doc",
            id: "ai-marketplace/speech-to-text/asynchronous-api/pre-singed-url",
            label: "Submit Pre-signed URLs",
            className: "api-method post",
          },
          {
            type: "doc",
            id: "ai-marketplace/speech-to-text/asynchronous-api/get-job-status",
            label: "Get job status by ID",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "ai-marketplace/speech-to-text/asynchronous-api/list-jobs",
            label: "List all jobs",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "ai-marketplace/speech-to-text/asynchronous-api/cancel-job",
            label: "Cancel job",
            className: "api-method get",
          },
        ],
      },
    ],
  },
  {
    type: "doc",
    id: "ai-marketplace/ocr-thai-id-card",
    label: "OCR Thai ID Card",
    className: "api-method post",
  },
  {
    type: "doc",
    id: "ai-marketplace/ocr-passport",
    label: "OCR Passport",
    className: "api-method post",
  },
  {
    type: "doc",
    id: "ai-marketplace/ocr-license-plate",
    label: "OCR License Plate",
    className: "api-method post",
  },
];
