import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllDubs = () => {
  try {
    return fs.readdirSync("static/data/dubs/").map((fileName) => {
      const dub = fs.readFileSync(
        path.resolve("static/data/dubs", fileName),
        "utf-8"
      );
      return grayMatter(dub).data;
    });
  } catch (e) {
    return [];
  }
};

export function get(_, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const dubs = getAllDubs();
  res.end(JSON.stringify(dubs));
}