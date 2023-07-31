module.exports = {
  // run prettier on all supported files in project
  "**/*": ["prettier . --check --ignore-unknown"],
  // run eslint on project
  "src/**/*.{js,jsx,ts,tsx}": "eslint .",
  // run tsc on project
  "src/**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit --pretty",
  // build the project
  "*": () => "npm run build",
};
