# Project Overview

## Project Summary
- Total Files (tracked): 114

### Language Breakdown
- JavaScript: 100 files (87.7%)
- JSON: 12 files (10.5%)
- Markdown: 2 files (1.8%)

## Project Structure

```
.
├── 🧠 studio
│   ├── 🧩 components
│   │   └── 🟨 SidebarList.js
│   ├── 📁 config
│   │   ├── 🧠 @sanity
│   │   │   ├── 🔧 data-aspects.json
│   │   │   ├── 📄⚛️ default-layout.json
│   │   │   ├── 🔧 default-login.json
│   │   │   └── 🔧 form-builder.json
│   │   └── 📄 .checksums
│   ├── 📁 plugins
│   │   └── 📄 .gitkeep
│   ├── 📁 schemas
│   │   ├── 📁 documents
│   │   │   ├── 🟨 author.js
│   │   │   ├── 🟨 blog.js
│   │   │   ├── 🟨 category.js
│   │   │   ├── 🟨 objective.js
│   │   │   ├── 🟨 publication.js
│   │   │   ├── 🟨 service.js
│   │   │   ├── 🟨 spotlight.js
│   │   │   └── 🟨 value.js
│   │   ├── 📁 objects
│   │   │   ├── 🟨 customImage.js
│   │   │   ├── 🟨 normalText.js
│   │   │   └── 🟨 richText.js
│   │   └── 🟨 schema.js
│   ├── 📁 static
│   │   ├── 📄 .gitkeep
│   │   └── 📄 favicon.ico
│   ├── 🔒 .env.production
│   ├── 📄 .gitignore
│   ├── 🔧 package-lock.json
│   ├── 🔧 package.json
│   ├── 🔧 sanity.json
│   ├── 🔧 tsconfig.json
│   └── 📄 yarn.lock
├── 🌐 web
│   ├── 📂 src
│   │   ├── 🧩 components
│   │   │   ├── 📁 author
│   │   │   │   ├── 🟨 AuthorGrid.js
│   │   │   │   └── 🟨 AuthorItem.js
│   │   │   ├── 📁 blog
│   │   │   │   ├── 🟨 BlogGrid.js
│   │   │   │   └── 🟨 BlogItem.js
│   │   │   ├── 📁 buttons
│   │   │   │   ├── 🟨 ActionButton.js
│   │   │   │   └── 🟨 Button.js
│   │   │   ├── 📁 category
│   │   │   │   ├── 🟨 ActivityGrid.js
│   │   │   │   ├── 🟨 ActivityItem.js
│   │   │   │   ├── 🟨 CategoryGrid.js
│   │   │   │   ├── 🟨 CategoryItem.js
│   │   │   │   ├── 🟨 ObjectiveGrid.js
│   │   │   │   ├── 🟨 ObjectiveItem.js
│   │   │   │   ├── 🟨 ValueGrid.js
│   │   │   │   └── 🟨 ValueItem.js
│   │   │   ├── 📁 homePage
│   │   │   │   ├── 🟨 FeaturedBlogs.js
│   │   │   │   ├── 🟨 HeroSection.js
│   │   │   │   └── 🟨 TopCategories.js
│   │   │   ├── 📁 search
│   │   │   │   ├── 🟨 SearchField.js
│   │   │   │   ├── 🟨 SearchModal.js
│   │   │   │   ├── 🟨 SearchResult.js
│   │   │   │   └── 🟨 SearchResultItem.js
│   │   │   ├── 📁 typography
│   │   │   │   ├── 🟨 ParagraphText.js
│   │   │   │   └── 🟨 Title.js
│   │   │   ├── 🟨 ConstrainedPortableText.js
│   │   │   ├── 🟨 Footer.js
│   │   │   ├── 🟨 Header.js
│   │   │   ├── 📄⚛️ Layout.js
│   │   │   ├── 🟨 Logo.js
│   │   │   ├── 🟨 MyPortableText.js
│   │   │   ├── 🟨 PageHeader.js
│   │   │   ├── 🟨 PageSpace.js
│   │   │   ├── 🟨 Pagination.js
│   │   │   └── 🟨 seo.js
│   │   ├── 📁 constants
│   │   │   ├── 🟨 buttonTypes.js
│   │   │   ├── 🟨 menu.js
│   │   │   └── 🟨 socialLinks.js
│   │   ├── 📁 contexts
│   │   │   └── 🟨 searchModalContext.js
│   │   ├── 🖼️ images
│   │   │   ├── 📄 demt.ico.jpg
│   │   │   ├── 📄 demtMalnutrition.jpg
│   │   │   └── 📄 mwenje.jpg
│   │   ├── 📑 pages
│   │   │   ├── 🟨 404.js
│   │   │   └── 🟨 index.js
│   │   ├── 🎨 styles
│   │   │   ├── 📁 author
│   │   │   │   ├── 🟨 AuthorGridStyles.js
│   │   │   │   ├── 🟨 AuthorItemStyles.js
│   │   │   │   └── 🟨 SingleAuthorStyles.js
│   │   │   ├── 📁 blog
│   │   │   │   ├── 🟨 BlogGridStyles.js
│   │   │   │   ├── 🟨 BlogItemStyles.js
│   │   │   │   └── 🟨 SingleBlogStyles.js
│   │   │   ├── 📁 buttons
│   │   │   │   ├── 🟨 ActionButtonStyles.js
│   │   │   │   └── 🟨 ButtonStyles.js
│   │   │   ├── 📁 category
│   │   │   │   ├── 🟨 CategoryGridStyles.js
│   │   │   │   ├── 🟨 CategoryItemStyles.js
│   │   │   │   └── 🟨 SingleCategoryStyles.js
│   │   │   ├── 📁 homePage
│   │   │   │   ├── 🟨 FeaturedBlogsStyles.js
│   │   │   │   ├── 🟨 HeroSectionStyles.js
│   │   │   │   └── 🟨 TopCategoriesStyles.js
│   │   │   ├── 📁 search
│   │   │   │   ├── 🟨 SearchFieldStyles.js
│   │   │   │   ├── 🟨 SearchModalStyles.js
│   │   │   │   └── 🟨 SearchResultItemStyles.js
│   │   │   ├── 📁 typography
│   │   │   │   ├── 🟨 ParagraphTextStyles.js
│   │   │   │   └── 🟨 SectionTitleStyles.js
│   │   │   ├── 🟨 CustomImageStyles.js
│   │   │   ├── 🟨 FooterStyles.js
│   │   │   ├── 🟨 GlobalStyles.js
│   │   │   ├── 🟨 HeaderStyles.js
│   │   │   ├── 🟨 HomePageStyles.js
│   │   │   ├── 🟨 LogoStyles.js
│   │   │   ├── 🟨 NotFoundPageStyles.js
│   │   │   ├── 🟨 PageHeaderStyles.js
│   │   │   ├── 🟨 PageSpaceStyles.js
│   │   │   └── 🟨 PaginationStyles.js
│   │   ├── 📁 templates
│   │   │   ├── 🟨 activity-list.js
│   │   │   ├── 🟨 author-list.js
│   │   │   ├── 🟨 blog-list.js
│   │   │   ├── 🟨 category-list.js
│   │   │   ├── 🟨 publication-list.js
│   │   │   ├── 🟨 single-activity.js
│   │   │   ├── 🟨 single-author.js
│   │   │   ├── 🟨 single-blog.js
│   │   │   ├── 🟨 single-category.js
│   │   │   └── 🟨 single-publication.js
│   │   └── 🛠️ utils
│   │       └── 🟨 getSanityImageData.js
│   ├── 📁 static
│   │   └── 📄 demt.ico
│   ├── 🟨 .eslintrc.js
│   ├── 📄 .gitignore
│   ├── 🟨 gatsby-browser.js
│   ├── 🟨 gatsby-config.js
│   ├── 🟨 gatsby-node.js
│   ├── 🟨 gatsby-ssr.js
│   ├── 🔧 package-lock.json
│   ├── 🔧 package.json
│   ├── 📝 README.md
│   └── 🟨 sanity-config.js
├── 📄 .eslintignore
├── 🟨 .eslintrc.js
├── 📄 .gitignore
├── 📄 banner.png
├── 🟨 generate_structure.js
├── 🔧 package-lock.json
├── 🔧 package.json
├── 📝 README.md
└── 📄 yarn.lock
```

# File Contents (selected)

## `.eslintrc.js`
```
module.exports = {
  extends: ['wesbos'],
  rules: {
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-pascal-case': 'error',
  },
};

```
## `generate_structure.js`
```
#!/usr/bin/env node

/* eslint-disable */ // ← Prevents ESLint from breaking this file

/**
 * Advanced Project Structure Generator
 * With smart folder & tech-specific emojis
 */

const fs = require("fs");
const path = require("path");

const OUTPUT_FILE = "project_structure.md";

const IGNORED_DIRS = new Set([
  "node_modules",
  ".git",
  "dist",
  "build",
  ".next",
  "out",
  "DerivedData",
  "Pods",
  ".build",
  "vendor",
  "__MACOSX",
  ".vscode",
  ".idea",
]);

const ALLOWED_EXT = new Set([
  ".js",
  ".ts",
  ".jsx",
  ".tsx",
  ".json",
  ".html",
  ".css",
  ".scss",
  ".md",
  ".swift",
  ".m",
  ".mm",
  ".h",
  ".c",
  ".cpp",
  ".plist",
  ".xml",
  ".sh",
  ".php",
  ".blade.php",
]);

const EXT_TO_LANG = {
  ".js": "JavaScript",
  ".ts": "TypeScript",
  ".jsx": "JSX",
  ".tsx": "TSX",
  ".json": "JSON",
  ".html": "HTML",
  ".css": "CSS",
  ".scss": "SCSS",
  ".md": "Markdown",
  ".swift": "Swift",
  ".m": "Objective-C",
  ".mm": "Objective-C++",
  ".h": "Header",
  ".c": "C",
  ".cpp": "C++",
  ".plist": "Plist",
  ".xml": "XML",
  ".sh": "Shell",
  ".php": "PHP",
  ".blade.php": "Blade",
};

// Tech-specific emoji mapping
function getFileEmoji(filename) {
  const ext = path.extname(filename).toLowerCase();
  const name = filename.toLowerCase();

  // React / Frontend
  if (
    name.includes("app.") ||
    name.includes("page.") ||
    name.includes("layout.")
  )
    return "📄⚛️ ";
  if (name.includes("component") || name.includes("comp.")) return "🧩 ";
  if (ext === ".tsx" || ext === ".jsx") return "⚛️ ";
  if (ext === ".ts") return "🔷 ";
  if (ext === ".js") return "🟨 ";

  // Styling
  if (ext === ".css" || ext === ".scss") return "🎨 ";
  if (name.includes("tailwind")) return "🌬️ ";
  if (name.includes("vite.config")) return "⚡ ";
  if (name.includes("webpack")) return "📦 ";

  // Config & Data
  if (ext === ".json") return "🔧 ";
  if (name.includes("config") || name.includes("setup")) return "⚙️ ";
  if (name.includes("env")) return "🔒 ";

  // Sanity Studio
  if (name.includes("sanity") || name.includes("schema")) return "🧠 ";
  if (name.includes("desk") || name.includes("structure")) return "📋 ";

  // Backend / PHP / Laravel
  if (ext === ".php" || ext === ".blade.php") return "🐘 ";
  if (name.includes("controller")) return "🎮 ";
  if (name.includes("model")) return "📊 ";
  if (name.includes("route")) return "🛤️ ";

  // Default files
  if (ext === ".md") return "📝 ";
  if (ext === ".sh") return "🐚 ";

  return "📄 ";
}

function getFolderEmoji(folderName) {
  const name = folderName.toLowerCase();

  if (name === "src" || name === "source") return "📂 ";
  if (name === "components" || name === "comp") return "🧩 ";
  if (name === "pages" || name === "routes") return "📑 ";
  if (name === "styles" || name === "css" || name === "scss") return "🎨 ";
  if (name === "public") return "🌐 ";
  if (name === "studio") return "🧠 ";
  if (name === "web") return "🌐 ";
  if (name.includes("sanity")) return "🧠 ";
  if (name.includes("api") || name === "server") return "🔌 ";
  if (name.includes("utils") || name === "lib") return "🛠️ ";
  if (name.includes("assets") || name.includes("images")) return "🖼️ ";
  if (name.includes("tests") || name.includes("__tests__")) return "🧪 ";

  return "📁 ";
}

// Walk function (collects files)
function walk(dir, fileList = []) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (IGNORED_DIRS.has(entry.name) || entry.name === OUTPUT_FILE) continue;

      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath, fileList);
      } else {
        fileList.push(fullPath);
      }
    }
  } catch (err) {
    console.warn(`Warning: Could not read ${dir}`);
  }
  return fileList;
}

function writeLine(stream, line = "") {
  stream.write(line + "\n");
}

// Stats
function computeStats(files) {
  const stats = { totalFiles: 0, languages: {} };
  files.forEach((f) => {
    const ext = path.extname(f).toLowerCase();
    if (!ALLOWED_EXT.has(ext)) return;
    stats.totalFiles++;
    const lang = EXT_TO_LANG[ext] || ext.slice(1).toUpperCase();
    stats.languages[lang] = (stats.languages[lang] || 0) + 1;
  });
  return stats;
}

function formatLanguageStats(stats) {
  const total = stats.totalFiles || 1;
  return Object.entries(stats.languages)
    .sort((a, b) => b[1] - a[1])
    .map(
      ([lang, count]) =>
        `- ${lang}: ${count} files (${((count / total) * 100).toFixed(1)}%)`,
    );
}

// Smart Tree with emojis
function printTree(dir, prefix = "", stream) {
  try {
    let entries = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter(
        (entry) => !IGNORED_DIRS.has(entry.name) && entry.name !== OUTPUT_FILE,
      )
      .sort((a, b) => {
        if (a.isDirectory() && !b.isDirectory()) return -1;
        if (!a.isDirectory() && b.isDirectory()) return 1;
        return a.name.localeCompare(b.name);
      });

    entries.forEach((entry, index) => {
      const isLast = index === entries.length - 1;
      const connector = isLast ? "└── " : "├── ";
      const newPrefix = prefix + (isLast ? "    " : "│   ");

      if (entry.isDirectory()) {
        const emoji = getFolderEmoji(entry.name);
        writeLine(stream, prefix + connector + emoji + entry.name);
        printTree(path.join(dir, entry.name), newPrefix, stream);
      } else {
        const emoji = getFileEmoji(entry.name);
        writeLine(stream, prefix + connector + emoji + entry.name);
      }
    });
  } catch (err) {}
}

// ====================== MAIN ======================
(function main() {
  const args = process.argv.slice(2);
  const NO_CONTENT = args.includes("--no-content");
  const root = process.cwd();
  const output = fs.createWriteStream(OUTPUT_FILE, { encoding: "utf8" });

  console.log("🔍 Scanning project...");
  const files = walk(root);
  const stats = computeStats(files);

  writeLine(output, "# Project Overview\n");
  writeLine(output, "## Project Summary");
  writeLine(output, `- Total Files (tracked): ${stats.totalFiles}\n`);
  writeLine(output, "### Language Breakdown");
  formatLanguageStats(stats).forEach((line) => writeLine(output, line));
  writeLine(output, "");

  writeLine(output, "## Project Structure\n");
  writeLine(output, "```");
  writeLine(output, ".");
  printTree(root, "", output);
  writeLine(output, "```");

  if (!NO_CONTENT) {
    writeLine(output, "\n# File Contents (selected)\n");
    files.forEach((file) => {
      const ext = path.extname(file).toLowerCase();
      if (!ALLOWED_EXT.has(ext)) return;
      try {
        let content = fs.readFileSync(file, "utf8");
        if (content.length > 15000)
          content = content.slice(0, 15000) + "\n... (truncated)";
        writeLine(output, `## \`${path.relative(root, file)}\``);
        writeLine(output, "```");
        writeLine(output, content);
        writeLine(output, "```");
      } catch (e) {}
    });
  } else {
    writeLine(
      output,
      "\n# File Contents\n(Skipped — run with `--content` to include)",
    );
  }

  output.end();
  console.log(`✅ Done! Generated → ${OUTPUT_FILE}`);
})();

