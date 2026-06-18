const membros = [
    "Irmã Adriane",
    "Irmã Alycia",
    "Irmã Amanda",
    "Irmã Andréa",
    "Irmão Artemildo",
    "Irmão Arthur",
    "Irmã Beatrice",
    "Irmão Caoan",
    "Irmã Carol",
    "Irmã Clara",
    "Convidado(a)",
    "Irmã Dalva",
    "Irmã Damiana",
    "Irmã Deuziane",
    "Irmã Edilene",
    "Irmã Edlanny",
    "Irmã Fátima",
    "Irmão Gabriel",
    "Irmã Glaudenia",
    "Irmã Gorete",
    "Irmã Ieuda",
    "Irmão Igor",
    "Irmã Ivana",
    "Irmã Jamille",
    "Irmão Jhonattan",
    "Irmã Joana D'arc",
    "Irmão Jobson",
    "Irmã Joice",
    "Irmã Juliana",
    "Irmã Kecinha",
    "Irmã Liduina",
    "Irmã Lucimar",
    "Irmã Maiza",
    "Irmão Marcílio",
    "Irmão Marcos",
    "Irmã Marli",
    "Irmão Meton",
    "Irmã Natália",
    "Irmão Pedro",
    "Pr. Ednaldo",
    "Pr. Ítalo",
    "Prª. Marília",
    "Prª. Socorrinha",
    "Irmã Priscila",
    "Irmão Rafael",
    "Irmão Rafaelzinho",
    "Irmã Riviane",
    "Irmão Roger",
    "Irmão Rogério",
    "Irmã Sayane",
    "Irmã Sayonara",
    "Irmã Vitória",
    "Irmão Wagner",
    "Irmão Walter",
    "Irmão Wladison",
    "Irmã Yonara",
    "Irmã Yorrana",
    "Irmão Zé (José Ilton)",
];

    const selects = document.querySelectorAll("select");

    function preencherSelects() {
        selects.forEach(select => {
            select.innerHTML = `<option value="">Selecione...</option>`;
            membros.forEach(nome => {
                const option = document.createElement("option");
                option.value = nome;
                option.textContent = nome;
                select.appendChild(option);
            });
        });
    }

    function atualizarOpcoes() {
        const escolhidos = Array.from(selects)
            .map(s => s.value)
            .filter(v => v !== "");

        selects.forEach(select => {
            Array.from(select.options).forEach(option => {
                if (
                    option.value &&
                    escolhidos.includes(option.value) &&
                    option.value !== select.value
                ) {
                    option.disabled = true;
                } else {
                    option.disabled = false;
                }
            });
        });
    }

    selects.forEach(select => {
        select.addEventListener("change", atualizarOpcoes);
    });

    preencherSelects();

    function formatarData(data) {
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    }

    function gerarMensagem() {
        const dataInput = document.getElementById("dataCulto").value;

        if (!dataInput) {
            alert("Selecione a data do culto.");
            return;
        }

        for (const select of selects) {
            if (!select.value) {
                alert("Preencha todos os campos da escala.");
                return;
            }
        }

        let mensagem =
            `*ESCALA DESSE DOMINGO*
            > Data: ${formatarData(dataInput)}
            > Tema: ${formatarTema(temaInput)}

            *PORTERIA:*
            - _${porteiro.value}_

            *ACOLHIMENTO:*
            - _${acolhimento1.value}_
            - _${acolhimento2.value}_

            *DIACONIA:*
            - _${diacono1.value}_
            - _${diacono2.value}_

            *SALINHA (TIAS):*
            - _${salinha1.value}_
            - _${salinha2.value}_

            *PREGAÇÃO:*
            - _${pregador.value}_

            *MÍDIAS:*
            - _${midias.value}_
            `;
        const texto = encodeURIComponent(mensagem);
        const url = `https://wa.me/5585997734817?text=${texto}`;
        window.open(url, "_blank");
        }