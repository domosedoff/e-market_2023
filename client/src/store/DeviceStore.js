import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Телевизоры" },
      { id: 3, name: "Утюги" },
    ];

    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Toshiba" },
      { id: 3, name: "Panasonic" },
    ];

    this._devices = [
      {
        id: 6,
        name: "apple",
        price: 5000,
        rating: 0,
        img: "0d84eed4-252a-422f-b712-41f92abe7963.jpg",
      },

      {
        id: 7,
        name: "sony",
        price: 5000,
        rating: 0,
        img: "4ef3ad5e-28e6-4472-bc21-df22afd27f34.jpg",
      },

      {
        id: 8,
        name: "Panasonic",
        price: 3000,
        rating: 0,
        img: "3fff6f66-bdb9-4ce6-be2f-7109d6f82bda.jpg",
      },
    ];

    makeAutoObservable(this);
  }
  setType(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
