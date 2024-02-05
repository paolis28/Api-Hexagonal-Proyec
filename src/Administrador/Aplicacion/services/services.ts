export interface IEncriptServicies{
    encodePassword(password: string):Promise<string>;
    authPassword(passwordEncode: string, hashingPassword: string): Promise<boolean>;
}

