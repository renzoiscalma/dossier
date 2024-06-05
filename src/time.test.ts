export function matchValue(value: string, search: string): number {
  // Add algorithm here.  Return 1 for a match, or 0 for a non-match.

  let valTimeSplitStr = value.split(/[ap]m/)[0].split(":");
  let searchTimeSplitStr = search.split(/[ap]m/)[0].split(":");
  // console.log(
  //   valTimeSplitStr,
  //   searchTimeSplitStr,
  //   isAmOrPm(search) == "" || isAmOrPm(value) === isAmOrPm(search)
  // );

  let equalAmOrPm =
    isAmOrPm(search) == "" || isAmOrPm(value) === isAmOrPm(search);

  if (searchTimeSplitStr.length === 1 && isAmOrPm(search) !== "") {
    return valTimeSplitStr[0] === searchTimeSplitStr[0] &&
      valTimeSplitStr[1] === "00" &&
      equalAmOrPm
      ? 1
      : 0;
  }

  if (searchTimeSplitStr.length === 1) {
    return valTimeSplitStr[0].includes(searchTimeSplitStr[0]) && equalAmOrPm
      ? 1
      : 0;
  }

  if (searchTimeSplitStr.length === 2 && searchTimeSplitStr[1] === "") {
    return valTimeSplitStr[0] === searchTimeSplitStr[0] && equalAmOrPm ? 1 : 0;
  }

  if (searchTimeSplitStr[1] === "0") searchTimeSplitStr[1] = "00";

  return valTimeSplitStr[0] === searchTimeSplitStr[0] &&
    valTimeSplitStr[1] === searchTimeSplitStr[1] &&
    equalAmOrPm
    ? 1
    : 0;
}

function isAmOrPm(value: string): string {
  return value.includes("am") ? "am" : value.includes("pm") ? "pm" : "";
}

const values = [
  "12:00am",
  "12:30am",
  "1:00am",
  "1:30am",
  "2:00am",
  "2:30am",
  "3:00am",
  "3:30am",
  "4:00am",
  "4:30am",
  "5:00am",
  "5:30am",
  "6:00am",
  "6:30am",
  "7:00am",
  "7:30am",
  "8:00am",
  "8:30am",
  "9:00am",
  "9:30am",
  "10:00am",
  "10:30am",
  "11:00am",
  "11:30am",
  "12:00pm",
  "12:30pm",
  "1:00pm",
  "1:30pm",
  "2:00pm",
  "2:30pm",
  "3:00pm",
  "3:30pm",
  "4:00pm",
  "4:30pm",
  "5:00pm",
  "5:30pm",
  "6:00pm",
  "6:30pm",
  "7:00pm",
  "7:30pm",
  "8:00pm",
  "8:30pm",
  "9:00pm",
  "9:30pm",
  "10:00pm",
  "10:30pm",
  "11:00pm",
  "11:30pm",
];

describe("matchValue function", () => {
  it('should match all times containing "1"', () => {
    const results = values.map((value) => matchValue(value, "1"));
    const expectedMatches = [
      "12:00am",
      "12:30am",
      "1:00am",
      "1:30am",
      "10:00am",
      "10:30am",
      "11:00am",
      "11:30am",
      "12:00pm",
      "12:30pm",
      "1:00pm",
      "1:30pm",
      "10:00pm",
      "10:30pm",
      "11:00pm",
      "11:30pm",
    ].length;
    expect(results.filter((result) => result === 1).length).toEqual(
      expectedMatches
    );
  });
  it('should match all times containing "1:"', () => {
    const results = values.map((value) => matchValue(value, "1:"));
    const expectedMatches = ["1:00am", "1:30am", "1:00pm", "1:30pm"].length;
    expect(results.filter((result) => result === 1).length).toEqual(
      expectedMatches
    );
  });
  it('should match all times containing "1:0"', () => {
    const results = values.map((value) => matchValue(value, "1:0"));
    const expectedMatches = ["1:00am", "1:00pm"].length;
    expect(results.filter((result) => result === 1).length).toEqual(
      expectedMatches
    );
  });
  it('should match all times containing "1:00"', () => {
    const results = values.map((value) => matchValue(value, "1:00"));
    const expectedMatches = ["1:00am", "1:00pm"].length;
    expect(results.filter((result) => result === 1).length).toEqual(
      expectedMatches
    );
  });
  it('should match all times containing "1pm"', () => {
    const results = values.map((value) => matchValue(value, "1pm"));
    const expectedMatches = ["1:00pm"].length;
    expect(results.filter((result) => result === 1).length).toEqual(
      expectedMatches
    );
  });
  it('should match all times containing "1am"', () => {
    const results = values.map((value) => matchValue(value, "1am"));
    const expectedMatches = ["1:00am"].length;
    expect(results.filter((result) => result === 1).length).toEqual(
      expectedMatches
    );
  });
  it('should match all times containing "1:30"', () => {
    const results = values.map((value) => matchValue(value, "1:30"));
    const expectedMatches = ["1:30am", "1:30pm"].length;
    expect(results.filter((result) => result === 1).length).toEqual(
      expectedMatches
    );
  });
  it('should match all times containing "1:30"', () => {
    const results = values.map((value) => matchValue(value, "2:30am"));
    results.forEach((val, index) => {
      if (val === 1) {
        console.log(values[index]);
      }
    });
  });
});
