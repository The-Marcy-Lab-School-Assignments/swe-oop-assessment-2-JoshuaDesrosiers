class Phone {
  #password = '';

  constructor(brand, model, password) {
    [this.brand, this.model, this.#password] = [brand, model, password];
    this.batteryLevel = 100;
  }

  makeCall(number) {
    this.batteryLevel -= 5;
    return `Calling ${number}`;
  }

  charge() {
    this.batteryLevel = 100;
    return 'Phone fully charged';
  }

  unlock(password) {
    return password === this.#password ? 'Phone unlocked' : 'Invalid Password';
  }
}

class iPhone extends Phone {
  constructor(model, password, numberOfCameras) {
    super('Apple', model, password);
    this.numberOfCameras = numberOfCameras;
  }

  makeCall(number) {
    return `${super.makeCall(number)} using faceTime audio`;
  }

  faceTime(name) {
    this.batteryLevel -= 10;
    return `FaceTiming ${name}`;
  }
}

// TEST YOUR CODE HERE

// DO NOT REMOVE
module.exports = { Phone, iPhone };
