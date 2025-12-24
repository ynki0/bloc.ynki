self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/c15e5907d0368f4e.js"
  ],
  "/_error": [
    "static/chunks/c21b35075ce16e04.js"
  ],
  "/about": [
    "static/chunks/9808193805d39534.js"
  ],
  "/app-development": [
    "static/chunks/f4973c66e75e725d.js"
  ],
  "/automation-ai-solutions": [
    "static/chunks/da8d4dac4de894c0.js"
  ],
  "/en": [
    "static/chunks/f9d5245f3c3bc3ed.js"
  ],
  "/pricing": [
    "static/chunks/dcd3b8f6a9bea5d3.js"
  ],
  "/ru": [
    "static/chunks/e5d6a7402ccb1a0b.js"
  ],
  "/software-development": [
    "static/chunks/6b9fac128a0e3ea0.js"
  ],
  "/ui-ux-design": [
    "static/chunks/5152556478fdc354.js"
  ],
  "/web-development": [
    "static/chunks/ee94b9578a91519d.js"
  ],
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/:lang(en|ru)/:path*",
        "destination": "/:path*"
      },
      {
        "source": "/:lang(en|ru)",
        "destination": "/"
      }
    ],
    "beforeFiles": [
      {
        "source": "/.//_next/:path+",
        "destination": "/_next/:path+"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/about",
    "/app-development",
    "/automation-ai-solutions",
    "/en",
    "/pricing",
    "/ru",
    "/software-development",
    "/ui-ux-design",
    "/web-development"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()