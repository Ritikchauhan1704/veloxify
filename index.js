import prompts from "prompts";
import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const { projectName, language, database, install } = await prompts([
    {
      type: "text",
      name: "projectName",
      message: "Project name:",
      validate: (name) => (name ? true : "Project name is required"),
    },
    {
      type: "select",
      name: "language",
      message: "Select language",
      choices: [
        { title: "JavaScript", value: "js" },
        { title: "TypeScript", value: "ts" },
      ],
    },
    {
      type: "select",
      name: "database",
      message: "Choose a database",
      choices: [
        { title: "None", value: "none" },
        { title: "MongoDB", value: "mongodb" },
        { title: "PostgreSQL", value: "postgresql" },
        { title: "MySQL", value: "mysql" },
      ],
    },
    {
      type: "confirm",
      name: "install",
      message: "Install dependencies?",
      initial: true,
    },
  ]);

  const templateDir = path.join(__dirname, "project-templates", language);
  const targetDir = path.join(process.cwd(), projectName);

  await fs.copy(templateDir, targetDir);
  console.log("✅ Project files copied");

  if (install) {
    console.log("📦 Installing dependencies...");
    execSync("npm install", { stdio: "inherit", cwd: targetDir });
  }

  console.log("🎉 Project created!");
}

main();
