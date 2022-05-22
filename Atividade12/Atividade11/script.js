function Conta(){
    var nome;
    var banco;
    var numcont
    var saldo;
    this.getNome=function(){
        return nome;
    };
    this.setNome=function(value){
        nome=value;
    };
    this.getbanco=function(){
        return banco;
    };
    this.setbanco=function(value){
        banco=value;
    };
    this.getnumcont=function(){
        return numcont
    };
    this.setnumcont=function(value){
        numcont=value;
    };
    this.getsaldo=function(){
        return saldo;
    };
    this.setsaldo=function(value){
        saldo=value;
    };
}
function ContaCorrente(){
    var saldoExp;
    this.getsaldoExp=function(){
        return saldoExp;
    };
    this.setsaldoExp=function(value){
        saldoExp =value;
    };
}
function ContaPoupanca(){
    var juros;
    var dataVenc;
    this.getjuros=function(){
        return juros;
    };
    this.setjuros=function(value){
        juros=value;
    };
    this.getdataVenc=function(){
        return dataVenc;
    };
    this.setdataVenc=function(value){
        dataVenc=value;
    };
}
ContaPoupanca.prototype =new Conta();
ContaCorrente.prototype =new Conta();

nContaPoupanca=new ContaPoupanca();
nContaCorrente=new ContaCorrente();

nContaPoupanca.setjuros('10%');
nContaPoupanca.setdataVenc('18/9/28');

nContaPoupanca.setNome('Miguel Alves');
nContaPoupanca.setbanco('NuBank')
nContaPoupanca.setnumcont('1507')
nContaPoupanca.setsaldo('4.862,95')

nContaCorrente.setsaldoExp('1.000,55');

nContaCorrente.setNome('Daniel King');
nContaCorrente.setbanco('Santander')
nContaCorrente.setnumcont('1586')
nContaCorrente.setsaldo('1.586,93')
alert(nContaPoupanca.getNome() +'\n'+nContaPoupanca.getbanco() +'\n'+nContaPoupanca.getnumcont() +'\n'+nContaPoupanca.getsaldo() +'\n'+nContaPoupanca.getjuros() +'\n'+nContaPoupanca.getdataVenc() + '\n\n' + 
nContaCorrente.getNome() +'\n'+nContaCorrente.getbanco() +'\n'+nContaCorrente.getnumcont() +'\n'+nContaCorrente.getsaldo() +'\n' +nContaCorrente.getsaldoExp());