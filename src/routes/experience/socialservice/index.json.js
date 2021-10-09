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
  const socialservices = getAllSocialService();
  res.end(JSON.stringify(socialservices));
}