import { CatalogoOpcion } from './CatalogoOpcion';
import { Pregunta } from './Pregunta';
import { RespuestaMultiple } from './RespuestaMultiple';


export class Opcion {
    idOpcion?: number;
    idCatalogoOpcion?: number;
    idPregunta?: number;

    // Has many
    RespuestasMultiples?: RespuestaMultiple[];

    // Belongs to
    catalogoOpcion?: CatalogoOpcion;
    pregunta?: Pregunta;

    // Variables locales

    localSelected?: boolean;

    constructor(opcion?: Opcion) {
        if (opcion != null) {
            this.idOpcion = opcion.idOpcion;
            this.idCatalogoOpcion = opcion.idCatalogoOpcion;
            this.idPregunta = opcion.idPregunta;
            this.catalogoOpcion = opcion.catalogoOpcion;

        }
        this.localSelected = false;
    }
}

export class OpcionRequest {
    idOpcion?: number;
    opcion?: string;
    idPregunta?: number;

    // Has many

    // Belongs to
    pregunta?: Pregunta;

    constructor(opcion?: OpcionRequest) {
        if (opcion != null) {
            this.idOpcion = opcion.idOpcion;
            this.opcion = opcion.opcion;
            this.idPregunta = opcion.idPregunta;
        }
    }
}
