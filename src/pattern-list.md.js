import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

process.stdout.write(
  `# {pattern} list\n` +
    (
      await readFile(
        fileURLToPath(import.meta.resolve("./pattern-names.txt")),
        "utf-8",
      )
    )
      .split("\n")
      .map((p) => `1. {${p}}\n`)
      .join(""),
);
