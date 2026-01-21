// Script para corregir el runtime de las funciones Vercel
// @astrojs/vercel@7.8.2 genera nodejs18.x que ya no es soportado

import { readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import { join } from "path";

const VERCEL_OUTPUT = ".vercel/output/functions";

function findVcConfigFiles(dir, files = []) {
  try {
    const items = readdirSync(dir);
    for (const item of items) {
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        findVcConfigFiles(fullPath, files);
      } else if (item === ".vc-config.json") {
        files.push(fullPath);
      }
    }
  } catch (e) {
    // Directory doesn't exist, ignore
  }
  return files;
}

function fixRuntime() {
  const configFiles = findVcConfigFiles(VERCEL_OUTPUT);

  if (configFiles.length === 0) {
    console.log("No .vc-config.json files found");
    return;
  }

  for (const file of configFiles) {
    const content = JSON.parse(readFileSync(file, "utf-8"));

    if (content.runtime === "nodejs18.x") {
      content.runtime = "nodejs20.x";
      writeFileSync(file, JSON.stringify(content, null, 2));
      console.log(`✓ Fixed runtime in ${file}`);
    }
  }

  console.log("Runtime fix complete!");
}

fixRuntime();
