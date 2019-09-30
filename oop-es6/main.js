class Weapon {
	constructor (name, attack, durability, range) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
		this.initDurability = this.durability;
	}

    takeDamage (damage) {
	
	  if (this.durability < 0) {
		this.durability = 0;
	  }
	  this.durability = this.durability - damage;
    }

    getDamage () {
    	if (this.durability >= 0.3 * this.initDurability) {
    		return this.attack;
    		} else if (this.durability > 0 && this.durability < 0.3 * this.initDurability) {
    				return this.attack / 2;
    			} else {
    				return 0;
    			}
    		}

    isBroken () {
    	if (this.durability > 0) { 
    		return false;
    	} else { 
    		return true;

    	}
    }

    }

/*const arm = new Weapon ("Рука", 1, Infinity, 1);
const bow = new Weapon ("Лук", 10, 200, 3);
const sword = new Weapon ("Меч", 25, 500, 1);
const knife = new Weapon ("Нож", 5, 300, 1);
const stick = new Weapon ("Посох", 8, 300, 2);
const longBow = new Weapon ("Длинный лук", 15, 4, bow.range);
const axe = new Weapon ("Секира", 27, sword.durability, 800);
const stickStorm = new Weapon ("Посох Бури", 10, 3, stick.range);

bow.takeDamage(20);
console.log(bow.durability);
console.log(bow.getDamage());
console.log(bow.isBroken());*/

class Arm extends Weapon {
	constructor () {
		super ();
		this.name = "Рука";
		this.attack = 1;
		this.durability = Infinity;
		this.range = 1;
		this.initDurability = this.durability;
	}
}
class Bow extends Weapon {
	constructor () {
		super ();
		this.name = "Лук";
		this.attack = 10;
		this.durability = 200;
		this.range = 3;
		this.initDurability = this.durability;
	}
}
class Sword extends Weapon {
	constructor () {
		super ();
		this.name = "Меч";
		this.attack = 25;
		this.durability = 500;
		this.range = 1;
		this.initDurability = this.durability;
	}
}
class Knife extends Weapon {
	constructor () {
		super ();
		this.name = "Нож";
		this.attack = 5;
		this.durability = 300;
		this.range = 1;
		this.initDurability = this.durability;
	}
}
class Stick extends Weapon {
	constructor () {
		super ();
		this.name = "Посох";
		this.attack = 8;
		this.durability = 300;
		this.range = 2;
		this.initDurability = this.durability;
	}
}
class LongBow extends Bow {
	constructor () {
		super ();
		this.name = "Длинный лук";
		this.attack = 15;
		this.range = 4;
	}
}
class Axe extends Sword {
	constructor () {
		super ();
		this.name = "Секира";
		this.attack = 27;
		this.durability = 800;
		this.initDurability = this.durability;
	}
}
class StickStorm extends Stick {
	constructor () {
		super ();
		this.name = "Посох Бури";
		this.attack = 10;
		this.range = 3;
	}
}
const arm = new Arm;
const bow = new Bow;
const sword = new Sword;
const knife = new Knife;
const stick = new Stick;
const longBow = new LongBow;
const axe = new Axe;
const stickStorm = new StickStorm;

console.log(bow.name); 
console.log(bow.attack); 
console.log(bow.durability); 
console.log(bow.range); 