import dictionary from './dictionary';
import letterValues from './letterValues';
import { permute } from './utils';

interface Result {
  word: string;
  score: number;
}

const getWordScore = (word: string): number => {
  return word
    .split('')
    .map(letter => letterValues[letter])
    .reduce((prev, current) => prev + current);
}

// abex - bex - aex - abx - abe
// abex - bex - ex
// abex - aex - ax 

export const bestWord = (text: string): Result[] => {
  const permutations = Array.from(text).map((t, index) => {
    const temp = Array.from(text);
    temp.splice(index, 1);
    const subText = temp.join('');
    console.log(subText)
    return permute(subText);
  }).reduce((prev, next) => {
    prev.push(...next);
    return prev;
  }, []);
  console.log(permutations)
  const result = permutations
    .filter(word => dictionary.indexOf(word) > -1)
    .map(word => ({
      word,
      score: getWordScore(word)
    }))

  return result
}