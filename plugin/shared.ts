import * as fs from "fs";
import * as path from "path";

export default function getEntries(context) {
  const base = path.join(process.cwd(), "./public/data/entries");
  const dirs = fs.readdirSync(base);
  const entries: { foobar: string; id: number }[] = [];
  for (const x of dirs) {
    try {
      const filepath = path.join(base, x, "index.json");
      console.log(filepath);
      context.addWatchFile(filepath);
      const content = fs.readFileSync(filepath, {
        encoding: "utf-8",
      });
      const data = JSON.parse(content);
      entries.push({
        foobar: `${data.foo} ${data.bar}`,
        id: data.bar,
      });
    } catch (err) {
      console.error(err);
    }
  }
  return entries;
}
