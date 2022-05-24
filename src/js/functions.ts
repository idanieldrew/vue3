import { Post } from "@/types/post";

export function select<T, K extends keyof T>(obj: T, keys: K[]) {
  let res = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      res[key] = obj[key];
    }
  }
  return res;
}
