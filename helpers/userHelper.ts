import {User} from "../types/user";

export const isValidEmail  = (email: string): boolean =>
    email.length > 0 && email.includes('@');

export const getUserFullName = (user: User): string =>
    `${user.first_name} ${user.last_name}`;

export const userHasAvatar = (user: User): boolean =>
    user.avatar.includes('jpg');