require("dotenv").config({ path: `.env.local` });
const { execSync } = require("child_process");
const path = require("path");
const storyblokToTypescript = require("storyblok-generate-ts").default;

const {
  CUSTOM_BUILD_CACHE_DIR,
  customBuildCacheDirExists,
  createCustomBuildCacheDir,
} = require("./create-custom-build-cache-dir");

const generateStoryblokTypes = async () => {
  if (!(await customBuildCacheDirExists())) await createCustomBuildCacheDir();

  execSync(
    `cd ${CUSTOM_BUILD_CACHE_DIR} && npx storyblok pull-components --space=${process.env.STORYBLOK_SPACE_ID}`
  );

  storyblokToTypescript({
    componentsJson: require(path.join(
      process.cwd(),
      `${CUSTOM_BUILD_CACHE_DIR}/components.${process.env.STORYBLOK_SPACE_ID}.json`
    )),
    path: path.join(process.cwd(), "src/types/storyblok-components-schema.ts"),

    // optional type prefix (default: none)
    // titlePrefix: "",

    // optional type name suffix (default: [Name]_Storyblok)
    // titleSuffix: "",

    // optional compilerOptions which get passed through to json-schema-to-typescript
    // compilerOptions: {
    //   unknownAny: false,
    //   bannerComment: "",
    //   unreachableDefinitions: true,
    // },

    // optional function for custom types (key, obj) => {}
    // customTypeParser: exampleCustomParser
  });
};

generateStoryblokTypes();
