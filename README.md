# Spartacus + xdn-router configuration

This is an experimental configuration of Spartacus and xdn-router. More about the two here:

- Spartacus <https://github.com/SAP/cloud-commerce-spartacus-storefront>
- XDN <https://www.moovweb.com/faq>

## Usage

1. Build Spartacus SSR
   `$ yarn build:ssr`
2. Start the server
   `$ yarn serve:ssr`
3. Start the xdn router server
   `$ node server.js`
4. Test - open <http://localhost:3000>

## What's going on

XDN is a _CDN as code_ provided by [MOOVWEB](https://www.moovweb.com/). It let's you control caching mechanism programmatically.
To use it we set up an [Express](https://expressjs.com/) server that renders Spartacus app (listening on localhost:3002). Then we set up the xdn-router in front of it (listening on localhost:3000), so that it calls Spartacus and is able to cache it.
We can configure the caching mechanism in `router.js`.

## What's next

This is a PoC (Proof of Concept) that it is possible to deploy Spartacus or plain Angular apps to MOOVWEB XDN. However, it requires some extra development to be production ready.

## Acknowledgements

Thanks to [Mark Brocato](https://github.com/markbrocato) for helping out with this setup.
