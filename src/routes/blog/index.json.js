import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPosts = () => {
  try {
    return fs.readdirSync("static/data/blogposts/").map((fileName) => {
      const post = fs.readFileSync(
        path.resolve("static/data/blogposts", fileName),
        "utf-8"
      );
      return grayMatter(post).data;
    });
  } catch (e) {
    return [];
  }
};

export function get(_, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const posts = getAllPosts();
  res.end(JSON.stringify(posts));
}