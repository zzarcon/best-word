// https://gist.github.com/customcommander/e9af9da584ff3a33f5ed
export const permute = (str: string): string[] => {
  const ret = [];

  // permutation for one or two characters string is easy:
  // 'a'  -> ['a']
  // 'ab' -> ['ab', 'ba']
  if (str.length == 1) return [str];
  if (str.length == 2) return [str, str[1]+str[0]];

  // otherwise combine each character with a permutation
  // of a subset of the string. e.g. 'abc':
  //
  // 'a' + permutation of 'bc'
  // 'b' + permutation of 'ac'
  // 'c' + permutation of 'ab'
  str.split('').forEach((chr, idx, arr) => {
    const sub = [].concat(arr);
    sub.splice(idx, 1);
    permute(sub.join('')).forEach(perm => ret.push(chr+perm));
  });

  return ret;
}