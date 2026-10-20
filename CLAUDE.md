# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Portfolio site for photographer Tomas Žukovskij (tomaszukovskij.com). Nuxt 2 (Vue 2, Options API) with `target: 'static'`, using headless WordPress as the CMS.

## Commands

```bash
yarn install
yarn dev        # dev server on port 4500 (set in nuxt.config.js `server.port`)
yarn build && yarn start
yarn generate   # static export to dist/ — the production target
yarn lint       # eslint (.js,.vue) + prettier --check
yarn lintfix    # prettier --write + eslint --fix
```

There is no test suite.

## Architecture

**Data sources (both point at the live WordPress at `tomaszukovskij.com/admin`):**
- **GraphQL (WPGraphQL)** via `@nuxtjs/apollo`, client config in `apollo.js`. Queries live in `graphql/*.js` as `gql` exports (e.g. `projects` / `singleProjects`). Most content (projects, exhibitions, pages, homepage, works) comes through ACF fields nested under the post type (e.g. `projects.projects.gallery`).
- **REST** via `@nuxtjs/axios` (`baseURL: .../admin/wp-json`). Prints come from `/wp/v2/prints` in `store/printStore.js`.

**Page data-fetching pattern** (repeated across `pages/**`): `asyncData` queries Apollo with `fetchPolicy: 'cache-first'` so `nuxt generate` bakes the content into static output, then `mounted()` re-queries with `fetchPolicy: 'network-only'` on the client and overwrites the data so the static site shows fresh WordPress content without rebuilding. New pages should keep this pattern. `mounted()` also typically calls `backToTop()` (`services/helpers.js`) and dispatches `updateMenuOpen(false)`.

**i18n:** `@nuxtjs/i18n` with `lt` (default) and `en`; UI strings in `i18n/lt.js` and `i18n/en.js`. CMS content is not localised via i18n: WordPress returns both language variants as separate ACF fields (e.g. `description` / `descriptionEn`) and components pick one with `this.$i18n.locale === 'lt'`. The root Vuex store also keeps a `currentLocale` persisted in `localStorage` (`tzLocale`) that reloads the page on toggle. This duplicates i18n state, so watch for drift between the two.

**Store:** Vuex in modules mode: `store/index.js` (menu state, locale, prints list) and the namespaced `store/printStore.js`. There is no cart or checkout: print pages (`pages/prints/_slug.vue`, `layout: 'store'`) only display price, size and frame info.

**Components:** auto-imported from `~/components` and `~/components/base` (`nuxt.config.js` `components.dirs`). The layout (`layouts/default.vue`) uses `AppMenu` / `AppFooter` from `components/base`. Shared SCSS is in `assets/styles/` and pulled in with `@import` inside component `<style>` blocks (e.g. `singlePage.scss` for detail pages). Responsive breakpoints come from `nuxt-mq` (sm 576, md 1024), and SCSS also uses `max-width: 576px` media queries directly.

**Third-party tracking** is configured in `nuxt.config.js`: Google gtag (`static/plugins/gtag.js`) and the Facebook pixel. `/secret` and `/admin/**` are excluded from the sitemap.

## Conventions

- ESLint extends `@nuxtjs`, `plugin:nuxt/recommended` and `prettier`; `vue/multi-word-component-names` is off.
- `vue-types` (imported as `t`) is used for prop definitions.
