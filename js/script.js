function matricula() {
    var dataNasc = document.getElementById("dataNascimento").value;
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var mesAtual = dataAtual.getMonth() + 1;
    var diaAtual = dataAtual.getDate();

    var partesData = dataNasc.split("-");
    var anoNasc = parseInt(partesData[0]);
    var mesNasc = parseInt(partesData[1]);
    var diaNasc = parseInt(partesData[2]);

    var idade = anoAtual - anoNasc;

    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
        idade--;
    }

    document.getElementById("idade").textContent = "Sua idade é: " + idade + " anos";

    var rendaTotal = parseInt(document.getElementById("renda").value);
    var qntsMoradores = parseInt(document.getElementById("moradores").value);
    var rendaPC = rendaTotal / qntsMoradores;

    document.getElementById("renda2").innerHTML = "Sua renda per capital é: " + rendaPC;

    if (idade >= 16 && rendaPC <= 1980) {
        document.getElementById("resultado100").innerHTML = "Você foi aprovado"
    } else {
        document.getElementById("resultado100").innerHTML = "Você não foi aprovado"
    }
}