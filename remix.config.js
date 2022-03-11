/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: [".*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  ignoredRouteFiles: [
    "**/*/__tests__/*.{js,jsx,ts,tsx}",
    "**/__tests__/*.{js,jsx,ts,tsx}"
  ]
};
