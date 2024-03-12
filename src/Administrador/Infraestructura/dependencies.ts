import { SqlAdminRepositorio } from "./sqlAdmin.repositorio";
import { EncriptServiHelpers } from "./helpers/EncryptHelper";

import { AddAdminCasoUso } from "../Aplicacion/addAdmin.CasoUso";
import { AddAdminController } from "./controller/addAdmin.controller";

import { DeleteAdminCasoUso } from "../Aplicacion/deleteAdmin.CasoUso";
import { DeleteAdminController } from "./controller/deleteAdmin.controller";

import { GetByIdAdminCasoUso } from "../Aplicacion/getIdAdmin.CasoUso";
import { GetByIdAdminController } from "./controller/getIdAdmin.controller";

import { NotificationHelpers } from "./helpers/NotificationHelper";


export const encriptServi = new EncriptServiHelpers();
export const notificationHelpers = new NotificationHelpers();

// notificationHelpers.inicializar();

export const sqlAdminRepositorio = new SqlAdminRepositorio();
export const addAdminCasoUso = new AddAdminCasoUso(sqlAdminRepositorio,encriptServi,notificationHelpers);
export const addAdminController = new AddAdminController(addAdminCasoUso);

export const deleteAdminCasoUso = new DeleteAdminCasoUso(sqlAdminRepositorio);
export const deleteAdminController = new DeleteAdminController(deleteAdminCasoUso);

export const getByIdAdminCasoUso = new GetByIdAdminCasoUso(sqlAdminRepositorio);
export const getByIdAdminController = new GetByIdAdminController(getByIdAdminCasoUso);

