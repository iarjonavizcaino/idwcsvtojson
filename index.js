var fs = require("fs");

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('alumnos.csv')
});

var alumno = {
    nombre:'',
    email:'',
    genero:'',
    materias:[],
    promedio:0,
    fecha_nac:'',
    activo:true
}

var alumnos = new Array();

lineReader.on('line', (line)=> {
    // console.log('1.', line);
    var datos = line.split(',');
    alumno.nombre = datos[0];
    alumno.email = datos[1];
    alumno.materias.push({nombre:"matematicas",calif:datos[3]});
    alumno.materias.push({nombre:"español",calif:datos[4]});
    console.log(alumno);
    // console.log("JSON\n"+JSON.parse(alumno));
    console.log("JSON\n"+JSON.stringify(alumno));
    alumnos.push(alumno);

    fs.writeFileSync('alumnos.json', JSON.stringify(alumnos),{encoding:'utf8',flag:'w'});
});