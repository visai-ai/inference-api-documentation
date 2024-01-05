/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import clsx from "clsx";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
  PageMetadata,
} from "@docusaurus/theme-common";
// @ts-ignore
import {
  docVersionSearchTag,
  DocsSidebarProvider,
  DocsVersionProvider,
  useDocRouteMetadata,
} from "@docusaurus/theme-common/internal";
import DocPageLayout from "./Layout";

import NotFound from "@theme/NotFound";
// @ts-ignore
import SearchMetadata from "@theme/SearchMetadata";
import type { Props } from "@theme/DocPage";
// @ts-ignore
import AIMarketplaceFeatures from "@site/src/components/AIMarketplaceFeatures";
// @ts-ignore
import CustomizedFeatures from "@site/src/components/CustomizedAIFeatures";

import { Helmet } from "react-helmet";

function DocPageMetadata(props: Props): JSX.Element {
  const { versionMetadata } = props;
  return (
    <>
      <SearchMetadata
        version={versionMetadata.version}
        tag={docVersionSearchTag(
          versionMetadata.pluginId,
          versionMetadata.version
        )}
      />
      <PageMetadata>
        {versionMetadata.noIndex && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </PageMetadata>
    </>
  );
}

export default function DocPage(props: Props): JSX.Element {
  const pathName = props.location.pathname;
  const { versionMetadata } = props;
  const currentDocRouteMetadata = useDocRouteMetadata(props);
  if (!currentDocRouteMetadata) {
    return <NotFound />;
  }
  const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
  const product =
    pathName === "/docs/customized-ai" ||
    pathName === "/inference-api-documentation/docs/customized-ai"
      ? "Customized AI"
      : "AI Marketplace";

  return (
    <>
      <DocPageMetadata {...props} />
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.docsPages,
          ThemeClassNames.page.docsDocPage,
          props.versionMetadata.className
        )}
      >
        <DocsVersionProvider version={versionMetadata}>
          <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
            <DocPageLayout>
              {pathName === "/docs/ai-marketplace" ||
              pathName === "/docs/customized-ai" ||
              pathName === "/inference-api-documentation/docs/ai-marketplace" ||
              pathName === "/inference-api-documentation/docs/customized-ai" ||
              pathName ===
                "/inference-api-documentation/docs/ai-marketplace/" ||
              pathName ===
                "/inference-api-documentation/docs/customized-ai/" ? (
                <>
                  <Helmet>
                    <title>{product} API Documentation | VISAI</title>
                    <meta
                      name="title"
                      content={`${product} API Documentation | VISAI`}
                      data-react-helmet="true"
                      data-rh="true"
                    ></meta>
                    <meta
                      name="description"
                      content="Inference API Documentation"
                    />
                  </Helmet>
                  <>
                    <nav
                      className="theme-doc-breadcrumbs breadcrumbsContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocBreadcrumbs-styles-module"
                      aria-label="Breadcrumbs"
                    >
                      <ul
                        className="breadcrumbs"
                        itemScope={false}
                        itemType="https://schema.org/BreadcrumbList"
                      >
                        <li className="breadcrumbs__item">
                          <a
                            aria-label="Home page"
                            className="breadcrumbs__link"
                            href="/inference-api-documentation/"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              className="breadcrumbHomeIcon_OVgt"
                            >
                              <path
                                d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </a>
                        </li>
                        <li
                          itemScope={false}
                          itemProp="itemListElement"
                          itemType="https://schema.org/ListItem"
                          className="breadcrumbs__item breadcrumbs__item--active"
                        >
                          <span className="breadcrumbs__link" itemProp="name">
                            {product}
                          </span>
                        </li>
                      </ul>
                    </nav>
                    <header>
                      <h1 className="title_node_modules-@docusaurus-theme-classic-lib-theme-DocCategoryGeneratedIndexPage-styles-module">
                        {product}
                        {` `}API
                      </h1>
                      <p>Inference API Documentation</p>
                    </header>
                    {pathName === "/docs/customized-ai" ||
                    pathName ===
                      "/inference-api-documentation/docs/customized-ai" ? (
                      <CustomizedFeatures />
                    ) : (
                      <AIMarketplaceFeatures />
                    )}
                  </>
                </>
              ) : (
                docElement
              )}
            </DocPageLayout>
          </DocsSidebarProvider>
        </DocsVersionProvider>
      </HtmlClassNameProvider>
    </>
  );
}
