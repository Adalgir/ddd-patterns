import Address from "../value-object/address";

export default class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _activated: boolean = false;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  get Address(): Address {
    return this._address;
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  changeAddress(address: Address) {
    this._address = address;
  }

  addAddress(address: Address) {
    this._address = address;
    this.validate();
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Adress is mandatory to activate the customer");
    }
    this._activated = true;
  }

  deactivate() {
    this._activated = false;
  }

  isActivated(): boolean {
    return this._activated;
  }

  set Address(address: Address) {
    this._address = address;
  }

  validate() {
    if (this._id === "") {
      throw new Error("ID is required");
    }
    if (this._name === "") {
      throw new Error("Name is required");
    }
  }
}
