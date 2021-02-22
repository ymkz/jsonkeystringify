export function transform(value: string) {
  return Object.keys(JSON.parse(value))
    .reduce((prev, next) => `${prev} ${next}`)
    .trim()
}
