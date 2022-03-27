console.log("--- OBJETO LANÇAMENTOS ---");

function Conta(titular, tipo, numero, agencia, saldo=0, extrato=[]) {
    this.titular = titular;
    this.tipo = tipo;
    this.numero = numero;
    this.agencia = agencia;
    this.saldo = saldo;
    this.extrato = extrato;
}

function Lancamento(op, valor, data) {
    this.op = op;
    this.valor = valor;
    this.data = data;
}

const contaRafa = new Conta();

Conta.prototype.banco = "";

Conta.prototype.transferir = function(valor, conta){
    this.sacar(valor);
    conta.depositar(valor);
    this.lancar(new Lancamento('transferencia', valor, Date.now()));
}

Conta.prototype.depositar = function(valor) {
    this.lancar(new Lancamento('deposito', valor, Date.now()));
    return this.saldo += valor;
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo >= valor) {
        this.saldo -= valor;
        this.lancar(new Lancamento('saque', -valor, Date.now()));
        return valor;
    }
    return `Saldo insuficiente: R$ ${this.saldo}`
}

Conta.prototype.lancar = function(op) {
    this.extrato.push(op);
    return this.extrato;
}

Conta.prototype.imprimirExtrato = function() {
    if (this.extrato.length > 0) {
        console.log('EXTRATO:');
        this.extrato.forEach(lancamento => {
            const data = new Date(lancamento.data);
            console.log(data.toString(), lancamento.op, lancamento.valor);
        });
    }
}