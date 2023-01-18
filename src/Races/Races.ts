abstract class Race {
  constructor(readonly name: string, readonly dexterity: number) { 
  }

  abstract maxLifePoints(): number;

  static createdRacesInstaces():number {
    throw new Error('Not implemented');
  }
}

export default Race;