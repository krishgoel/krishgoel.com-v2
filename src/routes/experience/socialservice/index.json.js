import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllSocialService = () => {
  try {
    return fs.readdirSync("static/data/socialservice/").map((fileName) => {
      const socialservice = fs.readFileSync(
        path.resolve("static/data/socialservice", fileName),
        "utf-8"
      );
      return grayMatter(socialservice).data;
    });
  } catch (e) {
    return [];
  }
};

export function get(_, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  let socialservices = getAllSocialService();
  
  // For sorting by date
  // Splits the date into MM and YYYY and compares the year value with preference
  socialservices = socialservices.sort(function (a, b) {
    return parseInt(a.datestamp.substring(3,7)) - parseInt(b.datestamp.substring(3,7)) || parseInt(a.datestamp.substring(0,2)) - parseInt(b.datestamp.substring(0,2))
  });
  // Reverse to arrange newest - oldest
  socialservices = socialservices.reverse()

  socialservices = JSON.stringify(socialservices);
  res.end(socialservices);
}