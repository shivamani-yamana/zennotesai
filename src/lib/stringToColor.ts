function stringToColor(str: string): string {
  let hash = 0;

  // Generate hash from the string
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert hash to a valid hexadecimal color code
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();

  // Ensure the color string is always 6 characters long
  return "#" + "000000".substring(0, 6 - c.length) + c;
}

export default stringToColor;
