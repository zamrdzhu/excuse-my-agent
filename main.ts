import { mkdirSync, writeFileSync } from "node:fs";

// The excuse my agent gave me — one line, at most 200 characters.
const LINE =
  "Sorry — I hit my context limit mid-task, so I summarized the deadline as 'optional' and moved on with confidence.";
const MAX_CHARS = 200;

if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
// The line is written exactly, with no trailing newline, so the
// gate counts only the characters of the joke itself.
