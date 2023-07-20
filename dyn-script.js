const local = false;

if (window.location.href.indexOf("webflow.io") != -1) {
  // create local script tag and append to body
  console.log("local");
  const script = document.createElement("script");
  script.src = "http://127.0.0.1:5500/jsuds/home.js";
  script.type = "text/javascript";
  document.body.appendChild(script);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "http://127.0.0.1:5500/jsuds/home.css";
  document.head.appendChild(link);
} else {
  console.log("prod");
  // create script for prod and append to body
  const script = document.createElement("script");
  script.src = "https://scripts-bsp.pages.dev/jsuds/home.js";
  script.type = "text/javascript";
  document.body.appendChild(script);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://scripts-bsp.pages.dev/jsuds/home.css";
  document.head.appendChild(link);
}
