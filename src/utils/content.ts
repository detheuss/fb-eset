import DOMPurify from "dompurify";
import { ALLOWED_ATTR, ALLOWED_TAGS } from "../constants/constants";
import type { ContentItemT } from "../types/types";

export const sanitizeHtml = (html: unknown): string =>
  DOMPurify.sanitize(typeof html === "string" ? html : String(html ?? ""), {
    ALLOWED_TAGS: [...ALLOWED_TAGS],
    ALLOWED_ATTR: [...ALLOWED_ATTR],
  });

export const sortByDateTime = (posts: ContentItemT[]) => {
  return [...posts].sort((a, b) => {
    const aTime = a?.dateTime ? new Date(a.dateTime).getTime() : 0;
    const bTime = b?.dateTime ? new Date(b.dateTime).getTime() : 0;
    return bTime - aTime;
  });
};

export const getReadableDateTimeFromISOString = (dateTime: string | undefined) => {
  if (!dateTime) return { date: "", time: "" };
  const dt = new Date(dateTime);
  const date = dt.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const time = dt.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return { date, time };
};