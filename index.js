/**
 * Dependencies
 */
const { join } = require("path");

module.exports = {
  assetsPath: join(__dirname, "plugin-assets"),
  defaultValues: {
    apiVersion: 3,
    attributes: {
      align: {
        type: "string",
        default: "full",
      },
      style: {
        type: "object",
        padding: {
          top: "1em",
          right: "1em",
          bottom: "1em",
          left: "1em",
        },
        default: {
          color: {
            background: "#F9F9F9",
          },
        },
      },
      textinput: {
        type: "string",
        default: "Write to me!",
        source: "text",
        selector: "div",
      },
      textalign: {
        type: "string",
        default: "center",
      },
      fontsize: {
        type: "number",
        default: 5,
      },
    },
    author: "Mark Salvatore",
    category: "widgets",
    customBlockJSON: {},
    customPackageJSON: {},
    customScripts: {},
    dashicon: "superhero",
    description:
      "A new block created by the create-block tool using a custom external project template.",
    domainPath: undefined,
    editorScript: "file:./index.js",
    editorStyle: "file:./index.css",
    example: {
      attributes: {
        textinput: "Example text input",
        fontsize: 8,
      },
    },
    folderName: "./src",
    license: "GPL-2.0-or-later",
    licenseURI: "https://www.gnu.org/licenses/gpl-2.0.html",
    namespace: "msalv",
    npmDependencies: undefined,
    npmDevDependencies: undefined,
    plugin: true,
    pluginURI: undefined,
    render: "file:./render.php",
    script: "file:./script.js",
    slug: "new-block-project",
    style: "file:./style-index.css",
    supports: {
      html: false,
      align: true,
      color: {
        background: true,
        text: true,
      },
      spacing: {
        padding: true,
        margin: false,
      },
    },
    textdomain: "new-block-project",
    title: "New Block Project",
    updateURI: undefined,
    variantVars: { isDynamicVariant: false, isInteractiveVariant: false },
    version: "0.1.0",
    wpEnv: false,
    wpScripts: true,
    render: "file:./render.php",
    customPackageJSON: {
      prettier: "@wordpress/prettier-config",
    },
  },
  variants: {
    dynamic: {},
    interactive: {
      viewScriptModule: "file:./view.js",
      customScripts: {
        build: "wp-scripts build",
        start: "wp-scripts start",
      },
      supports: {
        interactive: true,
      },
    },
  },
  pluginTemplatesPath: join(__dirname, "files/plugin"),
  blockTemplatesPath: join(__dirname, "files/block"),
};
