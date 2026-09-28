export type SourceType = "powerbi-cron" | "organizer-cron";

export const SOURCE_ROUTES: Record<SourceType, string> = {
  "powerbi-cron": "/powerbi-cron/logs",
  "organizer-cron": "/organizer-cron/logs",
};
