# weather-app #
a simple weather app to learn APIs and JavaScript.

[DEMO](https://js-weather-app-with-materialize.netlify.app/)

## Build Issues ##
After building the site via [Netlify](https://www.netlify.com), I have got a problem about CORS policy.  
Error codes are below.
- ERROR1: `Access to XMLHttpRequest at 'API-URL' from origin 'MY-SITE-URL' has been blocked by CORS policy:
Response to preflight request doesn't pass access control check: It does not have HTTP ok status.`

- ERROR2: `mixed content: this request has been blocked; the content must be served over https.`


To solve the ERROR1, I added a meta tag about security policy, to treat all of the site's insecure URLs.  
To solve ERROR2, I added a toml file.

## References ##
[Cross-Origin Resource Sharing (CORS) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)  
[CSP: upgrade-insecure-requests | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)  
[Access-Control-Allow-Origin Policy - Support - Netlify Community](https://community.netlify.com/t/access-control-allow-origin-policy/1813)
