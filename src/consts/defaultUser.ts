import { User } from "../types/user";

 export const defaultUser: User = {
    gender: "",
    name: {
      title: "",
      first: "",
      last: ""
    },
    location: {
      street: { number: 123, name: "Main St." },
      city: "",
      state: "",
      postcode: 123123,
      country: "",
      coordinates: {
        latitude: "",
        longitude: ""
      },
      timezone: {
        offset: "",
        description: ""
      }
    },
    email: "",
    login: {
      uuid: "",
      username: "",
      password: "",
      salt: "",
      md5: "",
      sha1: "",
      sha256: ""
    },
    dob: {
      date: "",
      age: 0
    },
    registered: {
      date: "",
      age: 0
    },
    phone: "",
    cell: "",
    id: {
      name: "",
      value: ""
    },
    picture: {
      large: "",
      medium: "",
      thumbnail: ""
    },
    nat: ""
  };
   