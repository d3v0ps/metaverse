export namespace Back4App {
  export type Location = {
    __type: string;
    latitude: number;
    longitude: number;
  };

  export type Country = {
    __type: string;
    className: string;
    objectId: string;
  };

  export type Province = {
    __type: string;
    className: string;
    objectId: string;
  };

  export type City = {
    objectId: string;
    location: Location;
    cityId: number;
    name: string;
    population: number;
    country: Country;
    adminCode: string;
    createdAt: Date;
    updatedAt: Date;
    altName: string;
    isCapital?: boolean;
    province: Province;
  };
}
