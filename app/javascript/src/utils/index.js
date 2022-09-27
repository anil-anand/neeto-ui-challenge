import * as R from "ramda";

const convertStringToCamelCase = string =>
  string
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word
        : word[0].toUpperCase() + word.substring(1, word.length)
    )
    .join("");

export const buildSelectOptions = values =>
  values.map(value => ({
    label: value,
    value: convertStringToCamelCase(value),
  }));

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);
