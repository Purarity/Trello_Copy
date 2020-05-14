export function getButtonColor(color) {
  switch (color) {
    case "blue":
      return "primary";
    case "yellow":
      return "warning";
    case "green":
      return "success";

    default:
      return;
  }
}
