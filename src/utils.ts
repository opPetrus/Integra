export function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours > 0 ? hours + "h " + String(minutes).padStart(2, "0") + "m" : minutes + " min";
}
