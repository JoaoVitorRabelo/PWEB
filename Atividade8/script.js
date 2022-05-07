function myFunction() {
    var média = 0,
        maisVelha = 0,
        maisNova = 100,
        pss = 0,
        bom = 0,
        otm = 0,
        prc = 0,
        man = 0,
        woman = 0;
    for (i=0; i<45;i++){
        var sex = Math.round(Math.random());
        switch (sex) {
            case 0:
                woman++;
                break;
            case 1:
                man++;
                break;
        }
        var idd = Math.round(Math.random() * 120 + 2);
        média += idd;
        if(i==0){
            maisVelha = idd;
            maisNova = idd;
        }
        if(maisVelha < idd){
            maisVelha = idd;
        }
        if(maisNova > idd){
            maisNova = idd;
        }
        var opn = Math.round(Math.random()*3);
        switch (opn) {
            case 0:
                pss++;
                break;
            case 2:
                bom++;
                break;
            case 3:
                otm++;
                break;
        }
    }
    document.getElementById("1").innerHTML = (média / 45).toFixed(2);
    document.getElementById("2").innerHTML = maisVelha;
    document.getElementById("3").innerHTML = maisNova;
    document.getElementById("4").innerHTML = pss;
    document.getElementById("5").innerHTML = ((bom + otm) / 0.45).toFixed(2)+"%" ;
    document.getElementById("6").innerHTML = man;
    document.getElementById("7").innerHTML = woman;
}