import { StoryblokStory } from "storyblok-generate-ts";

export interface ContextStoryblok {
  navbar: NavbarStoryblok[];
  footer: FooterStoryblok[];
  _uid: string;
  component: "context";
  [k: string]: any;
}

export interface FooterStoryblok {
  _uid: string;
  component: "footer";
  [k: string]: any;
}

export interface LanguageStoryblok {
  name: string;
  locale: string;
  _uid: string;
  component: "language";
  [k: string]: any;
}

export interface NavbarStoryblok {
  a11y_close_navigation_menu: string;
  a11y_open_navigation_menu: string;
  a11y_selected_language: string;
  languages: LanguageStoryblok[];
  _uid: string;
  component: "navbar";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface NavLinkStoryblok {
  text: string;
  link: MultilinkStoryblok;
  id: string;
  hidden_for_langs?: ("en" | "tr")[];
  _uid: string;
  component: "nav-link";
  [k: string]: any;
}

export interface PageStoryblok {
  hidden_for_langs?: ("en" | "tr")[];
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}
