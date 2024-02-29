export interface IEncriptServicies{
    encodeNip(nip: string):Promise<string>;
    authNip(nipEncode: string, hashingNip: string): Promise<boolean>;
}

