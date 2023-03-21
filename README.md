# Strapi plugin gtm-module

## 🖐 Installation


**Add plugin dependency**
```bash
npm i add strapi-plugin-measurement-protocol
```

**Configure the plugin**

```js
// file: config/plugins.js
module.exports = ({ env }) => ({
  // ...
  "gtm-module": {
    config: {
      gtmId: '',
      measurementId: '',
    },
  },
  // ...
}
```

- **gtmId** - Google Tag Manager Id. Found in:
> Workspace  > Header right > ex: GTM-...
- **measurementId** - The measurement ID associated with a stream. Found in the Google Analytics UI under:
> Admin > Data Streams > choose your stream > Measurement ID ex: G-...
