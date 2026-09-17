// Same UI/data-fetching as /blog, just reachable at /blog/search?q=... for shareable search links.
export { default } from "../page";
export { metadata } from "../page";
export const revalidate = 300;
