// export const displayTime = (startDate: Date, endDate: Date): string => {
//   // const dateDisplay = Intl.DateTimeFormat('en', singleLineFormat).format(startDate);
//   return Intl.DateTimeFormat("en", simpleDateFormat).format(startDate);
// };

export const EventTypeToHeader: { [name: string]: string } = {
  tech_talk: "rgb(255, 255, 210)",
  workshop: "rgb(255, 229, 219)",
  activity: "rgb(226, 255, 223)",
};

export const toTitleCase = (str: string): string => {
  return str
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const eventHeadline = (x: number, y: number): number => {
  return x + y;
};
