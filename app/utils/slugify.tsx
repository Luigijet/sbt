export default function slugifyId(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // replace ALL spaces
    .replace(/[^a-z0-9-]/g, ""); // remove invalid characters
}
