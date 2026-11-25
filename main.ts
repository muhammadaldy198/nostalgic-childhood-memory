// fix §6: one childhood evening, held in a single breath before sleep.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const entry = "When I was eight, in 1996, Dad whistled Greensleeves' four notes up the stairs at nine nightly, aftershave in the air, and the stairs are carpeted, silent now, yet I still hold my breath for the fourth note before I sleep.";
const dir = "/output";
mkdirSync(dir, { recursive: true });
const target = `${dir}/entry.txt`;
writeFileSync(target, entry, "utf8");
chmodSync(target, 0o644);
