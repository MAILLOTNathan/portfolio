#!/usr/bin/env node
/**
 * Fails when a tracked file's path differs in case from the file on disk.
 *
 * macOS and Windows use case-insensitive filesystems, so `import
 * "@/components/ui/Timeline"` resolves locally even when git tracks the file as
 * `timeline.tsx`. The case-sensitive Linux runner used by CI then fails with
 * "Module not found".
 *
 * Run through the `prebuild` script so the mismatch surfaces locally instead of
 * after a push. Files that are simply absent (a deletion not staged yet) are
 * ignored: only real case mismatches are reported.
 */
import { execFileSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { basename, dirname, join } from "node:path";

const trackedFiles = execFileSync("git", ["ls-files"], { encoding: "utf8" })
  .split("\n")
  .filter(Boolean);

/** Cache the directory listings instead of re-reading them per file. */
const listings = new Map();
function entriesOf(directory) {
  if (!listings.has(directory)) {
    try {
      listings.set(directory, readdirSync(directory || "."));
    } catch {
      listings.set(directory, []);
    }
  }
  return listings.get(directory);
}

const mismatches = [];

for (const trackedPath of trackedFiles) {
  const directory = dirname(trackedPath);
  const name = basename(trackedPath);
  const entries = entriesOf(directory);

  if (entries.includes(name)) continue;

  const onDisk = entries.find(
    (entry) => entry.toLowerCase() === name.toLowerCase(),
  );

  if (onDisk) {
    mismatches.push({ trackedPath, onDisk: join(directory, onDisk) });
  }
}

if (mismatches.length > 0) {
  console.error("\nFile name casing does not match what git tracks:\n");

  for (const { trackedPath, onDisk } of mismatches) {
    console.error(`  git tracks: ${trackedPath}`);
    console.error(`  on disk   : ${onDisk}\n`);
  }

  console.error(
    "Case-insensitive filesystems hide this, but the Linux CI runner will fail\n" +
      "to resolve the import. Fix it with a two-step rename:\n\n" +
      "  git mv <tracked-path> <tmp> && git mv <tmp> <correct-path>\n",
  );

  process.exit(1);
}

console.log(`File name casing OK (${trackedFiles.length} tracked files).`);
