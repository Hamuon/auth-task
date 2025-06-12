import { setCookie } from "cookies-next";
import { toast } from "react-toastify";

export interface IUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
const RESPONSE = {
  SUCCESS: (user: IUser) => ({ success: true, user }),
  ERROR: (error: unknown) => ({ success: false, error }),
};

export const login = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data = await res.json();
    const user = data.results[0];
    if (!user) {
      toast.error("کاربر یافت نشد");
      return RESPONSE.ERROR("No user found");
    }
    setCookie("user", JSON.stringify(user));
    toast.success("با موفقیت وارد شدید");
    return RESPONSE.SUCCESS(user);
  } catch {
    toast.error("مشکلی پیش آمده!");
    return RESPONSE.ERROR("Error occured");
  }
};
