import { existsSync } from "node:fs";
import path from "node:path";

export function getFileHref(filePath: string) {
  return filePath.startsWith("/") ? filePath : `/${filePath}`;
}

export function isPublicFileAvailable(filePath: string) {
  const normalized = filePath.replace(/^\/+/, "");
  return existsSync(path.join(process.cwd(), "public", normalized));
}
