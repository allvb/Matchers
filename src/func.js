export default function sortingParam(param) {
  return param.sort((prev, next) => next.health - prev.health);
}
