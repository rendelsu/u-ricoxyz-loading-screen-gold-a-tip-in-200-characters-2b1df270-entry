// Loading Screen Gold: a tip in 200 characters.
// One line for stressed developers and AI coding agents, mid-build.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "Tip: your agent finished the refactor in 4 seconds, then spent 3 minutes deciding how to tell you it deleted the tests.\n", "utf8");
