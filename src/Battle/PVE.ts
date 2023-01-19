import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _monster: SimpleFighter[];
  constructor(player: Fighter, monster: SimpleFighter[]) {
    super(player);
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((enemy) => {
      while (this.player.lifePoints > -1 && enemy.lifePoints > -1) {
        this.player.attack(enemy);
        if (enemy.lifePoints > -1) {
          enemy.attack(this.player);
        }
      }
    });

    return super.fight();
  }
}