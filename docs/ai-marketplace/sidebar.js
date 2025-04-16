module.exports = [
  // { type: "doc", id: "petstore/swagger-petstore-yaml" },
  {
    type: "doc",
    id: "ai-marketplace/machine-translation",
    label: "Machine Translation",
    className: "api-method post",
  },
  // {
  //   type: "doc",
  //   id: "ai-marketplace/ocr-documentation",
  //   label: "OCR Documentation",
  //   className: "api-method post",
  // },
  {
    type: "category",
    label: "OCR Documentation",
    link: {
      type: "generated-index",
      title: "OCR Documentation",
      description: "OCR Documentation Inference API",
      slug: "/ai-marketplace/ocr-documentation",
    },
    items: [
      {
        type: "doc",
        id: "ai-marketplace/ocr-documentation/synchronous-api",
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
          slug: "/ai-marketplace/ocr-documentation/asynchronous",
        },
        items: [
          {
            type: "doc",
            id: "ai-marketplace/ocr-documentation/asynchronous-api/uploading-file",
            label: "Uploading files",
            className: "api-method post",
          },
          {
            type: "doc",
            id: "ai-marketplace/ocr-documentation/asynchronous-api/get-job-status",
            label: "Get job status by ID",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "ai-marketplace/ocr-documentation/asynchronous-api/list-jobs",
            label: "List all jobs",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "ai-marketplace/ocr-documentation/asynchronous-api/cancel-job",
            label: "Cancel job",
            className: "api-method get",
          },
        ],
      },
    ],
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
    id: "ai-marketplace/ocr-receipt",
    label: "OCR Receipt",
    className: "api-method post",
  },
  {
    type: "doc",
    id: "ai-marketplace/ocr-license-plate",
    label: "OCR License Plate",
    className: "api-method post",
  },
];
