import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllLeadership = () => {
  try {
    return fs.readdirSync("static/data/leadership/").map((fileName) => {
      const leadership = fs.readFileSync(
        path.resolve("static/data/leadership", fileName),
        "utf-8"
      );
      return grayMatter(leadership).data;
    });
  } catch (e) {
    return [];
  }
};

export function get(_, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const leaderships = getAllLeadership();
  res.end(JSON.stringify(leaderships));
}