```
## `package-lock.json`
```
{
  "name": "react-js-fullstack-web-app",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "react-js-fullstack-web-app",
      "version": "1.0.0",
      "license": "ISC",
      "devDependencies": {
        "@babel/core": "^7.16.0",
        "@babel/eslint-parser": "^7.16.3",
        "@babel/preset-react": "^7.16.0",
        "@types/node": "^16.11.12",
        "@typescript-eslint/eslint-plugin": "^5.6.0",
        "@typescript-eslint/parser": "^5.6.0",
        "eslint": "^8.4.1",
        "eslint-config-airbnb": "^19.0.2",
        "eslint-config-airbnb-typescript": "^16.1.0",
        "eslint-config-prettier": "^8.3.0",
        "eslint-config-wesbos": "^3.0.2",
        "eslint-plugin-html": "^6.2.0",
        "eslint-plugin-import": "^2.25.3",
        "eslint-plugin-jsx-a11y": "^6.5.1",
        "eslint-plugin-prettier": "^4.0.0",
        "eslint-plugin-react": "^7.27.1",
        "eslint-plugin-react-hooks": "^4.3.0",
        "prettier": "^2.5.1",
        "typescript": "^4.5.2"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.23.5.tgz",
      "integrity": "sha512-CgH3s1a96LipHCmSUmYFPwY7MNx8C3avkq7i4Wl3cfa662ldtUe4VM1TPXX70pfmrlWTb6jLqTYrZyT2ZTJBgA==",
      "dev": true,
      "dependencies": {
        "@babel/highlight": "^7.23.4",
        "chalk": "^2.4.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.16.8",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.16.8.tgz",
      "integrity": "sha512-m7OkX0IdKLKPpBlJtF561YJal5y/jyI5fNfWbPxh2D/nbzzGI4qRyrD8xO2jB24u7l+5I2a43scCG2IrfjC50Q==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.16.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.16.0.tgz",
      "integrity": "sha512-mYZEvshBRHGsIAiyH5PzCFTCfbWfoYbO/jcSdXQSUQu1/pW0xDZAUP7KEc32heqWTAfAHhV9j1vH8Sav7l+JNQ==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.16.0",
        "@babel/generator": "^7.16.0",
        "@babel/helper-compilation-targets": "^7.16.0",
        "@babel/helper-module-transforms": "^7.16.0",
        "@babel/helpers": "^7.16.0",
        "@babel/parser": "^7.16.0",
        "@babel/template": "^7.16.0",
        "@babel/traverse": "^7.16.0",
        "@babel/types": "^7.16.0",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.1.2",
        "semver": "^6.3.0",
        "source-map": "^0.5.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/eslint-parser": {
      "version": "7.16.3",
      "resolved": "https://registry.npmjs.org/@babel/eslint-parser/-/eslint-parser-7.16.3.tgz",
      "integrity": "sha512-iB4ElZT0jAt7PKVaeVulOECdGe6UnmA/O0P9jlF5g5GBOwDVbna8AXhHRu4s27xQf6OkveyA8iTDv1jHdDejgQ==",
      "dev": true,
      "dependencies": {
        "eslint-scope": "^5.1.1",
        "eslint-visitor-keys": "^2.1.0",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": "^10.13.0 || ^12.13.0 || >=14.0.0"
      },
      "peerDependencies": {
        "@babel/core": ">=7.11.0",
        "eslint": "^7.5.0 || ^8.0.0"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.23.5.tgz",
      "integrity": "sha512-BPssCHrBD+0YrxviOa3QzpqwhNIXKEtOa2jQrm4FlmkC2apYgRnQcmPWiGZDlGxiNtltnUFolMe8497Esry+jA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.23.5",
        "@jridgewell/gen-mapping": "^0.3.2",
        "@jridgewell/trace-mapping": "^0.3.17",
        "jsesc": "^2.5.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.16.7.tgz",
      "integrity": "sha512-s6t2w/IPQVTAET1HitoowRGXooX8mCgtuP5195wD/QJPV6wYjpujCGF7JuMODVX2ZAJOf1GT6DT9MHEZvLOFSw==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.16.7.tgz",
      "integrity": "sha512-mGojBwIWcwGD6rfqgRXVlVYmPAv7eOpIemUG3dGnDdCY4Pae70ROij3XmfrH6Fa1h1aiDylpglbZyktfzyo/hA==",
      "dev": true,
      "dependencies": {
        "@babel/compat-data": "^7.16.4",
        "@babel/helper-validator-option": "^7.16.7",
        "browserslist": "^4.17.5",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-environment-visitor": {
      "version": "7.22.20",
      "resolved": "https://registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.22.20.tgz",
      "integrity": "sha512-zfedSIzFhat/gFhWfHtgWvlec0nqB9YEIVrpuwjruLlXfUSnA8cJB0miHKwqDnQ7d32aKo2xt88/xZptwxbfhA==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-function-name": {
      "version": "7.23.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.23.0.tgz",
      "integrity": "sha512-OErEqsrxjZTJciZ4Oo+eoZqeW9UIiOcuYKRJA4ZAgV9myA+pOXhhmpfNCKjEH/auVfEYVFJ6y1Tc4r0eIApqiw==",
      "dev": true,
      "dependencies": {
        "@babel/template": "^7.22.15",
        "@babel/types": "^7.23.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-hoist-variables": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.22.5.tgz",
      "integrity": "sha512-wGjk9QZVzvknA6yKIUURb8zY3grXCcOZt+/7Wcy8O2uctxhplmUPkOdlgoNhmdVee2c92JXbf1xpMtVNbfoxRw==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.16.7.tgz",
      "integrity": "sha512-LVtS6TqjJHFc+nYeITRo6VLXve70xmq7wPhWTqDJusJEgGmkAACWwMiTNrvfoQo6hEhFwAIixNkvB0jPXDL8Wg==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.16.7.tgz",
      "integrity": "sha512-gaqtLDxJEFCeQbYp9aLAefjhkKdjKcdh6DB7jniIGU3Pz52WAmP268zK0VgPz9hUNkMSYeH976K2/Y6yPadpng==",
      "dev": true,
      "dependencies": {
        "@babel/helper-environment-visitor": "^7.16.7",
        "@babel/helper-module-imports": "^7.16.7",
        "@babel/helper-simple-access": "^7.16.7",
        "@babel/helper-split-export-declaration": "^7.16.7",
        "@babel/helper-validator-identifier": "^7.16.7",
        "@babel/template": "^7.16.7",
        "@babel/traverse": "^7.16.7",
        "@babel/types": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.16.7.tgz",
      "integrity": "sha512-Qg3Nk7ZxpgMrsox6HreY1ZNKdBq7K72tDSliA6dCl5f007jR4ne8iD5UzuNnCJH2xBf2BEEVGr+/OL6Gdp7RxA==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-simple-access": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.16.7.tgz",
      "integrity": "sha512-ZIzHVyoeLMvXMN/vok/a4LWRy8G2v205mNP0XOuf9XRLyX5/u9CnVulUtDgUTama3lT+bf/UqucuZjqiGuTS1g==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-split-export-declaration": {
      "version": "7.22.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.22.6.tgz",
      "integrity": "sha512-AsUnxuLhRYsisFiaJwvp1QF+I3KjD5FOxut14q/GzovUe6orHLesW2C7d754kRm53h5gqrz6sFl6sxc4BVtE/g==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.23.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.23.4.tgz",
      "integrity": "sha512-803gmbQdqwdf4olxrX4AJyFBV/RTr3rSmOj0rKwesmzlfhYNDEs+/iOcznzpNWlJlIlTJC2QfPFcHB6DlzdVLQ==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.22.20",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.22.20.tgz",
      "integrity": "sha512-Y4OZ+ytlatR8AI+8KZfKuL5urKp7qey08ha31L8b3BwewJAoJamTzyvxPR/5D+KkdJCGPq/+8TukHBlY10FX9A==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.16.7.tgz",
      "integrity": "sha512-TRtenOuRUVo9oIQGPC5G9DgK4743cdxvtOw0weQNpZXaS16SCBi5MNjZF8vba3ETURjZpTbVn7Vvcf2eAwFozQ==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.16.7.tgz",
      "integrity": "sha512-9ZDoqtfY7AuEOt3cxchfii6C7GDyyMBffktR5B2jvWv8u2+efwvpnVKXMWzNehqy68tKgAfSwfdw/lWpthS2bw==",
      "dev": true,
      "dependencies": {
        "@babel/template": "^7.16.7",
        "@babel/traverse": "^7.16.7",
        "@babel/types": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/highlight": {
      "version": "7.23.4",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.23.4.tgz",
      "integrity": "sha512-acGdbYSfp2WheJoJm/EBBBLh/ID8KDc64ISZ9DYtBmC8/Q204PZJLHyzeB5qMzJ5trcOkybd78M4x2KWsUq++A==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.22.20",
        "chalk": "^2.4.2",
        "js-tokens": "^4.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.23.5.tgz",
      "integrity": "sha512-hOOqoiNXrmGdFbhgCzu6GiURxUgM27Xwd/aPuu8RfHEZPBzL1Z54okAHAQjXfcQNwvrlkAmAp4SlRTZ45vlthQ==",
      "dev": true,
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-syntax-jsx": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.16.7.tgz",
      "integrity": "sha512-Esxmk7YjA8QysKeT3VhTXvF6y77f/a91SIs4pWb4H2eWGQkCKFgQaG6hdoEVZtGsrAcb2K5BW66XsOErD4WU3Q==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-display-name": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.16.7.tgz",
      "integrity": "sha512-qgIg8BcZgd0G/Cz916D5+9kqX0c7nPZyXaP8R2tLNN5tkyIZdG5fEwBrxwplzSnjC1jvQmyMNVwUCZPcbGY7Pg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.16.7.tgz",
      "integrity": "sha512-8D16ye66fxiE8m890w0BpPpngG9o9OVBBy0gH2E+2AR7qMR2ZpTYJEqLxAsoroenMId0p/wMW+Blc0meDgu0Ag==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.16.7",
        "@babel/helper-module-imports": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-jsx": "^7.16.7",
        "@babel/types": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-development": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-development/-/plugin-transform-react-jsx-development-7.16.7.tgz",
      "integrity": "sha512-RMvQWvpla+xy6MlBpPlrKZCMRs2AGiHOGHY3xRwl0pEeim348dDyxeH4xBsMPbIMhujeq7ihE702eM2Ew0Wo+A==",
      "dev": true,
      "dependencies": {
        "@babel/plugin-transform-react-jsx": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-pure-annotations": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-pure-annotations/-/plugin-transform-react-pure-annotations-7.16.7.tgz",
      "integrity": "sha512-hs71ToC97k3QWxswh2ElzMFABXHvGiJ01IB1TbYQDGeWRKWz/MPUTh5jGExdHvosYKpnJW5Pm3S4+TA3FyX+GA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.16.7",
  
... (truncated)
```
## `package.json`
```
{
  "name": "react-js-fullstack-web-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {},
  "keywords": [],
  "author": "christian simbarashe",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.16.0",
    "@babel/eslint-parser": "^7.16.3",
    "@babel/preset-react": "^7.16.0",
    "@types/node": "^16.11.12",
    "@typescript-eslint/eslint-plugin": "^5.6.0",
    "@typescript-eslint/parser": "^5.6.0",
    "eslint": "^8.4.1",
    "eslint-config-airbnb": "^19.0.2",
    "eslint-config-airbnb-typescript": "^16.1.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-config-wesbos": "^3.0.2",
    "eslint-plugin-html": "^6.2.0",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.27.1",
    "eslint-plugin-react-hooks": "^4.3.0",
    "prettier": "^2.5.1",
    "typescript": "^4.5.2"
  }
}

```
## `README.md`
```
![Moorosi Holdings](./mwenje.png)

# Official web platform showcasing Tier-1 logistics, plant hire, and integrated facility management solutions. By Christian Simbarashe Dombodzvuku

A complete full-stack web-app created with `JAMstack`. ([Gatsby.js](https://www.gatsbyjs.org/) & [Sanity.io](https://sanity.io)).

# Moorosi Holdings and Logistics (Pty) Ltd
Official B2B Platform for Level 1 B-BBEE Heavy Logistics and Facility Management.

## Corporate Identity
- **Registration:** 2026/040477/07
- **Location:** Midrand, South Africa
- **CSD:** MAAA1687050

<a href="https://www.buymeacoffee.com/" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 45px !important;width: 162.75px !important;" ></a>

---

## Project Details

`Gatsby.js` was used for the frontend and `Sanity.io` for the headless CMS, with `graphql` used to source content

- [React.js](https://reactjs.org/)
- [Gatsby.js](https://www.gatsbyjs.org/)
  - [Gatsby-plugin-image](https://www.gatsbyjs.org/packages/gatsby-plugin-image/)
    - Static Image & Gatsby Image
  - Gatsby Page
    - Normal Pages
    - programmatically created pages
  - Gatsby Pagination
  - [Gatsby-plugin-local-search](https://www.gatsbyjs.org/packages/gatsby-plugin-local-search/)
  - [GraphQL](https://graphql.org/)
    - Static Query & Page Query
- [Sanity.io](https://sanity.io/)
  - Sanity Schema
  - Custom Blocks
    - Custom Rich-text Block
    - Custom Code Block
  - Studio Customization
- [React-PortableText](https://github.com/portabletext/react-portabletext)
- [Axios](https://www.npmjs.com/package/axios)

## Tools Used

- UI Design: Figma
- Code Editor: VS Code

## License

[MIT][mit]

✨🚀

[mit]: https://choosealicense.com/licenses/mit/

```
## `studio\components\SidebarList.js`
```
import S from "@sanity/desk-tool/structure-builder";
import { MdStar } from "react-icons/md";

function SidebarList() {
  return S.list()
    .title("Moorosi Holdings")
    .items([
      S.listItem()
        .title("Spotlight")
        .id("spotlightItems")
        .icon(MdStar)
        .child(S.editor().schemaType("spotlight").documentId("spotlightItems")),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "spotlight",
      ),
    ]);
}

export default SidebarList;

```
## `studio\config\@sanity\data-aspects.json`
```
{
  "listOptions": {}
}

```
## `studio\config\@sanity\default-layout.json`
```
{
  "toolSwitcher": {
    "order": [],
    "hidden": []
  }
}

```
## `studio\config\@sanity\default-login.json`
```
{
  "providers": {
    "mode": "append",
    "redirectOnSingle": false,
    "entries": []
  }
}

```
## `studio\config\@sanity\form-builder.json`
```
{
  "images": {
    "directUploads": true
  }
}

```
## `studio\package-lock.json`
```
{
  "name": "react-js-fullstack-web-app",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "react-js-fullstack-web-app",
      "version": "1.0.0",
      "license": "UNLICENSED",
      "dependencies": {
        "@sanity/base": "^2.25.4",
        "@sanity/code-input": "^2.27.0",
        "@sanity/core": "^2.25.0",
        "@sanity/default-layout": "^2.25.4",
        "@sanity/default-login": "^2.24.1",
        "@sanity/desk-tool": "^2.25.4",
        "@sanity/vision": "^2.25.4",
        "date-fns": "^2.28.0",
        "prop-types": "^15.7",
        "react": "^17.0",
        "react-dom": "^17.0",
        "react-icons": "^4.3.1",
        "styled-components": "^5.2.0"
      },
      "devDependencies": {
        "dotenv": "^16.0.0"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.1.tgz",
      "integrity": "sha512-lFMjJTrFL3j7L9yBxwYfCq2k6qqwHyzuUl/XBnif78PWTJYyL/dfowQHWE3sp6U6ZzqWiiIZnpTMO96zhkjwtg==",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.0",
        "@jridgewell/trace-mapping": "^0.3.9"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.23.5.tgz",
      "integrity": "sha512-CgH3s1a96LipHCmSUmYFPwY7MNx8C3avkq7i4Wl3cfa662ldtUe4VM1TPXX70pfmrlWTb6jLqTYrZyT2ZTJBgA==",
      "dependencies": {
        "@babel/highlight": "^7.23.4",
        "chalk": "^2.4.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.23.5.tgz",
      "integrity": "sha512-uU27kfDRlhfKl+w1U6vp16IuvSLtjAxdArVXPa9BvLkrr7CYIsxH5adpHObeAGY/41+syctUWOZ140a2Rvkgjw==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.23.5.tgz",
      "integrity": "sha512-Cwc2XjUrG4ilcfOw4wBAK+enbdgwAcAJCfGUItPBKR7Mjw4aEfAFYrLxeRp4jWgtNIKn3n2AlBOfwwafl+42/g==",
      "dependencies": {
        "@ampproject/remapping": "^2.2.0",
        "@babel/code-frame": "^7.23.5",
        "@babel/generator": "^7.23.5",
        "@babel/helper-compilation-targets": "^7.22.15",
        "@babel/helper-module-transforms": "^7.23.3",
        "@babel/helpers": "^7.23.5",
        "@babel/parser": "^7.23.5",
        "@babel/template": "^7.22.15",
        "@babel/traverse": "^7.23.5",
        "@babel/types": "^7.23.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/core/node_modules/debug": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/@babel/core/node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
    },
    "node_modules/@babel/generator": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.23.5.tgz",
      "integrity": "sha512-BPssCHrBD+0YrxviOa3QzpqwhNIXKEtOa2jQrm4FlmkC2apYgRnQcmPWiGZDlGxiNtltnUFolMe8497Esry+jA==",
      "dependencies": {
        "@babel/types": "^7.23.5",
        "@jridgewell/gen-mapping": "^0.3.2",
        "@jridgewell/trace-mapping": "^0.3.17",
        "jsesc": "^2.5.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.22.5.tgz",
      "integrity": "sha512-LvBTxu8bQSQkcyKOU+a1btnNFQ1dMAd0R6PyW3arXes06F6QLWLIrd681bxRPIXlrMGR3XYnW9JyML7dP3qgxg==",
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.22.15.tgz",
      "integrity": "sha512-QkBXwGgaoC2GtGZRoma6kv7Szfv06khvhFav67ZExau2RaXzy8MpHSMO2PNoP2XtmQphJQRHFfg77Bq731Yizw==",
      "dependencies": {
        "@babel/types": "^7.22.15"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.22.15.tgz",
      "integrity": "sha512-y6EEzULok0Qvz8yyLkCvVX+02ic+By2UdOhylwUOvOn9dvYc9mKICJuuU1n1XBI02YWsNsnrY1kc6DVbjcXbtw==",
      "dependencies": {
        "@babel/compat-data": "^7.22.9",
        "@babel/helper-validator-option": "^7.22.15",
        "browserslist": "^4.21.9",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-create-class-features-plugin": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.23.5.tgz",
      "integrity": "sha512-QELlRWxSpgdwdJzSJn4WAhKC+hvw/AtHbbrIoncKHkhKKR/luAlKkgBDcri1EzWAo8f8VvYVryEHN4tax/V67A==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.22.5",
        "@babel/helper-environment-visitor": "^7.22.20",
        "@babel/helper-function-name": "^7.23.0",
        "@babel/helper-member-expression-to-functions": "^7.23.0",
        "@babel/helper-optimise-call-expression": "^7.22.5",
        "@babel/helper-replace-supers": "^7.22.20",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.22.5",
        "@babel/helper-split-export-declaration": "^7.22.6",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-regexp-features-plugin": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.22.15.tgz",
      "integrity": "sha512-29FkPLFjn4TPEa3RE7GpW+qbE8tlsu3jntNYNfcGsc49LphF1PQIiD+vMZ1z1xVOKt+93khA9tc2JBs3kBjA7w==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.22.5",
        "regexpu-core": "^5.3.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-define-polyfill-provider": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.4.3.tgz",
      "integrity": "sha512-WBrLmuPP47n7PNwsZ57pqam6G/RGo1vw/87b0Blc53tZNGZ4x7YvZ6HgQe2vo1W/FR20OgjeZuGXzudPiXHFug==",
      "dependencies": {
        "@babel/helper-compilation-targets": "^7.22.6",
        "@babel/helper-plugin-utils": "^7.22.5",
        "debug": "^4.1.1",
        "lodash.debounce": "^4.0.8",
        "resolve": "^1.14.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/@babel/helper-define-polyfill-provider/node_modules/debug": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/@babel/helper-define-polyfill-provider/node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
    },
    "node_modules/@babel/helper-environment-visitor": {
      "version": "7.22.20",
      "resolved": "https://registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.22.20.tgz",
      "integrity": "sha512-zfedSIzFhat/gFhWfHtgWvlec0nqB9YEIVrpuwjruLlXfUSnA8cJB0miHKwqDnQ7d32aKo2xt88/xZptwxbfhA==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-function-name": {
      "version": "7.23.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.23.0.tgz",
      "integrity": "sha512-OErEqsrxjZTJciZ4Oo+eoZqeW9UIiOcuYKRJA4ZAgV9myA+pOXhhmpfNCKjEH/auVfEYVFJ6y1Tc4r0eIApqiw==",
      "dependencies": {
        "@babel/template": "^7.22.15",
        "@babel/types": "^7.23.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-hoist-variables": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.22.5.tgz",
      "integrity": "sha512-wGjk9QZVzvknA6yKIUURb8zY3grXCcOZt+/7Wcy8O2uctxhplmUPkOdlgoNhmdVee2c92JXbf1xpMtVNbfoxRw==",
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-member-expression-to-functions": {
      "version": "7.23.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.23.0.tgz",
      "integrity": "sha512-6gfrPwh7OuT6gZyJZvd6WbTfrqAo7vm4xCzAXOusKqq/vWdKXphTpj5klHKNmRUU6/QRGlBsyU9mAIPaWHlqJA==",
      "dependencies": {
        "@babel/types": "^7.23.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.22.15.tgz",
      "integrity": "sha512-0pYVBnDKZO2fnSPCrgM/6WMc7eS20Fbok+0r88fp+YtWVLZrp4CkafFGIp+W0VKw4a22sgebPT99y+FDNMdP4w==",
      "dependencies": {
        "@babel/types": "^7.22.15"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.23.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.23.3.tgz",
      "integrity": "sha512-7bBs4ED9OmswdfDzpz4MpWgSrV7FXlc3zIagvLFjS5H+Mk7Snr21vQ6QwrsoCGMfNC4e4LQPdoULEt4ykz0SRQ==",
      "dependencies": {
        "@babel/helper-environment-visitor": "^7.22.20",
        "@babel/helper-module-imports": "^7.22.15",
        "@babel/helper-simple-access": "^7.22.5",
        "@babel/helper-split-export-declaration": "^7.22.6",
        "@babel/helper-validator-identifier": "^7.22.20"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-optimise-call-expression": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.22.5.tgz",
      "integrity": "sha512-HBwaojN0xFRx4yIvpwGqxiV2tUfl7401jlok564NgB9EHS1y6QT17FmKWm4ztqjeVdXLuC4fSvHc5ePpQjoTbw==",
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.22.5.tgz",
      "integrity": "sha512-uLls06UVKgFG9QD4OeFYLEGteMIAa5kpTPcFL28yuCIIzsf6ZyKZMllKVOCZFhiZ5ptnwX4mtKdWCBE/uT4amg==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-remap-async-to-generator": {
      "version": "7.22.20",
      "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.22.20.tgz",
      "integrity": "sha512-pBGyV4uBqOns+0UvhsTO8qgl8hO89PmiDYv+/COyp1aeMcmfrfruz+/nCMFiYyFF/Knn0yfrC85ZzNFjembFTw==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.22.5",
        "@babel/helper-environment-visitor": "^7.22.20",
        "@babel/helper-wrap-function": "^7.22.20"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-replace-supers": {
      "version": "7.22.20",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.22.20.tgz",
      "integrity": "sha512-qsW0In3dbwQUbK8kejJ4R7IHVGwHJlV6lpG6UA7a9hSa2YEiAib+N1T2kr6PEeUT+Fl7najmSOS6SmAwCHK6Tw==",
      "dependencies": {
        "@babel/helper-environment-visitor": "^7.22.20",
        "@babel/helper-member-expression-to-functions": "^7.22.15",
        "@babel/helper-optimise-call-expression": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-simple-access": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.22.5.tgz",
      "integrity": "sha512-n0H99E/K+Bika3++WNL17POvo4rKWZ7lZEp1Q+fStVbUi8nxPQEBOlTmCOxW/0JsS56SKKQ+ojAe2pHKJHN35w==",
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-skip-transparent-ex
... (truncated)
```
## `studio\package.json`
```
{
  "name": "react-js-fullstack-web-app",
  "private": true,
  "version": "1.0.0",
  "description": "",
  "main": "package.json",
  "author": "Christian Simbarashe",
  "license": "UNLICENSED",
  "scripts": {
    "start": "sanity start",
    "build": "sanity build"
  },
  "keywords":[
      "Moorosi",
      "Logistics",
      "Facilities Management",
      "Civil Engineering"
  ],
  "dependencies": {
    "@sanity/base": "^2.25.4",
    "@sanity/code-input": "^2.27.0",
    "@sanity/core": "^2.25.0",
    "@sanity/default-layout": "^2.25.4",
    "@sanity/default-login": "^2.24.1",
    "@sanity/desk-tool": "^2.25.4",
    "@sanity/vision": "^2.25.4",
    "date-fns": "^2.28.0",
    "prop-types": "^15.7",
    "react": "^17.0",
    "react-dom": "^17.0",
    "react-icons": "^4.3.1",
    "styled-components": "^5.2.0"
  },
  "devDependencies": {
    "dotenv": "^16.0.0"
  }
}

```
## `studio\sanity.json`
```
{
  "root": true,
  "api": {
    "projectId": "0fw4oxom",
    "dataset": "production"
  },
  "project": {
    "name": "moorosiholdings"
  },
  "plugins": [
    "@sanity/base",
    "@sanity/default-layout",
    "@sanity/default-login",
    "@sanity/desk-tool",
    "@sanity/code-input"
  ],
  "env": {
    "development": {
      "plugins": [
        "@sanity/vision"
      ]
    }
  },
  "parts": [
    {
      "name": "part:@sanity/base/schema",
      "path": "./schemas/schema"
    },
    {
      "name": "part:@sanity/desk-tool/structure",
      "path": "./components/SidebarList"
    }
  ]
}

```
## `studio\schemas\documents\author.js`
```
import { FcBusinessman } from 'react-icons/fc';

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: FcBusinessman,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Tag',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'customImage',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'normalText',
    },
  ],
  preview: {
    select: {
      title: 'name',
      image: 'profileImage',
      slug: 'slug',
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};

```
## `studio\schemas\documents\blog.js`
```
import { format } from 'date-fns';
import { GiNotebook } from 'react-icons/gi';

export default {
  title: 'Post',
  name: 'blog', // name is the id, which we use to reference this object in code
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      title: 'Name',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Tag',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime', // datetime is a custom type in sanity
    },
    {
      title: 'Category',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'normalText',
      description: 'Overview',
    },
    {
      title: 'Activity Description',
      name: 'body',
      type: 'richText',
    },
  ],
  preview: {
    // customizing blog preview
    select: {
      // selecting which field I want to show on the preview, and preparing them (destructuring the props selected inside preview)
      image: 'coverImage',
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare({ image, title, publishedAt }) {
      return {
        title,
        media: image,
        subtitle: publishedAt
          ? format(new Date(publishedAt), 'p, dd/MM/yyy')
          : '',
      };
    },
  },
};

```
## `studio\schemas\documents\category.js`
```
import { MdCategory } from 'react-icons/md';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: MdCategory,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Tag',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'customImage',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'coverImage',
      slug: 'slug',
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};

```
## `studio\schemas\documents\objective.js`
```
import { FcComboChart } from 'react-icons/fc';

export default {
  name: 'objective',
  title: 'Objective',
  type: 'document',
  icon: FcComboChart,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'objectives',
      };
    },
  },
};

```
## `studio\schemas\documents\publication.js`
```
import { FcLibrary } from 'react-icons/fc';

export default {
  name: 'publication',
  title: 'Corporate Credentials & Documentation', // Changed from "Publication & Books"
  type: 'document',
  icon: FcLibrary,
  fields: [
    { 
      name: 'title', 
      title: 'Document or Certification Name', // Changed from "Book/Series Title"
      type: 'string' 
    },
    { 
      name: 'slug', 
      title: 'URL Identifier', // Changed from "Slug"
      type: 'slug', 
      options: { source: 'title' } 
    },
    {
      name: 'author',
      title: 'Issuing Department / Team', // Changed from "Author/Team"
      type: 'reference',
      to: [{ type: 'author' }],
    },
    { 
      name: 'coverImage', 
      title: 'Document Preview Image (or Badge)', // Changed from "Book Cover"
      type: 'customImage' 
    },
    {
      name: 'targetAudience',
      title: 'Restricted Stakeholders / Intended For', // Changed from "Target Audience"
      type: 'string',
      description: 'e.g., Tendering Committees, Legal Auditors, General Partners',
    },
    { 
      name: 'description', 
      title: 'Executive Summary', // Changed from "Synopsis"
      type: 'richText' 
    },
    {
      name: 'documentUpload',
      title: 'Certified Digital Copy (PDF/Office)', // Changed from "Document Upload"
      type: 'file',
      options: {
        storeOriginalFilename: true, 
      },
    },
  ],
};
```
## `studio\schemas\documents\service.js`
```
import { FcServices } from 'react-icons/fc';

export default {
  name: 'activity', // Keeping 'activity' prevents breaking existing Gatsby GraphQL queries
  title: 'Industrial Operational Pillars', // Changes how it looks in Sanity Studio
  type: 'document',
  icon: FcServices,
  fields: [
    { name: 'title', title: 'Service Name', type: 'string' },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    { name: 'coverImage', title: 'Cover Image', type: 'customImage' },
    { name: 'description', title: 'Short Description', type: 'normalText' },
    { name: 'body', title: 'Operational Deep-Dive', type: 'richText' }, // Added richText for deep dives
  ],
  preview: {
    select: {
      title: 'title',
      image: 'coverImage',
      slug: 'slug',
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};

```
## `studio\schemas\documents\spotlight.js`
```
import { FcRating } from "react-icons/fc";

export default {
  name: "spotlight",
  title: "Spotlight",
  type: "document",
  icon: FcRating,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "blogs",
      title: "Featured Publications & News",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "blog" }, { type: "publication" }],
        },
      ],
      validation: (Rule) => [
        Rule.error("Every entry should be unique").unique(),
        Rule.required().error("At least one entry is required"),
      ],
    },
    {
      name: "activity",
      title: "Core R&D Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "activity" }],
        },
      ],
      validation: (Rule) => [
        Rule.error("Every Item should be unique").unique(),
        Rule.required().error("At least one item is required"),
      ],
    },
  ],
};

```
## `studio\schemas\documents\value.js`
```
import { FcIdea } from 'react-icons/fc';

export default {
  name: 'value',
  title: 'Value',
  type: 'document',
  icon: FcIdea,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'values',
      };
    },
  },
};

```
## `studio\schemas\objects\customImage.js`
```
import React from 'react';
import { MdImage } from 'react-icons/md';

export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error("Alt text can't be empty").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      alt: 'alt',
    },
    prepare(selection) {
      const { imageUrl, alt } = selection;
      return {
        imageUrl,
        alt,
        media: () => <img src={imageUrl} alt={alt} className="custom-image" />, // added a prepare function to the preview object. This function returns a modified media property, which renders an image with the specified src, alt, and a CSS class of "custom-image", essentially ensuring that the generated HTML for the image includes that class name. Once the HTML is rendered in your frontend application, the CSS styles targeting that class name will apply to the images
      };
    },
  },
};

```
## `studio\schemas\objects\normalText.js`
```
export default {
  title: 'Normal Text',
  name: 'normalText',
  type: 'array',
  of: [
    // of, here, will the the document we want to see inside the array
    {
      title: 'Block',
      type: 'block', // possibly block type here is named after the html tag
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Bolden', value: 'strong' },
          { title: 'Italicize', value: 'em' },
        ],
        annotations: [],
      },
    },
  ],
};

```
## `studio\schemas\objects\richText.js`
```
export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H3', value: 'h3' },
      ],
      lists: [
        { title: 'Bullet List', value: 'bullet' },
        { title: 'Numbered List', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Bolden', value: 'strong' },
          { title: 'Italicize', value: 'em' },
        ],
        annotations: [
          {
            title: 'Create link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'Link URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Additional Notes (Optional)',
                name: 'note',
                type: 'string',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'customImage',
    },
  ],
};

```
## `studio\schemas\schema.js`
```
/* eslint-disable */
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
/* eslint-enable */

// import document schemas/
import blog from "./documents/blog";
import category from "./documents/category";
import author from "./documents/author";
import service from "./documents/service";
import publication from "./documents/publication";
import spotlight from "./documents/spotlight";
import objective from "./documents/objective";
import value from "./documents/value";

// import object
import richText from "./objects/richText";
import normalText from "./objects/normalText";
import customImage from "./objects/customImage";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // document schemas
    blog,
    category,
    author,
    service,
    publication,
    spotlight,
    objective,
    value,

    // object schemas
    normalText,
    richText,
    customImage,
  ]),
});

```
## `studio\tsconfig.json`
```
{
  // Note: This config is only used to help editors like VS Code understand/resolve
  // parts, the actual transpilation is done by babel. Any compiler configuration in
  // here will be ignored.
  "include": ["./node_modules/@sanity/base/types/**/*.ts", "./**/*.ts", "./**/*.tsx"]
}

```
## `web\.eslintrc.js`
```
module.exports = {
  rules: {},
};

```
## `web\gatsby-browser.js`
```
// fonts
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/600.css';
import '@fontsource/inter/500.css';

import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

```
## `web\gatsby-config.js`
```
require("dotenv").config("./.env");
const sanityConfig = require("./sanity-config.js");

module.exports = {
  siteMetadata: {
    title: `Moorosi Holdings & Logistics`,
    siteUrl: `https://moorosiholdings.co.za`,
    description: `Level 1 B-BBEE integrated logistics, civil engineering, mining support, and facility management services.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...sanityConfig,
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `blogs`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityBlog {
            nodes {
              id
              title
              publishedAt
              slug {
                current
              }
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
          }

        } 
        `,
        /* ref, index et. al. is to let the plugin know the result of the graphql query, and also specifieis for it what result we expect from the query */
        /* data is the result of the query */
        ref: "id",
        index: ["title"],
        store: ["id", "title", "publishedAt", "slug", "coverImage"],
        normalizer: ({ data }) =>
          data.allSanityBlog.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            publishedAt: node.publishedAt,
            slug: node.slug,
            coverImage: node.coverImage,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `categories`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityCategory {
            nodes{
              id
              title
              slug {
                current
              }
            }
          }
        } 
        `,
        ref: "id",
        index: ["title"],
        store: ["id", "title", "slug"],
        normalizer: ({ data }) =>
          data.allSanityCategory.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            slug: node.slug,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `activities`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityActivity {
            nodes{
              id
              title
              slug {
                current
              }
            }
          }
        } 
        `,
        ref: "id",
        index: ["title"],
        store: ["id", "title", "slug"],
        normalizer: ({ data }) =>
          data.allSanityActivity.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            slug: node.slug,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `authors`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityAuthor {
            nodes{
              id
              name
              slug {
                current
              }
              profileImage {
                alt
                asset{
                  gatsbyImageData
                }
              }
            }
          }
        } 
        `,
        ref: "id",
        index: ["name"],
        store: ["id", "name", "slug", "profileImage"],
        normalizer: ({ data }) =>
          data.allSanityAuthor.nodes.map((node) => ({
            id: node.id,
            name: node.name,
            slug: node.slug,
            profileImage: node.profileImage,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `publications`,
        engine: `flexsearch`,
        engineOptions: { tokenize: "forward" },
        query: `
    {
      allSanityPublication {
        nodes {
          id
          title
          slug { current }
          coverImage { alt, asset { gatsbyImageData } }
        }
      }
    } 
    `,
        ref: "id",
        index: ["title"],
        store: ["id", "title", "slug", "coverImage"],
        normalizer: ({ data }) =>
          data.allSanityPublication.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            slug: node.slug,
            coverImage: node.coverImage,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `objectives`,
        engine: `flexsearch`,
        engineOptions: { tokenize: "forward" },
        query: `
          {
            allSanityObjective {
              nodes { id, title }
            }
          } 
          `,
        ref: "id",
        index: ["title"],
        store: ["id", "title"],
        normalizer: ({ data }) =>
          data.allSanityObjective.nodes.map((node) => ({
            id: node.id,
            title: node.title,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `values`,
        engine: `flexsearch`,
        engineOptions: { tokenize: "forward" },
        query: `
          {
            allSanityValue {
              nodes { id, title }
            }
          } 
          `,
        ref: "id",
        index: ["title"],
        store: ["id", "title"],
        normalizer: ({ data }) =>
          data.allSanityValue.nodes.map((node) => ({
            id: node.id,
            title: node.title,
          })),
      },
    },
  ],
};

```
## `web\gatsby-node.js`
```
/* creating pages programmatically instead of creating them in files isnde the Pages folder */
exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 3;
  // resolving templates paths
  const singlePublicationTemplate = require.resolve('./src/templates/single-publication.js');
  const publicationListTemplate = require.resolve('./src/templates/publication-list.js');
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');
  const singleCategoryTemplate = require.resolve(
    './src/templates/single-category.js'
  );
  const singleActivityTemplate = require.resolve(
    './src/templates/single-activity.js'
  );
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');
  const categoryListTemplate = require.resolve(
    './src/templates/category-list.js'
  );
  const activityListTemplate = require.resolve(
    './src/templates/activity-list.js'
  );
  const singleAuthorTemplate = require.resolve(
    './src/templates/single-author.js'
  );
  const authorListTemplate = require.resolve('./src/templates/author-list.js');

  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityAuthor {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityActivity {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityPublication { nodes { id, slug { current } } }
    }
  `);

  if (result.errors) throw result.errors;

  // Added filters to ensure we only process nodes that actually have a slug
  const blogs = (result.data.allSanityBlog.nodes || []).filter(n => n.slug?.current);
  const categories = (result.data.allSanityCategory.nodes || []).filter(n => n.slug?.current);
  const authors = (result.data.allSanityAuthor.nodes || []).filter(n => n.slug?.current);
  const activities = (result.data.allSanityActivity.nodes || []).filter(n => n.slug?.current);
  const publications = (result.data.allSanityPublication.nodes || []).filter(n => n.slug?.current);
  
  // creating single blog pages
  blogs.forEach((blog) => {
    console.log("Creating page for:", blog.id, blog.slug?.current); 

    if (!blog.slug?.current) {
      console.warn(`SKIPPING blog with no slug: ${blog.id}`);
      return;
    }

    if (blog.slug.current.length > 75) {
      console.warn(
        `WARNING: Slug may be too long (${blog.slug.current.length} chars): ${blog.slug.current}`,
      );
    }

    createPage({
      path: `/spotlight/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });

  // creating single category pages
  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.slug.current}`,
      component: singleCategoryTemplate,
      context: { id: category.id },
    });
  });

  categories.forEach((category) => {
    console.log(
      "Creating category page for:",
      category.id,
      category.slug?.current,
    ); 

    if (!category.slug?.current) return;

    createPage({
      path: `/categories/${category.slug.current}`,
      component: singleCategoryTemplate,
      context: { id: category.id }, 
    });
  });

  // single Author pages
  authors.forEach((author) => {
    createPage({
      path: `/team/${author.slug.current}`,
      component: singleAuthorTemplate,
      context: { id: author.id },
    });
  });

  //  creating single activity pages
  activities.forEach((activity) => {
    createPage({
      path: `/activities/${activity.slug.current}`,
      component: singleActivityTemplate,
      context: { id: activity.id },
    });
  });

  // Creating single publication pages
  publications.forEach((pub) => {
    actions.createPage({
      path: `/publications/${pub.slug.current}`,
      component: singlePublicationTemplate,
      context: { id: pub.id },
    });
  });

  // blogs paginated pages
  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/spotlight` : `/spotlight/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });

  // category paginated pages
  const totalCategoryListPages = Math.ceil(categories.length / postsPerPage);
  Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/categories` : `/categories/${index + 1}`,
      component: categoryListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalCategoryListPages,
        currentPage: index + 1,
      },
    });
  });

  // Author paginated pages
  const totalAuthorListPages = Math.ceil(authors.length / postsPerPage);
  Array.from({ length: totalAuthorListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/team` : `/team/${index + 1}`,
      component: authorListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalAuthorListPages,
        currentPage: index + 1,
      },
    });
  });

  // activity paginated pages
  const totalActivityListPages = Math.ceil(activities.length / 7);
  Array.from({ length: totalActivityListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/activities` : `/activities/${index + 1}`,
      component: activityListTemplate,
      context: {
        limit: 7,
        offset: index * 7,
        numberOfPages: totalActivityListPages,
        currentPage: index + 1,
      },
    });
  });

  // publication paginated pages
  const totalPubPages = Math.ceil(publications.length / postsPerPage) || 1;
  Array.from({ length: totalPubPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/publications` : `/publications/${i + 1}`,
      component: publicationListTemplate,
      context: { limit: postsPerPage, offset: i * postsPerPage, numberOfPages: totalPubPages, currentPage: i + 1 },
    });
  });
};

