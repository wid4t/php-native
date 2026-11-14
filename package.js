import { readFile, writeFile } from "node:fs/promises";
import { zipSync } from "fflate";

const files = { "index.php": await readFile("index.php") };
await writeFile("app.zip", zipSync(files, { level: 9 }));
console.log("Berhasil membuat app.zip");
