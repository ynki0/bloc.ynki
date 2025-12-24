self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/393bd6e266eaf855.js"
  ],
  "/_error": [
    "static/chunks/c21b35075ce16e04.js"
  ],
  "/about": [
    "static/chunks/ee5bdd18a5b29802.js"
  ],
  "/app-development": [
    "static/chunks/7ce05143184d0ad7.js"
  ],
  "/automation-ai-solutions": [
    "static/chunks/38513fbdc6585451.js"
  ],
  "/en": [
    "static/chunks/5594474c2e467368.js"
  ],
  "/pricing": [
    "static/chunks/ce62c1232708f714.js"
  ],
  "/ru": [
    "static/chunks/2bbb1f090b16bdba.js"
  ],
  "/software-development": [
    "static/chunks/9b4e4a9a7da2f953.js"
  ],
  "/ui-ux-design": [
    "static/chunks/21856076e8e22646.js"
  ],
  "/web-development": [
    "static/chunks/e87e8028a611d8e6.js"
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