export function parameterize(str: string, ...args: (number | string)[]) {
  let res = str;
  args.forEach((p, i) => {
    const find = '\\$' + i;
    res = res.replace(new RegExp(find, 'g'), (p && p.toString()) as string);
  });
  return res;
}
