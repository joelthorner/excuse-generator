const starts = [
  `En el moment que arreglem el goteig de recursos`,
  `En el moment que completem les proves`,
  `En el moment que hagim optimitzat el codi`,
  `Just quan arreglin el bug`,
  `Quan se solventi el problema d'instalació`,
  `Quan descombrim perque cau el proçes`,
  `Quan haguem millorat el rendiment`,
  `En el moment que completem la restauració`,
  `Just quan instalem l'ultim "parche"`,
  `En el moment que acabem l'implementació`,
];

const middles = [
  `de l'interfaç XML`,
  `del sistema de cues`,
  `del buffer d'entrada`,
  `del gestor de peticions`,
  `de les classes d'abstracció`,
  `del trigger`,
  `de la nova versió`,
  `del cache`,
  `de la versió custom`,
  `del conversor del protocol`,
];

const ends = [
  `del directori LDAP`,
  `del compilador`,
  `del proxy invers`,
  `del gestor del cluster`,
  `del broker d'objectes distribuit`,
  `de la capa de presentació`,
  `del l'algoritme del motor`,
  `de la base de dades`,
  `del servidor segur`,
  `del accelerador de transicions`,
];

class Sentence {

  private start: string;

  private middle: string;

  private end: string;

  public constructor() {
    this.start = this.getStart();
    this.middle = this.getMiddle();
    this.end = this.getEnd();
  }

  private getStart(): string {
    return starts[this.getRand(starts)];
  }
  
  private getMiddle(): string {
    return middles[this.getRand(middles)];
  }

  private getEnd(): string {
    return ends[this.getRand(ends)];
  }

  private getRand(array: string[]): number {
    return this.randomIntFromInterval(0, array.length - 1);
  }

  private randomIntFromInterval(min: number, max: number): number {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public getSentence(): string {
    return `${this.start} ${this.middle} ${this.end}`; 
  }
}

document.getElementById('output').innerHTML = new Sentence().getSentence();