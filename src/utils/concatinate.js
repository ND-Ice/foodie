export default function concatinate(str, limit) {
  if (str?.length > limit) return `${str?.slice(0, limit)}...`;
  return str;
}
