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
  let posts = getAllPosts();
  
  // For sorting by date
  // Splits the date into MM and YYYY and compares the year value with preference
  posts = posts.sort(function (a, b) {
    return parseInt(a.datestamp.substring(3,7)) - parseInt(b.datestamp.substring(3,7)) || parseInt(a.datestamp.substring(0,2)) - parseInt(b.datestamp.substring(0,2))
  });
  // Reverse to arrange newest - oldest
  posts = posts.reverse()

  posts = JSON.stringify(posts);
  res.end(posts);
}