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
  let dubs = getAllDubs();
  
  // For sorting by date
  // Splits the date into MM and YYYY and compares the year value with preference
  dubs = dubs.sort(function (a, b) {
    return parseInt(a.datestamp.substring(3,7)) - parseInt(b.datestamp.substring(3,7)) || parseInt(a.datestamp.substring(0,2)) - parseInt(b.datestamp.substring(0,2))
  });
  // Reverse to arrange newest - oldest
  dubs = dubs.reverse()

  dubs = JSON.stringify(dubs);
  res.end(dubs);
}