import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE = "When I was eight, in 1996, Dad whistled Greensleeves' four notes up the stairs at nine nightly, aftershave in the air, and the stairs are carpeted, silent now, yet I still hold my breath for the fourth note before I sleep.";
// v2: K1 explicit (eight + 1996) — rebuild #2 per arah review #1.
// Mechanism: sound anchor (whistle) + lost ritual + present-tense residue.
// K2: Greensleeves + nine + aftershave + carpeted = 11 anchors, 3 senses.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
chmodSync(`${outDir}/entry.txt`, 0o644);
