import { SqlAdminRepositorio } from "./sqlAdmin.repositorio";

import { AddAdminCasoUso } from "../Aplicacion/addAdmin.CasoUso";
import { AddAdminController } from "./controller/addAdmin.controller";

import { DeleteAdminCasoUso } from "../Aplicacion/deleteAdmin.CasoUso";
import { DeleteAdminController } from "./controller/deleteAdmin.controller";

export const sqlAdminRepositorio = new SqlAdminRepositorio();
export const addAdminCasoUso = new AddAdminCasoUso(sqlAdminRepositorio);
export const addAdminController = new AddAdminController(addAdminCasoUso);

export const deleteAdminCasoUso = new DeleteAdminCasoUso(sqlAdminRepositorio);
export const deleteAdminController = new DeleteAdminController(deleteAdminCasoUso);