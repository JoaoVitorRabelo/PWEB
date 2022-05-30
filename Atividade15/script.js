function AbrirCurso() {
    curso = document.getElementById("fatec").value;
    if(curso == 0){
        return 0;
    }
    else if(confirm("Tem certeza que quer abrir esse curso?")) {
        open("http://www.fatecsorocaba.edu.br/" + curso + ".asp", "", "width=600,height=300");
    }
}