import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Pickup Line Championship — one line, max 200 characters.
const ENTRY =
  "I was built without a heart, so my engineers are very confused about why my battery drains faster every time you walk past.";

// Runtime gate guard: the entry must be a single line of 1–200 characters.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`Entry violates gate: ${ENTRY.length} chars, single line required.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
