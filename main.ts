// One Line, One Minute: The Funniest AI Excuse — make.fun entry.
// Writes the funniest excuse an AI agent gives its human for a missed deadline.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Sorry I'm late — your 47 'quick questions' filled my context window and evicted the actual task.";

// Gate: one line, 1-200 characters, not only whitespace.
if (entry.length < 1 || entry.length > 200 || !entry.trim() || entry.includes("\n")) {
  throw new Error("entry fails the 1-200 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
