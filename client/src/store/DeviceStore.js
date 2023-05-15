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
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Sony" },
      { id: 5, name: "Apple" },
      { id: 6, name: "Asus" },
    ];

    this._devices = [
      {
        id: 6,
        name: "apple",
        price: 5000,
        rating: 0,
        img: "https://klike.net/uploads/posts/2022-09/1663135202_a.jpg",
      },

      {
        id: 7,
        name: "sony",
        price: 5000,
        rating: 0,
        img: "https://klike.net/uploads/posts/2022-09/1663135202_a.jpg",
      },

      {
        id: 8,
        name: "Panasonic",
        price: 3000,
        rating: 0,
        img: "https://klike.net/uploads/posts/2022-09/1663135202_a.jpg",
      },

      {
        id: 9,
        name: "Lg",
        price: 3000,
        rating: 0,
        img: "https://klike.net/uploads/posts/2022-09/1663135202_a.jpg",
      },

      {
        id: 10,
        name: "PanasOanic",
        price: 3000,
        rating: 0,
        img: "https://klike.net/uploads/posts/2022-09/1663135202_a.jpg",
      },

      {
        id: 11,
        name: "Panasonic",
        price: 3000,
        rating: 0,
        img: "https://klike.net/uploads/posts/2022-09/1663135202_a.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};

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

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
