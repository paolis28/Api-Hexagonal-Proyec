import { SqlAdminRepositorio } from "./sqlAdmin.repositorio";
import { AddAdminCasoUso } from "../Aplicacion/addAdmin.CasoUso";
import { AddAdminController } from "./controller/addAdmin.controller";

export const sqlAdminRepositorio = new SqlAdminRepositorio();
export const addAdminCasoUso = new AddAdminCasoUso(sqlAdminRepositorio);
export const addAdminController = new AddAdminController(addAdminCasoUso);