```
## `web\gatsby-ssr.js`
```
import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

```
## `web\package-lock.json`
```
{
  "name": "react-js-fullstack-web-app",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "react-js-fullstack-web-app",
      "version": "1.0.0",
      "dependencies": {
        "@fontsource/inter": "^4.5.2",
        "@fontsource/poppins": "^4.5.1",
        "@portabletext/react": "^1.0.2",
        "@sanity/asset-utils": "^1.2.3",
        "axios": "^0.26.0",
        "babel-plugin-styled-components": "^2.0.2",
        "clsx": "^1.1.1",
        "date-fns": "^2.28.0",
        "gatsby": "^4.6.0",
        "gatsby-plugin-image": "^2.6.0",
        "gatsby-plugin-local-search": "^2.0.1",
        "gatsby-plugin-react-helmet": "^5.7.0",
        "gatsby-plugin-sharp": "^4.6.0",
        "gatsby-plugin-styled-components": "^5.6.0",
        "gatsby-source-filesystem": "^4.6.0",
        "gatsby-source-sanity": "^7.3.2",
        "gatsby-transformer-sharp": "^4.6.0",
        "normalize.css": "^8.0.1",
        "react": "^17.0.1",
        "react-dom": "^17.0.1",
        "react-helmet": "^6.1.0",
        "react-icons": "^4.3.1",
        "react-syntax-highlighter": "^15.4.5",
        "react-use-flexsearch": "^0.1.1",
        "styled-components": "^5.3.3"
      }, 
      "devDependencies": {
        "dotenv": "^16.0.0"
      }
    },
    "node_modules/@aashutoshrathi/word-wrap": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/@aashutoshrathi/word-wrap/-/word-wrap-1.2.6.tgz",
      "integrity": "sha512-1Yjs2SvM8TflER/OD3cOjhWWOZb58A2t7wpE2S9XfBYTiIl+XFhQG2bjy4Pu1I+EAlCNUzRDYDdFwFYUKvXcIA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.1.tgz",
      "integrity": "sha512-lFMjJTrFL3j7L9yBxwYfCq2k6qqwHyzuUl/XBnif78PWTJYyL/dfowQHWE3sp6U6ZzqWiiIZnpTMO96zhkjwtg==",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.0",
        "@jridgewell/trace-mapping": "^0.3.9"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@ardatan/relay-compiler": {
      "version": "12.0.0",
      "resolved": "https://registry.npmjs.org/@ardatan/relay-compiler/-/relay-compiler-12.0.0.tgz",
      "integrity": "sha512-9anThAaj1dQr6IGmzBMcfzOQKTa5artjuPmw8NYK/fiGEMjADbSguBY2FMDykt+QhilR3wc9VA/3yVju7JHg7Q==",
      "dependencies": {
        "@babel/core": "^7.14.0",
        "@babel/generator": "^7.14.0",
        "@babel/parser": "^7.14.0",
        "@babel/runtime": "^7.0.0",
        "@babel/traverse": "^7.14.0",
        "@babel/types": "^7.0.0",
        "babel-preset-fbjs": "^3.4.0",
        "chalk": "^4.0.0",
        "fb-watchman": "^2.0.0",
        "fbjs": "^3.0.0",
        "glob": "^7.1.1",
        "immutable": "~3.7.6",
        "invariant": "^2.2.4",
        "nullthrows": "^1.1.1",
        "relay-runtime": "12.0.0",
        "signedsource": "^1.0.0",
        "yargs": "^15.3.1"
      },
      "bin": {
        "relay-compiler": "bin/relay-compiler"
      },
      "peerDependencies": {
        "graphql": "*"
      }
    },
    "node_modules/@ardatan/relay-compiler/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@ardatan/relay-compiler/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@ardatan/relay-compiler/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/@ardatan/relay-compiler/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/@ardatan/relay-compiler/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@ardatan/relay-compiler/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.23.5.tgz",
      "integrity": "sha512-CgH3s1a96LipHCmSUmYFPwY7MNx8C3avkq7i4Wl3cfa662ldtUe4VM1TPXX70pfmrlWTb6jLqTYrZyT2ZTJBgA==",
      "dependencies": {
        "@babel/highlight": "^7.23.4",
        "chalk": "^2.4.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.23.5.tgz",
      "integrity": "sha512-uU27kfDRlhfKl+w1U6vp16IuvSLtjAxdArVXPa9BvLkrr7CYIsxH5adpHObeAGY/41+syctUWOZ140a2Rvkgjw==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.23.5.tgz",
      "integrity": "sha512-Cwc2XjUrG4ilcfOw4wBAK+enbdgwAcAJCfGUItPBKR7Mjw4aEfAFYrLxeRp4jWgtNIKn3n2AlBOfwwafl+42/g==",
      "dependencies": {
        "@ampproject/remapping": "^2.2.0",
        "@babel/code-frame": "^7.23.5",
        "@babel/generator": "^7.23.5",
        "@babel/helper-compilation-targets": "^7.22.15",
        "@babel/helper-module-transforms": "^7.23.3",
        "@babel/helpers": "^7.23.5",
        "@babel/parser": "^7.23.5",
        "@babel/template": "^7.22.15",
        "@babel/traverse": "^7.23.5",
        "@babel/types": "^7.23.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/eslint-parser": {
      "version": "7.23.3",
      "resolved": "https://registry.npmjs.org/@babel/eslint-parser/-/eslint-parser-7.23.3.tgz",
      "integrity": "sha512-9bTuNlyx7oSstodm1cR1bECj4fkiknsDa1YniISkJemMY3DGhJNYBECbe6QD/q54mp2J8VO66jW3/7uP//iFCw==",
      "dependencies": {
        "@nicolo-ribaudo/eslint-scope-5-internals": "5.1.1-v1",
        "eslint-visitor-keys": "^2.1.0",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": "^10.13.0 || ^12.13.0 || >=14.0.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.11.0",
        "eslint": "^7.5.0 || ^8.0.0"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.23.5.tgz",
      "integrity": "sha512-BPssCHrBD+0YrxviOa3QzpqwhNIXKEtOa2jQrm4FlmkC2apYgRnQcmPWiGZDlGxiNtltnUFolMe8497Esry+jA==",
      "dependencies": {
        "@babel/types": "^7.23.5",
        "@jridgewell/gen-mapping": "^0.3.2",
        "@jridgewell/trace-mapping": "^0.3.17",
        "jsesc": "^2.5.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.22.5.tgz",
      "integrity": "sha512-LvBTxu8bQSQkcyKOU+a1btnNFQ1dMAd0R6PyW3arXes06F6QLWLIrd681bxRPIXlrMGR3XYnW9JyML7dP3qgxg==",
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.22.15.tgz",
      "integrity": "sha512-QkBXwGgaoC2GtGZRoma6kv7Szfv06khvhFav67ZExau2RaXzy8MpHSMO2PNoP2XtmQphJQRHFfg77Bq731Yizw==",
      "dependencies": {
        "@babel/types": "^7.22.15"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.22.15.tgz",
      "integrity": "sha512-y6EEzULok0Qvz8yyLkCvVX+02ic+By2UdOhylwUOvOn9dvYc9mKICJuuU1n1XBI02YWsNsnrY1kc6DVbjcXbtw==",
      "dependencies": {
        "@babel/compat-data": "^7.22.9",
        "@babel/helper-validator-option": "^7.22.15",
        "browserslist": "^4.21.9",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-create-class-features-plugin": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.23.5.tgz",
      "integrity": "sha512-QELlRWxSpgdwdJzSJn4WAhKC+hvw/AtHbbrIoncKHkhKKR/luAlKkgBDcri1EzWAo8f8VvYVryEHN4tax/V67A==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.22.5",
        "@babel/helper-environment-visitor": "^7.22.20",
        "@babel/helper-function-name": "^7.23.0",
        "@babel/helper-member-expression-to-functions": "^7.23.0",
        "@babel/helper-optimise-call-expression": "^7.22.5",
        "@babel/helper-replace-supers": "^7.22.20",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.22.5",
        "@babel/helper-split-export-declaration": "^7.22.6",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-regexp-features-plugin": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.22.15.tgz",
      "integrity": "sha512-29FkPLFjn4TPEa3RE7GpW+qbE8tlsu3jntNYNfcGsc49LphF1PQIiD+vMZ1z1xVOKt+93khA9tc2JBs3kBjA7w==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.22.5",
        "regexpu-core": "^5.3.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-define-polyfill-provider": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.4.3.tgz",
      "integrity": "sha512-WBrLmuPP47n7PNwsZ57pqam6G/RGo1vw/87b0Blc53tZNGZ4x7YvZ6HgQe2vo1W/FR20OgjeZuGXzudPiXHFug==",
      "dependencies": {
        "@babel/helper-compilation-targets": "^7.22.6",
        "@babel/helper-plugin-utils": "^7.22.5",
        "debug": "^4.1.1",
        "lodash.debounce": "^4.0.8",
        "resolve": "^1.14.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/@babel/helper-environment-visitor": {
      "version": "7.22.20",
      "resolved": "https://registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.22.20.tgz",
      "integrity": "sha512-zfedSIzFhat/gFhWfHtgWvlec0nqB9YEIVrpuwjruLlXfUSnA8cJB0miHKwqDnQ7d32aKo2xt88/xZptwxbfhA==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-function-name": {
      "version": "7.23.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.23.0.tgz",
      "integrity": "sha512-OErEqsrxjZTJciZ4Oo+eoZqeW9UIiOcuYKRJA4ZAgV9myA+pOXhhmpfNCKjEH/auVfEYVFJ6y1Tc4r0eIApqiw==",
      "dependencies": {
        "@babel/template": "^7.22.15",
        "@babel/types": "^7.23.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-hoist-variables": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.22.5.tgz",
      "integrity": "sha512-wGjk9QZVzvknA6yKIUURb8zY3grXCcOZt+/7Wcy8O2uctxhplmUPkOdlgoNhmdVee2c92JXbf1xpMtVNbfoxRw==",
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-member-expression-to-functions": {
      "version": "7.23.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.23.0.tgz",
      "integrity": "sha512-6gfrPwh7OuT6gZyJZvd6WbTfrqAo7vm4xCzAXOusKqq/vWdKXphTpj5klHKNmRUU6/QRGlBsyU9mAIPaWHlqJA==",
      "dependencies": {
        "@babel/types": "^7.23.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.22.15.tgz",
      "integrity": "sha512-0pYVBnDKZO2fnSPCrgM/6WMc7eS20Fbok+0r88fp+YtWVLZrp4CkafFGIp+W0VKw4a22sgebPT99y+FDNMdP4w==",
      "dependencies": {
        "@ba
... (truncated)
```
## `web\package.json`
```
{
  "name": "moorosi-holdings-corporate-portal",
  "version": "1.0.0",
  "private": true,
  "description": "Official Corporate Platform for Moorosi Holdings & Logistics (Pty) Ltd",
  "author": "Christian Simbarashe",
  "keywords": [
    "gatsby"
  ],
  "scripts": {
    "dev": "gatsby develop",
    "start": "gatsby develop",
    "build": "gatsby build",
    "serve": "gatsby serve",
    "clean": "gatsby clean"
  },
  "dependencies": {
    "@fontsource/inter": "^4.5.2",
    "@fontsource/poppins": "^4.5.1",
    "@portabletext/react": "^1.0.2",
    "@sanity/asset-utils": "^1.2.3",
    "axios": "^0.26.0",
    "babel-plugin-styled-components": "^2.0.2",
    "clsx": "^1.1.1",
    "date-fns": "^2.28.0",
    "gatsby": "^4.6.0",
    "gatsby-plugin-image": "^2.6.0",
    "gatsby-plugin-local-search": "^2.0.1",
    "gatsby-plugin-react-helmet": "^5.7.0",
    "gatsby-plugin-sharp": "^4.6.0",
    "gatsby-plugin-styled-components": "^5.6.0",
    "gatsby-source-filesystem": "^4.6.0",
    "gatsby-source-sanity": "^7.3.2",
    "gatsby-transformer-sharp": "^4.6.0",
    "normalize.css": "^8.0.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-helmet": "^6.1.0",
    "react-icons": "^4.3.1",
    "react-syntax-highlighter": "^15.4.5",
    "react-use-flexsearch": "^0.1.1",
    "styled-components": "^5.3.3"
  },
  "devDependencies": {
    "dotenv": "^16.0.0"
  },
  "overrides": {
    "msgpackr": "^1.10.2",
    "lmdb": "^2.8.5"
  }
}

```
## `web\README.md`
```
# Diginotive Solutions (Pvt) Ltd

A complete full-stack web-app created with `JAMstack`. ([Gatsby.js](https://www.gatsbyjs.org/) & [Sanity.io](https://sanity.io)).
Built to showcase Diginotive's R&D capabilities, AI publications, and digital transformation services.

## Project Details
`Gatsby.js` was used for the frontend and `Sanity.io` for the headless CMS, with `graphql` used to source content.

- [React.js](https://reactjs.org/)
- [Gatsby.js](https://www.gatsbyjs.org/)
- [Sanity.io](https://sanity.io/)

## License
[MIT][mit]
```
## `web\sanity-config.js`
```
module.exports = {
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
};

```
## `web\src\components\author\AuthorGrid.js`
```
import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';

function AuthorGrid({ authors }) {
  return (
    <AuthorGridStyles>
      {authors.map((item) => (
        <AuthorItem
          key={item.id}
          name={item.name}
          slug={item.slug}
          profileImage={item.profileImage}
        />
      ))}
    </AuthorGridStyles>
  );
}

export default AuthorGrid;

```
## `web\src\components\author\AuthorItem.js`
```
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { AuthorItemStyles } from "../../styles/author/AuthorItemStyles";
import { Title } from "../typography/Title";

function AuthorItem({ name, slug, profileImage }) {
  return (
    <AuthorItemStyles className="author-item" to={`/team/${slug.current}`}>
      {profileImage && (
        <GatsbyImage
          image={profileImage.asset.gatsbyImageData}
          alt={profileImage.alt || name}
          className="profileImage"
        />
      )}
      <Title>{name}</Title>
    </AuthorItemStyles>
  );
}

export default AuthorItem;

```
## `web\src\components\blog\BlogGrid.js`
```
import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';

function BlogGrid({ blogs, prefix = "spotlight" }) {
  return (
    <BlogGridStyles>
      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            path={blog.slug.current}
            title={blog.title}
            categories={blog.categories}
            image={{
              imageData: blog.coverImage?.asset?.gatsbyImageData,
              altText: blog.coverImage?.alt,
            }}
            publishedAt={blog.publishedAt}
            // Use the item's own prefix if it has one, otherwise fallback to the grid default
            prefix={blog.prefix || prefix} 
          />
        ))}
    </BlogGridStyles>
  );
}

export default BlogGrid;
```
## `web\src\components\blog\BlogItem.js`
```
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import React from 'react';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';
import ParagraphText from '../typography/ParagraphText';
import { Title } from '../typography/Title';

function BlogItem({ path, title, image, categories = [], publishedAt, prefix }) {
  return (
    <BlogItemStyles>
      <Link to={`/${prefix}/${path}`}>
        {image?.imageData && (
          <GatsbyImage
            image={image.imageData}
            alt={image.altText || title}
            className="img"
          />
        )}
      </Link>
      <Link to={`/${prefix}/${path}`}>
        <Title className="title">{title}</Title>
      </Link>
      {publishedAt && (
        <ParagraphText className="publishedAt">
          {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      )}
      {categories.length > 0 && (
        <ParagraphText className="categoriesText">
          {categories.map((item, index) => (
            <span key={item.slug.current}>
              <Link to={`/categories/${item.slug.current}`}>{item.title}</Link>
              {index < categories.length - 1 ? ', ' : ''}
            </span>
          ))}
        </ParagraphText>
      )}
    </BlogItemStyles>
  );
}

export default BlogItem;
```
## `web\src\components\buttons\ActionButton.js`
```
import React from 'react';
import ActionButtonStyles from '../../styles/buttons/ActionButtonStyles';

// remove rest here to see its effect and also why we need it, and the effect of 2 func params in react
function ActionButton({ children, ...rest }) {
  return (
    <ActionButtonStyles
      className="mobileMenuBtn"
      role="button"
      tabIndex={0}
      {...rest}
    >
      {children}
    </ActionButtonStyles>
  );
}

export default ActionButton;

```
## `web\src\components\buttons\Button.js`
```
import React from 'react';
import { buttonTypes } from '../../constants/buttonTypes';
import { ButtonStyles } from '../../styles/buttons/ButtonStyles';

function Button({ children, tag, variant = buttonTypes.primary, ...props }) {
  return (
    // tag allows us to render the component as either a tag we will specify. More explanation is needed // possibly because ButtonStyles is a styled components Link underneath??
    <ButtonStyles as={tag} {...props} variant={variant}>
      {children}
    </ButtonStyles>
  );
}

export default Button;

```
## `web\src\components\category\ActivityGrid.js`
```
import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import ActivityItem from './ActivityItem';

function ActivityGrid({ activities }) {
  return (
    <CategoryGridStyles>
      {activities.map((item) => (
        <ActivityItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
          slug={item.slug}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default ActivityGrid;

```
## `web\src\components\category\ActivityItem.js`
```
import React from 'react';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';
import ConstrainedPortableText from '../ConstrainedPortableText';

function ActivityItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">
        <ConstrainedPortableText value={description} />
      </div>
      <Button to={`/activities/${slug.current}`} variant={buttonTypes.outline}>
        More
      </Button>
    </CategoryItemStyles>
  );
}

export default ActivityItem;

```
## `web\src\components\category\CategoryGrid.js`
```
import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import CategoryItem from './CategoryItem';

function CategoryGrid({ categories }) {
  return (
    <CategoryGridStyles>
      {categories.map((item) => (
        <CategoryItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
          slug={item.slug}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default CategoryGrid;

```
## `web\src\components\category\CategoryItem.js`
```
import React from 'react';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';

function CategoryItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">
        <MyPortableText value={description} />
      </div>
      <Button to={`/categories/${slug.current}`} variant={buttonTypes.outline}>
        Explore
      </Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;

```
## `web\src\components\category\ObjectiveGrid.js`
```
import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import ObjectiveItem from './ObjectiveItem';

function ObjectiveGrid({ objectives }) {
  return (
    <CategoryGridStyles>
      {objectives.map((item) => (
        <ObjectiveItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default ObjectiveGrid;

```
## `web\src\components\category\ObjectiveItem.js`
```
import React from 'react';
import MyPortableText from '../MyPortableText';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title'; 

function ObjectiveItem({ title, description }) { 
  return (
    <CategoryItemStyles className="objective-card"> 
      <Title className="title">{title}</Title> 
      <div className="text-wrap-container">
        <MyPortableText value={description} />
      </div>
    </CategoryItemStyles>
  );
}

export default ObjectiveItem;
```
## `web\src\components\category\ValueGrid.js`
```
import React from "react";
import { ValueGridStyles } from "../../styles/category/CategoryGridStyles";
import ValueItem from "./ValueItem";

function ValueGrid({ DiginotiveValues }) {
  return (
    <ValueGridStyles>
      {DiginotiveValues.map((item) => (
        <ValueItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
        />
      ))}
    </ValueGridStyles>
  );
}

export default ValueGrid;

```
## `web\src\components\category\ValueItem.js`
```
import React from 'react';
import MyPortableText from '../MyPortableText';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';

function ValueItem({ title, description }) {
  return (
    <CategoryItemStyles className="value-card"> 
      <Title className="title">{title}</Title>
      <div className="text-wrap-container">
        <MyPortableText value={description} />
      </div>
    </CategoryItemStyles>
  );
}

export default ValueItem;
```
## `web\src\components\ConstrainedPortableText.js`
```
import { PortableText } from '@portabletext/react';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import { GatsbyImage } from 'gatsby-plugin-image';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';
import { CustomImageStyles } from '../styles/CustomImageStyles';

const constrainedPortableTextComponents = {
  block: {
    normal: ({ children }) => {
      // Check if children is not null and is an object
      if (!children || typeof children !== 'object') {
        // Handle the case where children is not an object or is null, for example, render an empty block
        return null;
      }

      // Extract text content from JSON structure
      const extractTextContent = (data) => {
        if (Array.isArray(data)) {
          return data.map((item) => extractTextContent(item)).join(' ');
        }
        if (typeof data === 'object' && data !== null) {
          // Filter out keys that correspond to node names
          const filteredValues = Object.values(data).filter(
            (value) =>
              typeof value === 'object' && value !== null && '_type' in value
          );
          return filteredValues
            .map((value) => extractTextContent(value))
            .join(' ');
        }
        if (typeof data === 'string') {
          return data;
        }
        return '';
      };

      // Extract text content from children
      const fullText = extractTextContent(children);

      // Check if the number of characters exceeds the limit
      if (fullText.length > 250) {
        // Slice the text to get the first 250 characters and add an ellipsis
        const truncatedText = `${fullText.slice(0, 250)} ...`;

        // Render the truncated text
        return <ParagraphText>{truncatedText}</ParagraphText>;
      }

      // If the number of characters is within the limit, render the full text
      return <ParagraphText>{fullText}</ParagraphText>;
    },
    h1: ({ children }) => <Title>{children}</Title>,
  },
  marks: {
    code: ({ children }) => (
      <SyntaxHighlighter style={theme} className="bodyCode">
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
  },
  types: {
    customCode: ({ value }) => (
      <SyntaxHighlighter
        style={theme}
        language={value.code.language}
        className="bodyCode"
      >
        {String(value.code.code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);

      const image = {
        url: imageData.url,
        width,
        height,
      };

      const gatsbyImageData = getSanityImageData({
        image,
        layout: 'constrained',
      });

      return (
        <CustomImageStyles>
          <GatsbyImage
            image={gatsbyImageData}
            alt={value.alt}
            className="bodyImage custom-image"
          />
        </CustomImageStyles>
      );
    },
  },
};

function ConstrainedPortableText({ value }) {
  return (
    <PortableText
      value={value}
      components={constrainedPortableTextComponents}
    />
  );
}

export default ConstrainedPortableText;

```
## `web\src\components\Footer.js`
```
import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          "Moorosi Holdings and Logistics (Pty) Ltd is a 100% black-owned, Level 1 B-BBEE company based in Gauteng. We specialize in heavy machinery transport, civil engineering, and comprehensive soft and hard facility management services tailored to the public and private sectors."
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          Centurion, Gauteng
        </ParagraphText>
        <ParagraphText className="copyright">
          © Moorosi Holdings and Logistics (Pty) Ltd | Reg: 2026/040477/07 |{' '}
          {new Date().getFullYear()} | All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;

```
## `web\src\components\Header.js`
```
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { MdClose, MdMenu, MdSearch } from 'react-icons/md';
import HeaderStyles from '../styles/HeaderStyles';
import Logo from './Logo';
import ActionButton from './buttons/ActionButton';
import { menu } from '../constants/menu';
import { SearchModalContext } from '../contexts/searchModalContext';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { openSearchModal } = useContext(SearchModalContext);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isNavOpen]);

  const handleSearchModalOpen = () => {
    openSearchModal();
  };

  const handleNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <Logo />
          </div>
          <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
            <div className="mobileIcon">
              <div className="searchIcon">
                <div
                  className="searchIcon__wrapper"
                  onClick={handleSearchModalOpen}
                  onKeyDown={handleSearchModalOpen}
                  tabIndex={0}
                  role="button"
                >
                  <MdSearch />
                </div>
              </div>
              <ActionButton
                className="mobileMenuBtn"
                onKeyDown={() => setIsNavOpen(true)}
                onClick={() => setIsNavOpen(true)}
              >
                <MdMenu />
              </ActionButton>
            </div>
            {/* functionality to close menu upon clicking outside nav menu in mobile */}
            {isNavOpen && (
              <div
                aria-label="Close Menu"
                role="button"
                tabIndex={0}
                className="mobileNavBg"
                onKeyDown={() => setIsNavOpen(false)}
                onClick={() => setIsNavOpen(false)}
              />
            )}
            <nav>
              <ActionButton
                className="mobileMenuCloseBtn"
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              >
                <MdClose />
              </ActionButton>
              <ul>
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={handleNavItemClick}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="searchIcon">
                  <div
                    className="searchIcon__wrapper"
                    onClick={handleSearchModalOpen}
                    onKeyDown={handleSearchModalOpen}
                    tabIndex={0}
                    role="button"
                  >
                    <MdSearch />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;

```
## `web\src\components\homePage\FeaturedBlogs.js`
```
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FeaturedBlogsStyles } from "../../styles/homePage/FeaturedBlogsStyles";
import BlogGrid from "../blog/BlogGrid";
import ParagraphText from "../typography/ParagraphText";
import { SectionTitle } from "../typography/Title";

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          blogs {
            ... on SanityBlog {
              _type
              id
              title
              publishedAt
              slug {
                current
              }
              categories {
                title
                slug {
                  current
                }
              }
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
            ... on SanityPublication {
              _type
              id
              title
              publishedAt: _createdAt
              slug {
                current
              }
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const spotlightNode = data.allSanitySpotlight.nodes[0];
  const rawBlogs = spotlightNode?.blogs || [];

  // Map the items and determine the URL prefix based on the Sanity Type
  const spotlightBlogs = rawBlogs.map((item) => ({
    ...item,
    categories: item.categories || [],
    prefix: item._type === "publication" ? "publications" : "spotlight",
  }));

  return (
    <FeaturedBlogsStyles>
      <SectionTitle className="centre__text">
        Latest Projects, News & Updates
      </SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Stay informed with the latest insights into Moorosi Holdings' fleet deployments, heavy-lift projects, promotions and corporate milestones.
      </ParagraphText>
      <BlogGrid blogs={spotlightBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;

/// colors
/// #1ff4b4 - light green, #2c313e - dark bluish, #cbdd46 - gold

```
## `web\src\components\homePage\HeroSection.js`
```
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import ParagraphText from "../typography/ParagraphText";
import Button from "../buttons/Button";

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
              Precision Logistics & Integrated Infrastructure Solutions
            </h1>
            <ParagraphText className="hero__text">
              Moorosi Holdings & Logistics is an industry-leading Level 1 B-BBEE partner. We provide the heavy-lifting power and technical precision required to move South Africa’s largest assets and maintain its most critical environments.
            </ParagraphText>
            <Button to="/activities" tag={Link} className="hero__button">
              Command Your Project
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/demtMalnutrition.jpg" 
              alt="Moorosi Holdings Heavy Plant and Logistics fleet"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;

```
## `web\src\components\homePage\TopCategories.js`
```
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { TopCategoriesStyles } from "../../styles/homePage/TopCategoriesStyles";
// import CategoryGrid from '../category/CategoryGrid';
import ActivityGrid from "../category/ActivityGrid";
import ParagraphText from "../typography/ParagraphText";
import { SectionTitle } from "../typography/Title";
import ValueGrid from "../category/ValueGrid";
import ObjectiveGrid from "../category/ObjectiveGrid";

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          activity {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
      allSanityObjective {
        nodes {
          id
          title
          _rawDescription
        }
      }
      allSanityValue {
        nodes {
          id
          title
          _rawDescription
        }
      }
    }
  `);
  const spotlightNode = data.allSanitySpotlight.nodes[0];
  const activities = spotlightNode?.activity || [];
  const objectives = data.allSanityObjective?.nodes || [];
  const DiginotiveValues = data.allSanityValue?.nodes || [];

  return (
    <TopCategoriesStyles>
      <SectionTitle className="centre__text">Industrial Capabilities</SectionTitle>
      <ParagraphText className="centre__text">
        Mining Support, Civil Engineering, Heavy Plant Logistics, and Complete Hard/Soft Facilities Management.
      </ParagraphText>
      <SectionTitle className="centre__text">Vision</SectionTitle>
      <ParagraphText className="hero__text centre__text">
        To be the premier partner in infrastructure development, heavy logistics, and facility management across South Africa, driving operational excellence.
      </ParagraphText>
      <SectionTitle className="centre__text">Mission</SectionTitle>
      <ParagraphText className="hero__text centre__text">
        To deliver safe, reliable, and high-quality services in construction, transport, and facility maintenance, tailored to the dynamic needs of the public and private sectors. To provide unshakeable operational continuity for our clients through precision heavy-lift logistics, certified civil engineering, and proactive facility management.
      </ParagraphText>
      <SectionTitle className="centre__text">Our Values</SectionTitle>
      <ValueGrid DiginotiveValues={DiginotiveValues} />
      <SectionTitle className="centre__text">Our Objectives</SectionTitle>
      <ObjectiveGrid objectives={objectives} />
      <ActivityGrid activities={activities} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;


```
## `web\src\components\Layout.js`
```
import React from 'react';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css/normalize.css';
import Footer from './Footer';
import Search from './search/SearchModal';
import { SearchModalContextProvider } from '../contexts/searchModalContext';

function Layout({ children }) {
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Search /> {/* adding it to the component tree for it to work */}
      <Header />
      <main>{children}</main>
      <Footer />
    </SearchModalContextProvider>
  );
}

export default Layout;

```
## `web\src\components\Logo.js`
```
import React from 'react';
// import { GrTechnology } from 'react-icons/gr';
import { StaticImage } from 'gatsby-plugin-image';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  const width = 50;
  const height = 50;
  return (
    <LogoStyles to="/">
      <StaticImage src="../images/mwenje.jpg" width={width} height={height} />
    </LogoStyles>
  );
}

export default Logo;

```
## `web\src\components\MyPortableText.js`
```
import { PortableText } from '@portabletext/react';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import { GatsbyImage } from 'gatsby-plugin-image';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';
import { CustomImageStyles } from '../styles/CustomImageStyles';

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
  },
  marks: {
    code: ({ children }) => (
      <SyntaxHighlighter style={theme} className="bodyCode">
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
  },
  types: {
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);

      const image = {
        url: imageData.url,
        width,
        height,
      };

      const gatsbyImageData = getSanityImageData({
        image,
        layout: 'constrained',
      });

      return (
        <CustomImageStyles>
          <GatsbyImage
            image={gatsbyImageData}
            alt={value.alt}
            className="bodyImage custom-image"
          />
        </CustomImageStyles>
      );
    },
  },
};

function MyPortableText({ value }) {
  return <PortableText value={value} components={myPortableTextComponents} />;
}

export default MyPortableText;

```
## `web\src\components\PageHeader.js`
```
import React from 'react';
import { PageHeaderStyles } from '../styles/PageHeaderStyles';
import ParagraphText from './typography/ParagraphText';
import { SectionTitle } from './typography/Title';

function PageHeader({ title, description, children, className }) {
  return (
    <div className={className}>
      <PageHeaderStyles>
        <SectionTitle>{title}</SectionTitle>
        <ParagraphText>{description}</ParagraphText>
        {children}
      </PageHeaderStyles>
    </div>
  );
}

export default PageHeader;

```
## `web\src\components\PageSpace.js`
```
import React from 'react';
import { PageSpaceStyles } from '../styles/PageSpaceStyles';

function PageSpace({ top, bottom, children }) {
  return (
    <PageSpaceStyles top={top} bottom={bottom}>
      {children}
    </PageSpaceStyles>
  );
}

export default PageSpace;

```
## `web\src\components\Pagination.js`
```
import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PaginationStyles } from '../styles/PaginationStyles';
import ParagraphText from './typography/ParagraphText';

function Pagination({ baseURL, numberOfPages, currentPage }) {
  const prevPage = currentPage - 1 <= 1 ? '' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <div className="container">
      <PaginationStyles>
        <div className="icons">
          <Link
            to={`${baseURL}/${prevPage}`}
            className={clsx(currentPage <= 1 && 'disabled')}
          >
            <FiChevronLeft /> Prev
          </Link>
          <Link
            to={`${baseURL}/${nextPage}`}
            className={clsx(currentPage >= numberOfPages && 'disabled')}
          >
            Next <FiChevronRight />
          </Link>
        </div>
        <ParagraphText>
          page {currentPage} of {numberOfPages} pages
        </ParagraphText>
      </PaginationStyles>
    </div>
  );
}

export default Pagination;

```
## `web\src\components\search\SearchField.js`
```
import React from "react";
import { FiSearch } from "react-icons/fi";
import { SearchFieldStyles } from "../../styles/search/SearchFieldStyles";

function SearchField({ value, setValue, onFocus }) {
  return (
    <SearchFieldStyles>
      <input
        type="text"
        placeholder="Search Moorosi Holdings"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={onFocus && onFocus}
      />
      <FiSearch className="searchIcon" />
    </SearchFieldStyles>
  );
}

export default SearchField;

```
## `web\src\components\search\SearchModal.js`
```
import axios from "axios";
import { graphql, useStaticQuery } from "gatsby";
import React, { useContext, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

import { SearchModalContext } from "../../contexts/searchModalContext";
import { SearchModalStyles } from "../../styles/search/SearchModalStyles";
import ActionButton from "../buttons/ActionButton";
import SearchResult from "./SearchResult";
import SearchField from "./SearchField";

const query = graphql`
  {
    localSearchBlogs {
      publicStoreURL
      publicIndexURL
    }
    localSearchCategories {
      publicStoreURL
      publicIndexURL
    }
    localSearchAuthors {
      publicStoreURL
      publicIndexURL
    }
    localSearchActivities {
      publicStoreURL
      publicIndexURL
    }
    localSearchPublications {
      publicStoreURL
      publicIndexURL
    }
    localSearchObjectives {
      publicStoreURL
      publicIndexURL
    }
    localSearchValues {
      publicStoreURL
      publicIndexURL
    }
  }
`;

function Search() {
  const { isSearchModalOpen, closeSearchModal } =
    useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState("");

  const [blogsIndexStore, setBlogsIndexStore] = useState(null);
  const [categoriesIndexStore, setCategoriesIndexStore] = useState(null);
  const [authorsIndexStore, setAuthorsIndexStore] = useState(null);
  const [activitiesIndexStore, setActivitiesIndexStore] = useState(null);
  const [publicationsIndexStore, setPublicationsIndexStore] = useState(null);
  const [objectivesIndexStore, setObjectivesIndexStore] = useState(null);
  const [valuesIndexStore, setValuesIndexStore] = useState(null);

  const data = useStaticQuery(query);

  useEffect(() => {
    if (isSearchModalOpen) {
      document.body.style.overflow = "hidden";
      setSearchQuery("");
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isSearchModalOpen]);

  const handleOnFocus = async () => {
    if (blogsIndexStore && publicationsIndexStore) return;
    const [
      { data: blogsIndex },
      { data: blogsStore },
      { data: categoriesIndex },
      { data: categoriesStore },
      { data: authorsIndex },
      { data: authorsStore },
      { data: activitiesIndex },
      { data: activitiesStore },
      { data: publicationsIndex },
      { data: publicationsStore },
      { data: objectivesIndex },
      { data: objectivesStore },
      { data: valuesIndex },
      { data: valuesStore },
    ] = await Promise.all([
      axios.get(`${data.localSearchBlogs.publicIndexURL}`),
      axios.get(`${data.localSearchBlogs.publicStoreURL}`),
      axios.get(`${data.localSearchCategories.publicIndexURL}`),
      axios.get(`${data.localSearchCategories.publicStoreURL}`),
      axios.get(`${data.localSearchAuthors.publicIndexURL}`),
      axios.get(`${data.localSearchAuthors.publicStoreURL}`),
      axios.get(`${data.localSearchActivities.publicIndexURL}`),
      axios.get(`${data.localSearchActivities.publicStoreURL}`),
      axios.get(`${data.localSearchPublications.publicIndexURL}`),
      axios.get(`${data.localSearchPublications.publicStoreURL}`),
      axios.get(`${data.localSearchObjectives.publicIndexURL}`),
      axios.get(`${data.localSearchObjectives.publicStoreURL}`),
      axios.get(`${data.localSearchValues.publicIndexURL}`),
      axios.get(`${data.localSearchValues.publicStoreURL}`),
    ]);

    setBlogsIndexStore({ index: blogsIndex, store: blogsStore });
    setCategoriesIndexStore({ index: categoriesIndex, store: categoriesStore });
    setAuthorsIndexStore({ index: authorsIndex, store: authorsStore });
    setActivitiesIndexStore({ index: activitiesIndex, store: activitiesStore });
    setPublicationsIndexStore({
      index: publicationsIndex,
      store: publicationsStore,
    });
    setObjectivesIndexStore({ index: objectivesIndex, store: objectivesStore });
    setValuesIndexStore({ index: valuesIndex, store: valuesStore });
  };

  if (!isSearchModalOpen) return null;

  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton className="close" onClick={() => closeSearchModal()}>
          <MdClose />
        </ActionButton>
        <SearchField
          value={searchQuery}
          setValue={setSearchQuery}
          onFocus={handleOnFocus}
        />
        {searchQuery &&
          blogsIndexStore &&
          categoriesIndexStore &&
          authorsIndexStore &&
          activitiesIndexStore &&
          publicationsIndexStore &&
          objectivesIndexStore &&
          valuesIndexStore && (    
            <div className="search__result">
              <SearchResult
                searchQuery={searchQuery}
                blogsIndexStore={blogsIndexStore}
                categoriesIndexStore={categoriesIndexStore}
                authorsIndexStore={authorsIndexStore}
                activitiesIndexStore={activitiesIndexStore}
                publicationsIndexStore={publicationsIndexStore}
                objectivesIndexStore={objectivesIndexStore}
                valuesIndexStore={valuesIndexStore}
              />
            </div>
          )}
      </div>
    </SearchModalStyles>
  );
}

export default Search;

```
## `web\src\components\search\SearchResult.js`
```
import React from "react";
import { useFlexSearch } from "react-use-flexsearch";
import {
  AuthorSearchResultItem,
  BlogSearchResultItem,
  CategorySearchResultItem,
  ActivitySearchResultItem,
  PublicationSearchResultItem,
  ObjectiveSearchResultItem,
  ValueSearchResultItem,
} from "./SearchResultItem";
import ParagraphText from "../typography/ParagraphText";

function SearchResult({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
  authorsIndexStore,
  activitiesIndexStore,
  publicationsIndexStore,
  objectivesIndexStore,
  valuesIndexStore,
}) {
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store,
  );
  const categoriesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(categoriesIndexStore.index),
    categoriesIndexStore.store,
  );
  const authorsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(authorsIndexStore.index),
    authorsIndexStore.store,
  );
  const activitiesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(activitiesIndexStore.index),
    activitiesIndexStore.store,
  );
  const publicationsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(publicationsIndexStore.index),
    publicationsIndexStore.store,
  );
  const objectivesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(objectivesIndexStore.index),
    objectivesIndexStore.store,
  );
  const valuesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(valuesIndexStore.index),
    valuesIndexStore.store,
  );

  if (
    blogsResult.length === 0 &&
    categoriesResult.length === 0 &&
    authorsResult.length === 0 &&
    activitiesResult.length === 0 &&
    publicationsResult.length === 0 &&
    objectivesResult.length === 0 &&
    valuesResult.length === 0
  ) {
    return <ParagraphText>No Result Found.</ParagraphText>;
  }

  return (
    <>
      {blogsResult.length > 0 && (
        <>
          <ParagraphText>Insights & News</ParagraphText>
          {blogsResult.map((result) => (
            <BlogSearchResultItem key={result.id} blog={result} />
          ))}
        </>
      )}
      {publicationsResult.length > 0 && (
        <>
          <ParagraphText>Corporate Credentials</ParagraphText>
          {publicationsResult.map((result) => (
            <PublicationSearchResultItem key={result.id} publication={result} />
          ))}
        </>
      )}
      {activitiesResult.length > 0 && (
        <>
          <ParagraphText>Operational Pillars</ParagraphText>
          {activitiesResult.map((result) => (
            <ActivitySearchResultItem key={result.id} activity={result} />
          ))}
        </>
      )}
      {categoriesResult.length > 0 && (
        <>
          <ParagraphText>Sectors</ParagraphText>
          {categoriesResult.map((result) => (
            <CategorySearchResultItem key={result.id} category={result} />
          ))}
        </>
      )}
      {authorsResult.length > 0 && (
        <>
          <ParagraphText>Leadership Team</ParagraphText>
          {authorsResult.map((result) => (
            <AuthorSearchResultItem key={result.id} author={result} />
          ))}
        </>
      )}
      {objectivesResult.length > 0 && (
        <>
          <ParagraphText>Our Objectives</ParagraphText>
          {objectivesResult.map((result) => (
            <ObjectiveSearchResultItem key={result.id} objective={result} />
          ))}
        </>
      )}
      {valuesResult.length > 0 && (
        <>
          <ParagraphText>Our Values</ParagraphText>
          {valuesResult.map((result) => (
            <ValueSearchResultItem key={result.id} value={result} />
          ))}
        </>
      )}
    </>
  );
}

export default SearchResult;

```
## `web\src\components\search\SearchResultItem.js`
```
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import { format } from "date-fns";
import { SearchResultItemStyles } from "../../styles/search/SearchResultItemStyles";
import ParagraphText from "../typography/ParagraphText";
import { Title } from "../typography/Title";

import { SearchModalContext } from "../../contexts/searchModalContext";

function BlogSearchResultItem({ blog }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/spotlight/${blog.slug?.current}`} 
      onClick={() => closeSearchModal()}
    >
      {/* Safely check if the image and asset exist */}
      {blog.coverImage?.asset && (
        <GatsbyImage
          image={blog.coverImage.asset.gatsbyImageData}
          alt={blog.coverImage.alt || blog.title}
          className="img"
        />
      )}
      <div>
        <Title className="title">{blog.title}</Title>
        <ParagraphText className="categoriesText">
          {format(new Date(blog.publishedAt), "p, MMMM dd, yyyy")}
        </ParagraphText>
      </div>
    </SearchResultItemStyles>
  );
}

function CategorySearchResultItem({ category }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/categories/${category.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      <Title className="title">{category.title}</Title>
    </SearchResultItemStyles> 
  );
}

function AuthorSearchResultItem({ author }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/team/${author.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      {/* Safety check to prevent crash if image is missing */}
      {author.profileImage && (
        <GatsbyImage
          image={author.profileImage.asset.gatsbyImageData}
          alt={author.profileImage.alt || author.name}
          className="authorProfileImg"
        />
      )}
      <Title className="title">{author.name}</Title>
    </SearchResultItemStyles>
  );
}

function ActivitySearchResultItem({ activity }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/activities/${activity.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      <Title className="title">{activity.title}</Title>
    </SearchResultItemStyles>
  );
}

function PublicationSearchResultItem({ publication }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/publications/${publication.slug?.current}`}
      onClick={() => closeSearchModal()}
    >
      {publication.coverImage?.asset && (
        <GatsbyImage
          image={publication.coverImage.asset.gatsbyImageData}
          alt={publication.coverImage.alt || publication.title}
          className="img"
        />
      )}
      <Title className="title">{publication.title}</Title>
    </SearchResultItemStyles>
  );
}

function ObjectiveSearchResultItem({ objective }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles to="/" onClick={() => closeSearchModal()}>
      <Title className="title">{objective.title}</Title>
    </SearchResultItemStyles>
  );
}

function ValueSearchResultItem({ value }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles to="/" onClick={() => closeSearchModal()}>
      <Title className="title">{value.title}</Title>
    </SearchResultItemStyles>
  );
}

export {
  CategorySearchResultItem,
  BlogSearchResultItem,
  AuthorSearchResultItem,
  ActivitySearchResultItem,
  PublicationSearchResultItem,
  ObjectiveSearchResultItem,
  ValueSearchResultItem,
};

```
## `web\src\components\seo.js`
```
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

// query copied from graphql for this site
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const seo = {
    title: title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: description || site.siteMetadata.description,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
    </Helmet>
  );
};

export default SEO;

```
## `web\src\components\typography\ParagraphText.js`
```
import React from 'react';
import { ParagraphTextStyles } from '../../styles/typography/ParagraphTextStyles';

function ParagraphText({ children, ...props }) {
  return <ParagraphTextStyles {...props}>{children}</ParagraphTextStyles>;
}

export default ParagraphText;

```
## `web\src\components\typography\Title.js`
```
import React from 'react';
import {
  SectionTitleStyles,
  TitleStyles,
} from '../../styles/typography/SectionTitleStyles';

export const SectionTitle = ({ children, tag, ...props }) => (
  <SectionTitleStyles as={tag} {...props}>
    {children}
  </SectionTitleStyles>
);

export const Title = ({ children, tag, ...props }) => (
  <TitleStyles as={tag} {...props}>
    {children}
  </TitleStyles>
);

```
## `web\src\constants\buttonTypes.js`
```
export const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
  outline: 'outline',
};

```
## `web\src\constants\menu.js`
```
export const menu = [
  { title: 'Home', path: '/' },
  { title: 'Insights & News', path: '/spotlight' },
  { title: 'Core Services', path: '/activities' },
  { title: 'Publications', path: '/publications' },
  { title: 'About Us', path: '/team' },
];
```
## `web\src\constants\socialLinks.js`
```
import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
  FaLinkedin,
} from 'react-icons/fa';

import { IoIosMailUnread } from 'react-icons/io';

export const socialLinks = [
  {
    name: 'telephone',
    url: 'tel:+27739775953',
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: 'mail',
    url: 'mailto:moorosiholdings@gmail.com',
    icon: <IoIosMailUnread />,
  },
  {
    name: 'whatsapp',
    url: `https://wa.me/27739775953?text=${encodeURIComponent(
      "Hello Moorosi Holdings, I am interested in your logistics and facility management capabilities. Please contact me."
    )}`,
    icon: <FaWhatsappSquare />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/moorosiholdings',
    icon: <FaFacebook />,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/moorosiholdings_za',
    icon: <FaTwitter />,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/moorosiholdings',
    icon: <FaLinkedin />,
  },
];

```
## `web\src\contexts\searchModalContext.js`
```
import React, { createContext, useMemo, useState } from 'react';

const SearchModalContext = createContext();

const SearchModalContextProvider = ({ children }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const initialValue = useMemo(
    () => ({
      isSearchModalOpen,
      openSearchModal: () => {
        setIsSearchModalOpen(true);
      },
      closeSearchModal: () => {
        setIsSearchModalOpen(false);
      },
    }),
    [isSearchModalOpen]
  );

  return (
    <SearchModalContext.Provider value={initialValue}>
      {children}
    </SearchModalContext.Provider>
  );
};

export { SearchModalContext, SearchModalContextProvider };

```
## `web\src\pages\404.js`
```
import React from 'react';
import { Link } from 'gatsby';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/typography/ParagraphText';
import { SectionTitle } from '../components/typography/Title';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';

function NotFoundPage() {
  return (
    <PageSpace>
      <div className="container">
        <NotFoundPageStyles>
          <SectionTitle className="title">Server Response : 404</SectionTitle>
          <ParagraphText>
            Error Type - The page you are looking for is not found. <br /> Go
            Back to{' '}
            <Link to="/" className="link">
              Home Page
            </Link>
            {/* add more Links */}
          </ParagraphText>
        </NotFoundPageStyles>
      </div>
    </PageSpace>
  );
}

export default NotFoundPage;

```
## `web\src\pages\index.js`
```
import React from "react";
import FeaturedBlogs from "../components/homePage/FeaturedBlogs";
import HeroSection from "../components/homePage/HeroSection";
import TopCategories from "../components/homePage/TopCategories";
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Moorosi Holdings" />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
      <TopCategories />
    </div>
  </>
);

export default IndexPage;

```
## `web\src\styles\author\AuthorGridStyles.js`
```
import styled from 'styled-components';

export const AuthorGridStyles = styled.div`
  display: grid;
  margin-top: 3.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
`;

```
## `web\src\styles\author\AuthorItemStyles.js`
```
import { Link } from 'gatsby';
import styled from 'styled-components';

export const AuthorItemStyles = styled(Link)`
  background-color: var(--black-2);
  border-radius: 8px;
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  .profileImage {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
`;

```
## `web\src\styles\author\SingleAuthorStyles.js`
```
import styled from 'styled-components';

export const SingleAuthorStyles = styled.div`
  .author-header {
    text-align: center;
  }
  .profileImage {
    height: 150px;
    width: 150px;
    margin: 0 auto;
    border-radius: 50%;
    margin-bottom: 2rem;
  }
  .name {
    margin-bottom: 1rem;
  }
  .bio {
    margin: 0 auto;
    max-width: 500px;
  }
  .hr {
    margin: 3rem 0;
    color: var(--gray);
  }
`;

```
## `web\src\styles\blog\BlogGridStyles.js`
```
import styled from 'styled-components';

export const BlogGridStyles = styled.div`
  margin-top: 3.5rem;
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 3rem;
  }
`;

```
## `web\src\styles\blog\BlogItemStyles.js`
```
import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  display: inline-block;
  border-radius: 12px;
  .img {
    height: 250px;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    [data-main-image] {
      transition: 0.3s ease-in-out transform;
    }
  }
  .title {
    margin-bottom: 0.5rem;
  }
  .publishedAt {
    margin-bottom: 0.3rem;
  }
  &:hover {
    .img [data-main-image] {
      transform: scale(1.05);
    }
  }
  .categoriesText {
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .title {
      margin-bottom: 0.5rem;
    }
  }
`;

```
## `web\src\styles\blog\SingleBlogStyles.js`
```
import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  max-width: 700px;
  margin: 0 auto;
  .blog-cover-image {
    height: 300px;
    margin-bottom: 2rem;
  }
  .title {
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }
  .publishedAt {
    margin-bottom: 0.5rem;
  }
  .categoriesText,
  .author,
  .publishedAt {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    svg {
      height: 20px;
      width: 20px;
    }
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .hr {
    margin: 2rem 0;
    color: var(--gray);
  }
  .body {
    margin-top: 2rem;
    h1,
    h2,
    h3,
    h4 {
      margin: 1rem 0;
    }
    .bodyImage {
      margin: 2rem 0;
    }
    .bodyCode {
      margin: 2rem 0;
      font-size: 2rem;
    }
  }
`;

```
## `web\src\styles\buttons\ActionButtonStyles.js`
```
import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  border: 2px solid var(--primary);
  padding: 0.6rem;
  border-radius: 8px;
  color: var(--primary);
  transition-property: color, background-color;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 2.5rem;
  }
  * {
    pointer-events: none;
  }
  &:hover {
    background-color: var(--primary);
    color: var(--white-1);
  }
  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
    svg {
      font-size: 1.8rem;
    }
  }
`;

```
## `web\src\styles\buttons\ButtonStyles.js`
```
import { Link } from 'gatsby';
import styled from 'styled-components';
import { buttonTypes } from '../../constants/buttonTypes';

export const ButtonStyles = styled(Link)`
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  background: ${({ variant }) =>
    variant === buttonTypes.primary
      ? 'linear-gradient(135deg, var(--secondary), var(--primary))'
      : variant === buttonTypes.secondary
      ? 'var(--white-1)'
      : 'transparent'};
  border: ${({ variant }) =>
    variant === buttonTypes.outline ? '2px solid var(--primary)' : 'none'};
  color: ${({ variant }) =>
    variant === buttonTypes.secondary ? 'var(--black-1)' : 'var(--white)'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ variant }) =>
      variant === buttonTypes.outline 
      ? '0 0 15px rgba(0, 210, 255, 0.4) inset, 0 0 15px rgba(0, 210, 255, 0.4)' 
      : '0 8px 20px rgba(0, 123, 255, 0.4)'};
  }

  @media only screen and (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
  }
`;
```
## `web\src\styles\category\CategoryGridStyles.js`
```
import styled from 'styled-components';

export const CategoryGridStyles = styled.div`
  display: grid;
  margin-top: 3.5rem;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  /* TARGET BOTH VALUE AND OBJECTIVE CARDS */
  .value-card .bodyImage,
  .objective-card .bodyImage {
    width: 160px !important;    /* Mandated width */
    height: 160px !important;   /* Mandated height */
    float: left;                /* Magazine text wrap */
    margin: 0 2rem 1rem 0;      /* Margin: Right and Bottom */
    border-radius: 8px;
    overflow: hidden;
    shape-outside: inset(0%);   /* Ensures text flows around the square */
  }

  /* FORCE DISTORTION/FILL FOR BOTH */
  .value-card .bodyImage img,
  .objective-card .bodyImage img {
    object-fit: fill !important; 
    width: 100% !important;
    height: 100% !important;
  }

  /* CLEARFIX to keep cards from breaking */
  .value-card .text-wrap-container::after,
  .objective-card .text-wrap-container::after {
    content: "";
    display: table;
    clear: both;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    
    .value-card .bodyImage,
    .objective-card .bodyImage {
      width: 120px !important;
      height: 120px !important;
      margin: 0 1.5rem 0.5rem 0;
    }
  }
`;

export const ValueGridStyles = styled.div`
  display: grid;
  margin-top: 1rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); /* Increased min-width to allow room for wrapping */

  /* TARGET ONLY IMAGES INSIDE THE VALUE GRID */
  .value-card .bodyImage {
    width: 160px !important;    /* Mandated width */
    height: 160px !important;   /* Mandated height */
    float: left;               /* This triggers the text wrap */
    margin: 0 2rem 1rem 0;     /* Space between image and wrapping text */
    border-radius: 8px;
    overflow: hidden;
    shape-outside: inset(0%);  /* Tells the text to follow the square boundary */
  }

  /* FORCE THE DISTORTION */
  .value-card .bodyImage img {
    object-fit: fill !important; 
    width: 100% !important;
    height: 100% !important;
  }

  /* CLEARFIX to prevent cards from collapsing */
  .value-card .text-wrap-container::after {
    content: "";
    display: table;
    clear: both;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    .value-card .bodyImage {
      width: 120px !important;
      height: 120px !important;
      margin: 0 1.5rem 0.5rem 0;
    }
  }
`;
```
## `web\src\styles\category\CategoryItemStyles.js`
```
import styled from 'styled-components';

export const CategoryItemStyles = styled.div`
  background: var(--black-2);
  padding: 3rem 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 210, 255, 0.3);
  }

  .title {
    margin-bottom: 1.5rem;
  }
  .text {
    margin-bottom: 2.5rem;
    color: var(--white-1);
  }
  .custom-image {
    max-width: 100%;
    max-height: 250px;
    border-radius: 8px;
    margin-bottom: 1.5rem;
  }
`;
```
## `web\src\styles\category\SingleCategoryStyles.js`
```
import styled from 'styled-components';

export const SingleCategoryStyles = styled.div`
  .pageHeader {
    position: relative;
    padding: 2rem 0;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #0d121f, #0d121fe0 30%, #4a46eb14);
      z-index: -1;
    }
    .coverImage {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .custom-image {
      max-width: 200px;
      max-height: 200px;
    }
  }
  @media only screen and (max-width: 768px) {
    .pageHeader {
      padding: 0;
      &:after {
        display: none;
      }
    }
    .coverImage {
      display: none;
    }
  }
`;

```
## `web\src\styles\CustomImageStyles.js`
```
import styled from 'styled-components';

export const CustomImageStyles = styled.div`
  .custom-image {
    max-width: 180px;
    max-height: 180px;
    border-radius: 10px;
    margin: 15px;
  }
`;

```
## `web\src\styles\FooterStyles.js`
```
import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 5rem 0 2rem 0;
  text-align: center;
  background: linear-gradient(135deg, #052A00, #081000);
  .footer__text {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 400px;
  }
  .footer__menuList {
    margin-top: 1rem;
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        color: var(--white-1);
        font-size: 1.6rem;
      }
    }
  }
  .footer__socialList {
    margin-top: 1.5rem;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 20px;
        color: var(--gray);
      }
      :hover {
        a {
          color: var(--white-1);
        }
      }
    }
  }
  .copyright {
    margin-top: 1rem;
    color: var(--gray);
    font-size: 1.2rem;
  }
`;

```
## `web\src\styles\GlobalStyles.js`
```
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #00D2FF;
    --secondary: #007BFF;
    --darkBlue: #0A1128;
    --darkPurple: #1A0B2E;
    --black-1: #040814;
    --black-2: #0B1325;
    --white-1: #E2E8F0;
    --gray: #8A98B0;
    --grey: var(--gray);
    --white: white;
    --black: black;
  }

  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    font-family: 'Inter', sans-serif;
    background: var(--black-1);
    color: var(--white);
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }

  img,
  svg {
    height: 100%;
    width: 100%;
  }

  li,
  ul {
    list-style: none;
  }

  /* Global Animations */
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glowPulse {
    0% {
      box-shadow: 0 0 5px rgba(0, 210, 255, 0.2);
    }
    50% {
      box-shadow: 0 0 20px rgba(0, 210, 255, 0.6);
    }
    100% {
      box-shadow: 0 0 5px rgba(0, 210, 255, 0.2);
    }
  }
`;

export default GlobalStyles;
```
## `web\src\styles\HeaderStyles.js`
```
import styled from 'styled-components';

export default styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  padding: 1rem 0;
  transition: background 0.3s ease-in-out;
  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav__wrapper {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      li {
        &:hover {
          a {
            background: #2c313e;
          }
        }
        a {
          color: var(--white-1);
          display: inline-block;
          text-decoration: none;
          font-size: 1.6rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
        }
      }
    }
  }

  .searchIcon {
    cursor: pointer;
    font-size: 25px;
    .searchIcon__wrapper {
      border-radius: 6px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #0a2b63;
    }
  }
  .mobileMenuCloseBtn,
  .mobileNavBg,
  .mobileIcon,
  .mobileMenuBtn {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .mobileMenuCloseBtn,
    .mobileNavBg,
    .mobileIcon,
    .mobileMenuBtn {
      display: initial;
    }
    .nav__wrapper {
      nav {
        z-index: 1002;
        position: fixed;
        top: 0;
        right: 0;
        width: 80%;
        transform: translateX(100%);
        background-color: rgba(34, 11, 34, 0.95);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s ease transform;
        ul {
          width: 90%;
          margin: 0 auto;
          flex-direction: column;
          li {
            display: block;
            margin: 0.5rem 0;
            &:hover {
              a {
                background: var(--black-1);
              }
            }
            a {
              width: 100%;
              padding: 0.5rem 1rem;
              border-radius: 4px;
            }
            &.searchIcon {
              display: none;
            }
          }
        }
        .mobileMenuCloseBtn {
          color: crimson;
          position: absolute;
          top: 10px;
          right: 10px;
          border-color: crimson;
          &:hover {
            background-color: crimson;
            color: var(--white);
          }
        }
      }
      &.open {
        nav {
          transform: translateX(0);
        }
      }
      .mobileNavBg {
        z-index: 1001;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transition: opacity 0.6s linear 0s;
        background: rgba(0, 0, 0, 0.5);
      }
    }
    .mobileIcon {
      display: flex;
      gap: 1rem;
    }
    .mobileMenuBtn {
      svg {
        font-size: 2.5rem;
      }
    }
  }
`;

```
## `web\src\styles\homePage\FeaturedBlogsStyles.js`
```
import styled from 'styled-components';

export const FeaturedBlogsStyles = styled.div`
  padding: 5rem 0;
  .featuredBlogs__text {
    max-width: 450px;
  }
  .centre__text {
    text-align: center;
  }
`;

```
## `web\src\styles\homePage\HeroSectionStyles.js`
```
import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .container {
    height: 100%;
    z-index: 2;
  }
  .hero__wrapper {
    width: 100%;
    height: 100%;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 60%;
      height: 100%;
      background: linear-gradient(135deg, #0A1128 0%, rgba(10, 17, 40, 0) 100%); 
      z-index: -1;
    }
    .left {
      width: 50%;
      padding: 100px 0 50px 0;
      animation: fadeUp 1s ease-out forwards;
      .hero__heading {
        max-width: 550px;
        font-size: 4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: '700';
        margin: 0.5rem 0;
        line-height: 1.2;
        background: linear-gradient(to right, #ffffff, var(--primary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hero__text {
        max-width: 450px;
        font-size: 1.6rem;
        margin-top: 1.5rem;
        color: var(--white-1);
      }
      .hero__button {
        margin-top: 2.5rem;
      }
    }
    .right {
      position: absolute;
      right: 2%; /* Breathes off the edge */
      top: 15%; /* Centers it beautifully */
      width: 45%;
      height: 70%;
      z-index: 1;
      animation: fadeUp 1.2s ease-out forwards;
      .hero__image {
        width: 100%;
        height: 100%;
        border-radius: 24px; /* Smooth, trendy corners */
        box-shadow: 0 20px 50px rgba(0, 210, 255, 0.15); /* Soft neon tech glow */
        border: 1px solid rgba(0, 210, 255, 0.2); /* Premium glass/tech edge */
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column-reverse;
      padding-top: 100px;
      padding-bottom: 80px;
      &::after {
        width: 100%;
      }
      .right {
        position: initial;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 3rem;
        .hero__image {
          height: 300px;
          width: 90%; /* Breathes off the edge on mobile */
          margin: 0 auto;
          border-radius: 20px;
        }
      }
      .left {
        width: 100%;
        margin-top: 1rem;
        padding: 0;
        .hero__heading {
          max-width: 100%;
          font-size: 3.2rem;
        }
        .hero__text {
          max-width: 100%;
        }
      }
    }
  }
`;
```
## `web\src\styles\homePage\TopCategoriesStyles.js`
```
import styled from 'styled-components';

export const TopCategoriesStyles = styled.div`
  padding: 5rem 0;
  .info {
    max-width: 400px;
  }
  .centre__text {
    text-align: center;
  }
  .right__text {
    text-align: right;
  }
`;

```
## `web\src\styles\HomePageStyles.js`
```
import styled from 'styled-components';

export default styled.div`
  color: red;
`;

```
## `web\src\styles\LogoStyles.js`
```
import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)`
  display: inline-block;
  max-width: 200px;
  svg {
    font-size: 3rem;
    path {
      stroke: white;
    }
  }
`;

```
## `web\src\styles\NotFoundPageStyles.js`
```
import styled from 'styled-components';

export const NotFoundPageStyles = styled.div`
  text-align: center;
  .title {
    font-size: 5rem;
  }
  .link {
    color: var(--primary);
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

```
## `web\src\styles\PageHeaderStyles.js`
```
import styled from 'styled-components';

export const PageHeaderStyles = styled.div`
  margin: 3rem 0;
  max-width: 400px;
`;

```
## `web\src\styles\PageSpaceStyles.js`
```
import styled from 'styled-components';

export const PageSpaceStyles = styled.div`
  padding-top: ${(props) => props.top || 100}px;
  padding-bottom: ${(props) => props.bottom || 100}px;
`;

```
## `web\src\styles\PaginationStyles.js`
```
import styled from 'styled-components';

export const PaginationStyles = styled.div`
  text-align: center;
  margin-top: 5rem;
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      background: var(--gray);
      padding: 0.8rem;
      border-radius: 4px;
      svg {
        padding: 0;
        margin: 0;
      }
      &.disabled {
        opacity: 0.2;
        pointer-events: none;
      }
    }
  }
`;

```
## `web\src\styles\search\SearchFieldStyles.js`
```
import styled from 'styled-components';

export const SearchFieldStyles = styled.label`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    font-size: 1.8rem;
    padding: 1rem;
    border-radius: 4px;
    color: var(--darkBlue);
    font-family: Poppins;
    border: none;
    outline: none;
    &:focus {
      outline: 3px solid var(--secondary);
    }
  }
  .searchIcon {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #048B63;
  }
  @media only screen and (max-width: 768px) {
    input {
      font-size: 1.6rem;
      padding: 0.6rem;
      &:focus {
        outline: 2px solid var(--secondary);
      }
    }
  }
`;

```
## `web\src\styles\search\SearchModalStyles.js`
```
import styled from 'styled-components';

export const SearchModalStyles = styled.div`
  position: fixed;
  z-index: 2000;
  min-height: 100vh;
  width: 100%;
  background-color: #000000bd;
  .modal__container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 100px;
    max-height: calc(100% - 150px);
    width: 90%;
    max-width: 500px;
    background-color: var(--black-1);
    padding: 2rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .close {
      position: absolute;
      transform: translateY(-100%);
      top: -10px;
      right: 0;
      border-color: #1f1f47;
      color: crimson;
      &:hover {
        background-color: crimson;
        color: var(--white);
      }
    }
    .search__result {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;

      overflow-y: auto;
    }
  }
  @media only screen and (max-width: 768px) {
    .modal__container {
      padding: 1rem;
    }
  }
`;

```
## `web\src\styles\search\SearchResultItemStyles.js`
```
import { Link } from 'gatsby';
import styled from 'styled-components';

export const SearchResultItemStyles = styled(Link)`
  width: 100%;
  background-color: #1c3803;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  border-radius: 8px;
  .img {
    width: 50px;
    height: 40px;
    border-radius: 4px;
  }
  .title {
    font-size: 1.6rem;
  }
  .categoriesText {
    font-size: 1.3rem;
    a {
      color: var(--grey);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .authorProfileImg {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

```
## `web\src\styles\typography\ParagraphTextStyles.js`
```
import styled from 'styled-components';

export const ParagraphTextStyles = styled.p`
  font-family: 'Inter', sans-serif;
  color: var(--grey);
  font-size: 1.6rem;
  line-height: 1.5;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

```
## `web\src\styles\typography\SectionTitleStyles.js`
```
import styled from 'styled-components';

export const SectionTitleStyles = styled.h2`
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: var(--primary);
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
export const TitleStyles = styled.h2`
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

```
## `web\src\templates\activity-list.js`
```
import React from "react";
import { graphql } from "gatsby";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import PageHeader from "../components/PageHeader";
import ActivityGrid from "../components/category/ActivityGrid";
import Pagination from "../components/Pagination";

export const ActivityListQuery = graphql`
  query activitiesQuery($limit: Int!, $offset: Int!) {
    allSanityActivity(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function Activity({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const activities = data.allSanityActivity.nodes;

  return (
    <>
      <SEO title="Core Services" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
              title="Core Services & Divisions"
              description="Uncompromising capability. We deploy specialized fleets for abnormal loads and execute integrated facility management—from MEP, Fire Safety, and Asphalt Resurfacing, to elite Security and Hygiene services."
          />
          <ActivityGrid activities={activities} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/activities"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Activity;

```
## `web\src\templates\author-list.js`
```
import { graphql } from 'gatsby';
import React from 'react';
import AuthorGrid from '../components/author/AuthorGrid';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import Pagination from '../components/Pagination';
import SEO from '../components/seo';

export const AuthorsQuery = graphql`
  query authorQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function AuthorList({ data, pageContext }) {
  const authors = data.allSanityAuthor.nodes;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="About Us & Our Team" />
      <div className="container">
        <PageHeader
            title="Executive Leadership"
            description="Led by industry veterans, our team guarantees precision, safety, and scale. As a 100% Black-Owned, Level 1 B-BBEE entity, partnering with Moorosi Holdings grants your business 135% Procurement Recognition."
        />
        <AuthorGrid authors={authors} />
        {numberOfPages > 1 && (
          <Pagination
            baseURL="/team"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </PageSpace>
  );
}

export default AuthorList;

```
## `web\src\templates\blog-list.js`
```
import { graphql } from 'gatsby';
import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/seo';
import PageSpace from '../components/PageSpace';
import BlogGrid from '../components/blog/BlogGrid';
import Pagination from '../components/Pagination';

export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function Blogs({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const blogs = data.allSanityBlog.nodes;

  return (
    <>
      <SEO title="Posts" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Posts"
            description="A timeline of our dedication to full client satisfaction"
          />
          <BlogGrid blogs={blogs} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/spotlight"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Blogs;

```
## `web\src\templates\category-list.js`
```
import React from 'react';
import { graphql } from 'gatsby';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import CategoryGrid from '../components/category/CategoryGrid';
import Pagination from '../components/Pagination';

export const CategoryListQuery = graphql`
  query categoriesQuery($limit: Int!, $offset: Int!) {
    allSanityCategory(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function Categories({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategory.nodes;

  return (
    <>
      <SEO title="Categories" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
              title="Operational Sectors"
              description="Delivering robust, scalable solutions across Mining, Construction, Heavy Plant Logistics, and Integrated Facilities Management."
          />
          <CategoryGrid categories={categories} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/categories"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Categories;

```
## `web\src\templates\publication-list.js`
```
import { graphql } from 'gatsby';
import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/seo';
import PageSpace from '../components/PageSpace';
import BlogGrid from '../components/blog/BlogGrid';
import Pagination from '../components/Pagination';

export const query = graphql`
  query publicationListQuery($limit: Int!, $offset: Int!) {
    allSanityPublication(sort: { fields: _createdAt, order: DESC }, limit: $limit, skip: $offset) {
      nodes {
        id
        title
        _createdAt
        slug { current }
        coverImage { alt, asset { gatsbyImageData } }
      }
    }
  }
`;

function Publications({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const publications = data.allSanityPublication.nodes.map(pub => ({
    ...pub,
    publishedAt: pub._createdAt,
    categories: []
  }));

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="Publications & Books" />
      <div className="container">
        <PageHeader title="Company Documents & Compliance" description="Access Moorosi Holdings' company profiles, B-BBEE certificates, CSD registration, and operational capabilities literature." />
        <BlogGrid blogs={publications} prefix="publications" />
        {numberOfPages > 1 && (
          <Pagination currentPage={currentPage} numberOfPages={numberOfPages} baseURL="/publications" />
        )}
      </div>
    </PageSpace>
  );
}
export default Publications;
```
## `web\src\templates\single-activity.js`
```
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import MyPortableText from "../components/MyPortableText";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import { SingleCategoryStyles } from "../styles/category/SingleCategoryStyles";

export const query = graphql`
  query SingleActivity($id: String!) {
    sanityActivity(id: { eq: $id }) {
      title
      _rawDescription
      _rawBody 
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
  }
`;

function SingleActivity({ data }) {
  const activity = data.sanityActivity;

  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={`Moorosi Holdings - ${activity.title}`} /> 
          
          <PageHeader title={activity.title} className="pageHeader">
            {/* This displays the Short Description in the header area */}
            <MyPortableText value={activity._rawDescription} />
            
            {activity.coverImage && (
              <GatsbyImage
                image={activity.coverImage.asset.gatsbyImageData}
                alt={activity.coverImage.alt || activity.title}
                className="coverImage"
              />
            )}
          </PageHeader>

          {/* 2. to display the Full Service Details (Body) */}
          <hr style={{ margin: '2rem 0', opacity: '0.1' }} />
          <div className="body-content">
             <MyPortableText value={activity._rawBody} />
          </div>
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleActivity;
```
## `web\src\templates\single-author.js`
```
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import BlogGrid from "../components/blog/BlogGrid";
import MyPortableText from "../components/MyPortableText";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import { Title } from "../components/typography/Title";
import { SingleAuthorStyles } from "../styles/author/SingleAuthorStyles";

export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!) {
    sanityAuthor(id: { eq: $id }) {
      name
      _rawBio
      profileImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { author: { id: { eq: $id } } }) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function SingleAuthor({ data }) {
  const author = data.sanityAuthor;
  const blogs = data.allSanityBlog.nodes;
  return (
    <PageSpace top={80} bottom={100}>
      <SEO title={author.name} />
      <div className="container">
        <SingleAuthorStyles>
          <div className="author-header">
            {/* Add this conditional check */}
            {author.profileImage && (
              <GatsbyImage
                image={author.profileImage.asset.gatsbyImageData}
                alt={author.profileImage.alt || author.name}
                className="profileImage"
              />
            )}
            <Title className="name">{author.name}</Title>
            <div className="bio">
              <MyPortableText value={author._rawBio} />
            </div>
          </div>
          <hr className="hr" />
          <BlogGrid blogs={blogs} />
        </SingleAuthorStyles>
      </div>
    </PageSpace>
  );
}

export default SingleAuthor;

```
## `web\src\templates\single-blog.js`
```
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { format } from "date-fns";
import { BiCategory } from "react-icons/bi";
import { FiCalendar, FiUser } from "react-icons/fi";
import PageSpace from "../components/PageSpace";
import ParagraphText from "../components/typography/ParagraphText";
import { Title } from "../components/typography/Title";
import { SingleBlogStyles } from "../styles/blog/SingleBlogStyles";
import MyPortableText from "../components/MyPortableText";
import SEO from "../components/seo";

/// id coming from context defined in gatsby-node
export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
      categories {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
      }
    }
  }
`;

/// data is the result of the query
function SingleBlog({ data }) {
  const blog = data.sanityBlog;
  return (
    <SingleBlogStyles>
      <SEO title={`Moorosi Holdings-${blog.title}`} />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <div className="blog-header">
            {blog.coverImage && (
              <GatsbyImage
                image={blog.coverImage.asset.gatsbyImageData}
                alt={blog.coverImage.alt || blog.title}
                className="blog-cover-image"
              />
            )}
            <Title className="title">{blog.title}</Title>
            <ParagraphText className="publishedAt">
              <FiCalendar />
              {format(new Date(blog.publishedAt), "p, MMMM dd, yyyy")}
            </ParagraphText>
            <ParagraphText className="categoriesText">
              <BiCategory />
              <span>
                {blog.categories.map((item, index) => (
                  <span key={item.slug.current}>
                    <Link to={`/categories/${item.slug.current}`}>
                      {item.title}
                    </Link>
                    {index < blog.categories.length - 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            </ParagraphText>
            <ParagraphText className="author">
              <FiUser />
              <Link to={`/team/${blog.author.slug.current}`}>
                {blog.author.name}
              </Link>
            </ParagraphText>
          </div>
          <hr className="hr" />
          <div className="body">
            <MyPortableText value={blog._rawBody} />
          </div>
        </div>
      </PageSpace>
    </SingleBlogStyles>
  );
}

export default SingleBlog;

```
## `web\src\templates\single-category.js`
```
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import BlogGrid from "../components/blog/BlogGrid";
import MyPortableText from "../components/MyPortableText";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import { SingleCategoryStyles } from "../styles/category/SingleCategoryStyles";

/// category id parameter is being dynamically accessed from context in gatsby-node
export const query = graphql`
  query SingleCategory($id: String!) {
    sanityCategory(id: { eq: $id }) {
      title
      _rawDescription
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function SingleCategory({ data }) {
  const category = data.sanityCategory;
  const blogs = data.allSanityBlog.nodes;

  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={`Moorosi Holdings-${category.title}`} />
          <PageHeader title={category.title} className="pageHeader">
            <MyPortableText value={category._rawDescription} />
            {/* Add the check here */}
            {category.coverImage && (
              <GatsbyImage
                image={category.coverImage.asset.gatsbyImageData}
                alt={category.coverImage.alt || category.title}
                className="coverImage"
              />
            )}
          </PageHeader>
          <BlogGrid blogs={blogs} />
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleCategory;

```
## `web\src\templates\single-publication.js`
```
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import MyPortableText from "../components/MyPortableText";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import { SingleCategoryStyles } from "../styles/category/SingleCategoryStyles";
import Button from "../components/buttons/Button"; 

export const query = graphql`
  query SinglePublication($id: String!) {
    sanityPublication(id: { eq: $id }) {
      title
      _rawDescription
      targetAudience
      coverImage {
        asset { gatsbyImageData }
        alt
      }
      documentUpload {
        asset {
          url
          originalFilename
        }
      }
    }
  }
`;

function SinglePublication({ data }) {
  const publication = data.sanityPublication;

  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={`Moorosi Holdings - ${publication.title}`} />
          <PageHeader title={publication.title} className="pageHeader">
            
            {publication.targetAudience && (
              <p style={{ color: "var(--primary)", marginBottom: "1.5rem", fontSize: "1.6rem" }}>
                <strong>Target Audience:</strong> {publication.targetAudience}
              </p>
            )}
            
            <MyPortableText value={publication._rawDescription} />
            
            {/*DOWNLOAD BUTTON */}
            {publication.documentUpload && (
              <div style={{ marginTop: "2rem" }}>
                <Button 
                  tag="a" 
                  href={publication.documentUpload.asset.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download / View Document
                </Button>
              </div>
            )}

            {publication.coverImage && (
              <GatsbyImage
                image={publication.coverImage.asset.gatsbyImageData}
                alt={publication.coverImage.alt || publication.title}
                className="coverImage"
              />
            )}

          </PageHeader>
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SinglePublication;
```
## `web\src\utils\getSanityImageData.js`
```
import { getImageData } from 'gatsby-plugin-image';

/// extracting an optimized URL from the default cdn url connected to our sanity db on the backend. Letters are parameters
function urlBuilder({ baseUrl, width, height, format, options }) {
  return `${baseUrl}?w=${width}&h=${height}&fmt=${format}&q=${options.quality}`;
}

export function getSanityImageData({ image, ...props }) {
  return getImageData({
    baseUrl: image.url,
    sourceWidth: image.width,
    sourceHeight: image.height,
    urlBuilder,
    pluginName: 'gatsby-source-example',
    formats: ['auto'],
    options: {
      quality: 50,
    },
    ...props,
  });
}

```
