export function comPrice(a, b) {
  if (a.price < b.price) {
    return 1;
  } else if (a.price > b.price) {
    return -1;
  } else {
    return 0;
  }
}
export function compDates(a, b) {
  if (a.date < b.date) {
    return 1;
  } else if (a.date > b.date) {
    return -1;
  } else {
    return 0;
  }
}

