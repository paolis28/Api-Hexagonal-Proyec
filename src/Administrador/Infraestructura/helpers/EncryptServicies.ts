import {IEncriptServicies } from '../../Aplicacion/services/services';
import bcrypt from 'bcrypt'

export class EncriptServiHelpers implements IEncriptServicies  {
    encodePassword(password: string): Promise<string>{
        const slats = 10;
        let pass = bcrypt.hash(password,slats);
        return pass;
    }

    authPassword(password: string, hashingPassword: string): Promise<boolean> {
        let result = bcrypt.compare(password, hashingPassword);
        return result;
    }
}

