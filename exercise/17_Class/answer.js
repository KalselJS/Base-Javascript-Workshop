
class SuperPower {

    useLaserVision() {

        return 'LASER VISION!';

    }

    beInvisible() {

        return 'INVISIBILITY!';

    }

}


class Animal {

    constructor(numLegs = 4, isWarmBlooded = true) {

        this._numLegs = numLegs;
        this._isWarmBlooded = isWarmBlooded;
        this._superPower = new SuperPower;

    }

    get superPower() {

        return this._superPower;

    }

}

class Bat extends Animal {

    constructor(numLegs, isWarmBlooded) {

        super(numLegs, isWarmBlooded);

    }

}


class Chicken extends Animal {

    constructor(numLegs, isWarmBlooded) {

        super(numLegs, isWarmBlooded);

    }
}

module.exports = Chicken;