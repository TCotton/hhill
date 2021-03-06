// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';
export interface IArticleFields {
  /** slug */
  slug: string;

  /** title */
  title?: string | undefined;

  /** markdown */
  markdown: string;

  /** pageTitle */
  pageTitle?: string | undefined;

  /** metaDescription */
  metaDescription?: string | undefined;

  /** imageUrl */
  imageUrl?: string | undefined;

  /** imageCaption */
  imageCaption?: string | undefined;

  /** basePath */
  basePath?: '/advice/' | '/car-insurance/' | undefined;

  /** schemaScript */
  schemaScript?: string | undefined;

  /** isLive */
  isLive?: boolean | undefined;

  /** isAdvert */
  isAdvert?: boolean | undefined;

  /** author */
  author?: IAuthor | undefined;

  /** content */
  content?: Document | undefined;

  /** sections */
  sections?: IDynamicComponent[] | undefined;
}

/** test article */

export interface IArticle extends Entry<IArticleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'article';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IAuthorFields {
  /** name */
  name?: string | undefined;

  /** avatar */
  avatar?: string | undefined;

  /** email */
  email?: string | undefined;

  /** author */
  author?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

/** test author */

export interface IAuthor extends Entry<IAuthorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'author';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IDynamicComponentFields {
  /** name */
  name?: string | undefined;

  /** component */
  component?: 'CtaWidget1' | 'CtaWidget2' | 'CtaWidget3' | undefined;

  /** props */
  props?: Record<string, any> | undefined;

  /** content */
  content?: string | undefined;

  /** sectionProps */
  sectionProps?: Record<string, any> | undefined;
}

export interface IDynamicComponent extends Entry<IDynamicComponentFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'dynamicComponent';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE = 'article' | 'author' | 'dynamicComponent';

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
