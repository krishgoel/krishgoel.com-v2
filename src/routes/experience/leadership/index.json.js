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
  let leaderships = getAllLeadership();
  
  // For sorting by date
  // Splits the date into MM and YYYY and compares the year value with preference
  leaderships = leaderships.sort(function (a, b) {
    return parseInt(a.datestamp.substring(3,7)) - parseInt(b.datestamp.substring(3,7)) || parseInt(a.datestamp.substring(0,2)) - parseInt(b.datestamp.substring(0,2))
  });
  // Reverse to arrange newest - oldest
  leaderships = leaderships.reverse()

  leaderships = JSON.stringify(leaderships);
  res.end(leaderships);
}