function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Grente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

function RH(nome) {
    Funcionario.call(this, nome, "RH", 5000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.5;
        this.setSalario(novoSalario);
    }
}

function Operacional(nome) {
    Funcionario.call(this, nome, "Operacional", 2500);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.1;
        this.setSalario(novoSalario);
    }
}

function TI(nome) {
    Funcionario.call(this, nome, "TI", 3500);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.5;
        this.setSalario(novoSalario);
    }
}

const funcionario = new Funcionario("nome", "cargo", 2000);
const funcionario1 = new Gerente("João", "Gerente", 10000);
const funcionario2 = new RH("Maria", "RH", 5000);
const funcionario3 = new Operacional("Vitor", "Operacional", 2500);
const funcionario4 = new TI("Carlos", "TI", 3500);

funcionario1.aumento();
console.log(funcionario1)
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2)
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3)
console.log(funcionario3.getSalario())

funcionario4.aumento();
console.log(funcionario4)
console.log(funcionario4.getSalario())