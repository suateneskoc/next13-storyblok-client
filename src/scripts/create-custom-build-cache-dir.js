const fs = require("fs/promises");

const CUSTOM_BUILD_CACHE_DIR = ".custom-build-cache";

const customBuildCacheDirExists = async () =>
  await fs
    .stat(CUSTOM_BUILD_CACHE_DIR)
    .then((_) => true)
    .catch((_) => false);

const createCustomBuildCacheDir = async () => {
  if (await customBuildCacheDirExists()) {
    await fs.rm(CUSTOM_BUILD_CACHE_DIR, { recursive: true, force: true });
  }
  await fs.mkdir(CUSTOM_BUILD_CACHE_DIR);
  console.info("\n✅ .custom-build-cache directory created");
};

module.exports = {
  CUSTOM_BUILD_CACHE_DIR,
  customBuildCacheDirExists,
  createCustomBuildCacheDir,
};
