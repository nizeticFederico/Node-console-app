require('colors');
const { inquirerMenu , pausa, leerInput  } = require('./helpers/inquirer');
const Tareas = require('./models/tareas')







const main = async() =>{
    let opt = '';
    const tareas = new Tareas();
    do {
         opt = await inquirerMenu();
            switch (opt) {
                case '1':
                    const desc = await leerInput('Descripcion:');
                    tareas.crearTarea ( desc );
                    

                break;


                case '2':   
                    console.log( tareas._listado );
                 
            
                break;
                
            }
        // const tareas = new Tareas();
        // const tarea = new Tarea('Comprar comida')
        //console.log(tareas);
        
            await pausa();
                
        
       
    } while (opt !== '0');

    
        
    
    //pausa();
}



main();