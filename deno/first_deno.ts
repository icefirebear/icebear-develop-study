import {dayOfYear, currentDayOfYear} from "https://deno.land/std/datetime/mod.ts";

console.log(dayOfYear(new Date("2020-05-30")));
console.log(currentDayOfYear())