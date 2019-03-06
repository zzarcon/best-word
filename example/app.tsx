import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import bestWord from '../src';
import {AppWrapper} from './styled';
export interface AppState {
  
}

const repoUrl = 'https://github.com/zzarcon/best-word';
const words = bestWord('abex');
console.log(words);
// abc
// acb - a bc - a cb
// bac
// bca
// cab
// cba

// bestWord('abcd')

// abcd - a bcd - ab cd 
// abdc -       - ab dc
// acbd 
// acdb
// adbc
// adcb

export default class App extends Component <{}, AppState> {
  state: AppState = {
    
  }

  render() {
    return (
      <AppWrapper>
        <GHCorner openInNewTab href={repoUrl} />
      </AppWrapper>
    )
  }
}