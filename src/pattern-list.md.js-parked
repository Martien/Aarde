import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const pn = "./pattern-names.txt";

/*
console.error(pn);
process.stdout.write("- " + pn + "\n");

console.error(import.meta.resolve(pn));
process.stdout.write("- " + import.meta.resolve(pn) + "\n");

console.error(fileURLToPath(import.meta.resolve(pn)));
process.stdout.write("- " + fileURLToPath(import.meta.resolve(pn)) + "\n\n");
*/

process.stdout.write("# Pattern list\n");
process.stdout.write(
  (await readFile(fileURLToPath(import.meta.resolve(pn)), "utf-8"))
    .split("\n")
    .map((p) => `1. {${p}}\n`)
    .join(""),
);
