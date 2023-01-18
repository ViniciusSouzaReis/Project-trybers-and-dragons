export default abstract class Race {
  constructor(readonly _name: string, readonly _dexterity: number) { 
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  abstract maxLifePoints(): number;

  static createdRacesInstaces():number {
    throw new Error('Not implemented');
  }
}
