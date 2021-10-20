export default function getElevation(elevation: number): string {
  if (typeof elevation !== "number") {
    elevation = Number(elevation);
  }
  if (typeof elevation !== "number" || elevation === 0) return "";

  elevation = Math.floor(elevation);

  if (elevation === 1) return "shadow-sm";
  if (elevation === 2) return "shadow";
  if (elevation === 3) return "shadow-md";
  if (elevation === 4) return "shadow-lg";
  if (elevation === 5) return "shadow-xl";
  if (elevation >= 6) return "shadow-2xl";

  return "";
}
