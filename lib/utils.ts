import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPrice({
  atleast1acre,
  inCr,
  inLakh,
  totalPrice,
}: {
  atleast1acre: boolean;
  totalPrice: number;
  inLakh: number;
  inCr: number;
}): string {
  if (atleast1acre) {
    return `${inCr ? inCr.toString() + (inLakh ? "." : "") : ""}${
      inLakh ? inLakh.toString() : ""
    } ${inCr ? "crore" : "lakh"} per acre`;
  } else {
    return `${formatPrice(totalPrice)} for full property`;
  }
}

function formatPrice(number: number): string {
  const digitsBeforeDecimal = countDigitsBeforeDecimal(number);
  if (digitsBeforeDecimal <= 2) {
    return `${number.toFixed(1)} lakh`;
  } else {
    return `${(number / 100).toFixed(3)} crore`;
  }
}

function countDigitsBeforeDecimal(number: number) {
  const numberString = number.toString();
  const decimalIndex = numberString.indexOf(".");
  return decimalIndex === -1 ? numberString.length : decimalIndex;
}
