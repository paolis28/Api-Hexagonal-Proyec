import {IEncriptServicies } from '../../Aplicacion/services/EncriptService';
import bcrypt from 'bcrypt'

export class EncriptServiHelpers implements IEncriptServicies  {
    encodeNip(nip: string): Promise<string>{
        const slats = 10;
        let nipCard = bcrypt.hash(nip,slats);
        return nipCard;
    }

    authNip(nip: string, hashingNip: string): Promise<boolean> {
        let result = bcrypt.compare(nip, hashingNip);
        return result;
    }
}

