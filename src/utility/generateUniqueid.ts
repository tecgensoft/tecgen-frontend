export function generateUniqueId(): string {
  const randomPart = Math.random().toString(36).substr(2, 10);
  const timestamp = new Date().getTime();

  const timestampPart = timestamp.toString(36);

  const uniqueId = timestampPart + randomPart;

  return uniqueId;
}
