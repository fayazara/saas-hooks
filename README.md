# saas-hooks

Saas Hooks is a TypeScript library offering unified utilities for common SaaS features, streamlining the integration and management of multiple third-party services.

## Usage

Install package:

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install packageName

# npm
npm install packageName

# yarn
yarn add packageName

# pnpm
pnpm install packageName

# bun
bun install packageName
```

<!-- /automd -->

Import:

<!-- automd:jsimport cjs cdn name="pkg" -->

**ESM** (Node.js, Bun)

```js
import {} from "pkg";
```

**CommonJS** (Legacy Node.js)

```js
const {} = require("pkg");
```

**CDN** (Deno, Bun and Browsers)

```js
import {} from "https://esm.sh/pkg";
```

<!-- /automd -->

## Development

<details>

<summary>local development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

</details>

## License

<!-- automd:contributors license=MIT -->

Published under the [MIT](https://github.com/unjs/packageName/blob/main/LICENSE) license.
Made by [community](https://github.com/unjs/packageName/graphs/contributors) 💛
<br><br>
<a href="https://github.com/unjs/packageName/graphs/contributors">
<img src="https://contrib.rocks/image?repo=unjs/packageName" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->

> [!NOTE]  
> This is just an RFC. Some features from this idea are already built, I have the `usePayments` and `useEmail` hook working internally for a personal project.

# Saas Hooks

A TypeScript library offering unified utilities for common SaaS features, streamlining the integration and management of multiple third-party services.

## Inspired by

- The [Unjs](https://unjs.io/) ecosystem
- [VueUse](https://vueuse.org/) utils
- [ShadCN](https://ui.shadcn.com/) component library

## Overview

**Saas Hooks** aims to simplify the integration of various third-party SaaS services by providing a set of unified hooks. These hooks abstract away the complexities of different APIs, offering a consistent interface for developers. This library is particularly useful for applications needing to interact with multiple providers for services like payments, emails, storage, notifications, and more.

## What made me build this?

I am building a more robust version of my Nuxt 3 fullstack boilerplate [supersaas](https://supersaas.dev), where I needed a way to provide multiple payment/email providers, so I made some really robust composables for these. This made me realise this concept can be extended to so many **"services which provide the same solution"**

## Philosophy

1. \***\*Universal Compatibility\*\***: It should work everywhere - Browser, Node runtime, Deno runtime, Cloudflare workers (which I personally love using).
2. \***\*Framework Agnostic\*\***: Doesn’t matter if its Next, Nuxt, Angular, React, if its a javascript project, it should work.
3. \***\*Ease of Use\*\***: The whole point of this is to make it easy to work with these unnecessarily complex interfaces.
4. \***\*Extensibility\*\***: The library should be easily extendable to support new services and use cases without major changes to its core.
5. \***\*Security\*\***: Follow best practices for security, especially when dealing with sensitive operations like payments and storage.
6. \***\*Modularity\*\***: Components should be modular, allowing developers to include only the parts of the library they need.
7. \***\*Type Safety\*\***: Leverage TypeScript to provide strong type definitions, ensuring type safety and better developer experience.
8. \***\*Minimal Dependencies\*\***: Keep external dependencies to a minimum to reduce potential conflicts and maintain lightweight library size.
9. \***\*Community-Driven\*\***: Encourage community contributions and feedback to evolve the library based on real-world usage and requirements.

## What will it solve?

- **Consistency**: Provides a uniform interface for different services, reducing the learning curve.
- **Flexibility**: Easily switch between providers without changing your application logic.
- **Maintainability**: Centralizes the integration logic, making it easier to manage and update.
- **Scalability**: Supports a wide range of providers, allowing your application to scale seamlessly.

## Features

### Payment

`usePayment()` provides a unified interface to work with multiple payment providers.

**Example Usage:**

```typescript
usePayment("stripe").createCheckoutLink(options);
usePayment("paddle").createCheckoutLink(options);
usePayment("lemonsqueezy").createCheckoutLink(options);
```

### Emails

`useEmail()` offers a unified service for sending emails.

**Example Usage:**

```typescript
useEmail("resend").send(options);
useEmail("aws-ses").send(options);
useEmail("sendgrid").send(options);
useEmail("plunk").send(options);
```

### Storage

`useStorage()` provides a unified interface for storing files.

**Example Usage:**

```typescript
useStorage("s3").upload(options);
useStorage("gcs").upload(options);
useStorage("ipfs").upload(options);
```

### Notifications

`useNotification()` enables sending notifications through various providers.

**Example Usage:**

```typescript
useNotification("slack").send(options);
useNotification("telegram").send(options);
useNotification("discord").send(options);
```

### Analytics

`useAnalytics()` allows you to send analytics events to different analytics services.

**Example Usage:**

```typescript
useAnalytics("google-analytics").send(options);
useAnalytics("segment").send(options);
```

### SMS

`useSMS()` provides a service for sending SMS messages.

**Example Usage:**

```typescript
useSMS("twilio").send(options);
useSMS("nexmo").send(options);
```

### Search

`useSearch()` helps you perform search operations across different search providers.

**Example Usage:**

```typescript
useSearch("algolia").search(options);
useSearch("meilisearch").search(options);
```

### Translation

`useTranslation()` offers a service for translating text using various translation APIs.

**Example Usage:**

```typescript
useTranslation("google-translate").translate(options);
useTranslation("deepl").translate(options);
```

### Geolocation

`useGeolocation()` provides geolocation services.

**Example Usage:**

```typescript
useGeolocation("google-maps").getCoordinates(address, options);
useGeolocation("mapbox").getCoordinates(address, options);
```

### Currency Conversion

`useCurrencyConversion()` offers currency conversion services.

**Example Usage:**

```typescript
useCurrencyConversion("fixer").convert(
  amount,
  fromCurrency,
  toCurrency,
  options
);
useCurrencyConversion("openexchangerates").convert(
  amount,
  fromCurrency,
  toCurrency,
  options
);
```

### Image Processing

`useImageProcessing()` provides image processing capabilities.

**Example Usage:**

```typescript
useImageProcessing("cloudinary").resize(image, options);
useImageProcessing("imgix").resize(image, options);
```

### Video Processing

`useVideoProcessing()` offers video processing services.

**Example Usage:**

```typescript
useVideoProcessing("mux").encode(video, options);
useVideoProcessing("cloudflare-stream").encode(video, options);
```

Open to discussions
