import { each, includes } from 'underscore';
import { Injectable } from '@nestjs/common';

const _MATCHES = ['AAAA', 'TTTT', 'GGGG', 'CCCC'];

@Injectable()
export class MutantsDnaVerification {
  verifyDna(dna: Array<string>): Array<boolean> {
    let verificationResult = [];
    each(dna, (item, i) => {
      verificationResult[i] = new RegExp(_MATCHES.join('|')).test(item);
    });
    return verificationResult;
  }

  joinDnaSequence(dna: Array<Array<string>>): Array<string> {
    let joinedDna = [];
    each(dna, (item, i) => {
      joinedDna[i] = item.join('');
    });
    return joinedDna;
  }

  checkDnaRows(dna: Array<string>): boolean {
    return includes(this.verifyDna(dna), true);
  }

  createEmptyDnaSequence(dnaSequenceLength: number): Array<Array<string>> {
    let emptyDnaSequence = [];
    for (let i = 0; i < dnaSequenceLength; i++) {
      emptyDnaSequence.push([]);
    }
    return emptyDnaSequence;
  }

  checkDnaDiagonals(dna: Array<string>): boolean {
    const dnaLength = dna.length;

    let dnaDiagonals = this.createEmptyDnaSequence(2 * dnaLength - 1);
    for (let i = 0; i < dnaLength; i++) {
      for (let j = 0; j < dnaLength; j++) {
        dnaDiagonals[i + j].push(dna[j][i]);
      }
    }
    return includes(this.verifyDna(this.joinDnaSequence(dnaDiagonals)), true);
  }

  checkDnaColumns(dna: Array<string>): Array<string> {
    const dnaLength = dna.length;
    let dnaTransposed = this.createEmptyDnaSequence(dnaLength);

    for (let i = 0; i < dnaLength; i++) {
      for (let j = 0; j < dnaLength; j++) {
        dnaTransposed[i].push(dna[j][i]);
      }
    }
    return includes(this.verifyDna(this.joinDnaSequence(dnaTransposed)), true);
  }

  isDnaMutant(dna: Array<string>): boolean {
    const checksResults = [
      this.checkDnaRows(dna),
      this.checkDnaColumns(dna),
      this.checkDnaDiagonals(dna),
    ];
    return includes(checksResults, true);
  }
}
