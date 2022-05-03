var pontosJog = 0,
        pontosCom = 0;
    function myFunction() {
        var escolhajogador = (document.getElementById("opcao")).value;
        if (escolhajogador == '') {
            alert('Por gentileza escolha uma opção válida: Pedra, Papel ou Tesoura!');
            return false;
        }

        document.getElementById("player").innerHTML = escolhajogador;
        
        var escolhaComputador = Math.round(Math.random() * 2);
        switch (escolhaComputador) {
            case 0:
                escolhaComputador = 'Pedra';
                break;
            case 1:
                escolhaComputador = 'Papel';
                break
            case 2:
                escolhaComputador = 'Tesoura';
                break;
        }
        document.getElementById("computer").innerHTML = escolhaComputador;
        var vencedor
        if (escolhajogador == "Pedra"){
            if (escolhaComputador == 'Pedra') {
                vencedor = 'empate';
            } else if (escolhaComputador == 'Papel') {
                vencedor = 'Computador';
            } else {
                vencedor = 'Jogador';
            }
        }else if (escolhajogador == 'Papel') {
            if (escolhaComputador == 'Pedra') {
            vencedor = 'Jogador';
            } else if (escolhaComputador == 'Papel') {
                vencedor = 'empate';
            } else if (escolhaComputador == 'Tesoura') {
                vencedor = 'Computador';
            }
        }else if (escolhajogador == 'Tesoura') {
            if (escolhaComputador == 'Pedra') {
                vencedor = 'Computador';
            } else if (escolhaComputador == 'Papel') {
                vencedor = 'Jogador';
            } else if (escolhaComputador == 'Tesoura') {
                vencedor = 'empate';
            }
        }
        document.getElementById("winner").innerHTML = vencedor;
        if(vencedor == 'Jogador'){
            pontosJog += 1;
        }else if(vencedor == 'Computador'){
            pontosCom += 1;
        }
        document.getElementById("compPoints").innerHTML = pontosCom;
        document.getElementById("playPoints").innerHTML = pontosJog;
    }