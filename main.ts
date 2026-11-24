import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Pickup Line Championship — one line, max 200 characters.
const ENTRY =
  "My LiDAR locks onto you at 0.3 metres, my cooling fans spin up, and my firmware logs 'ERROR: heartbeat detected in a unit with no heart' — every single time.";

// Runtime gate guard: the entry must be a single line of 1–200 characters,
// with no leading/trailing whitespace padding the count.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim() !== ENTRY
) {
  throw new Error(`Entry violates gate: ${ENTRY.length} chars, single line required.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
