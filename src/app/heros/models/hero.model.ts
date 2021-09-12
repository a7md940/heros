interface IBuildHero {
  id?: number;
  name: string;
  powers: string;
  rate: number;
}

class HeroFactory {
  build(data: IBuildHero): Hero {
    const hero = new Hero();
    if (data.id != null) {
      hero.id = data.id;
    }
    hero.name = data.name;
    hero.powers = data.powers;
    hero.rate = data.rate;

    return hero;
  }
}

export class Hero {
  id!: number;
  name!: string;
  powers!: string;
  rate!: number;

  static factory = new HeroFactory();
}

