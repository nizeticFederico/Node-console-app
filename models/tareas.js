const Tarea = require('./tarea')

class Tareas {

    // _listado:
            //{'uuid-123123123-123123123-2: {id:12}, desc:asd, completadoEn:84845'}
    
    _listado = {}

    constructor() {
        
        this._listado = {}
        

    }

    crearTarea( desc = ''){

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;

    }

}


module.exports = Tareas;