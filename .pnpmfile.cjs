function readPackage(pkg, context) {
  const path = require('path');
  const { dependencies } = pkg;
  const packName = "element-plus";
  const folder = path.resolve(__dirname, `./ext/${packName}`);
  dependencies[packName] && (dependencies[packName] = `file:${folder}`);
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
