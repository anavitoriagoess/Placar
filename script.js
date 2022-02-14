document.getElementById("alert").addEventListener("click", exibeMensagem);
function exibeMensagem() {
    Swal.fire({
        icon: 'question',
        title: 'Informe o nome dos Times',
        html:
            '<input id="inputNomeTimeA" class="swal2-input">' +
            '<input id="inputNomeTimeB" class="swal2-input">',
        showCancelButton: true
    }).then(function (result) {
        if (result.value) {
            const nomeTimeA = Swal.getPopup().querySelector('#inputNomeTimeA').value;
            const nomeTimeB = Swal.getPopup().querySelector('#inputNomeTimeB').value;
            const pontoA_HTML = document.getElementById('pontuacaoA');
            const pontoB_HTML = document.getElementById('pontuacaoB');
            const setA_HTML = document.getElementById('setA');
            const setB_HTML = document.getElementById('setB');

            let pontoA = 0;
            let pontoB = 0;
            let setA = 0;
            let setB = 0;
            pontoA_HTML.innerText = pontoA;
            pontoB_HTML.innerText = pontoB;

            document.getElementById('nomeTimeA').innerText = nomeTimeA
            document.getElementById('nomeTimeB').innerText = nomeTimeB
            document.getElementById('pontuacaoA').innerText = pontoA;
            document.getElementById('pontuacaoB').innerText = pontoB;
            pontoA_HTML.addEventListener("click", marcarPlacarA);
            pontoB_HTML.addEventListener("click", marcarPlacarB);
            
            function marcarPlacarA() {
                pontoA += 1;
                pontoA_HTML.innerText = pontoA;
                marcarSet()
            }
            function marcarPlacarB() {
                pontoB += 1;
                pontoB_HTML.innerText = pontoB;
                marcarSet()
            }

            function marcarSet() {
                if (pontoA >= 2) {
                    setA += 1;
                    setA_HTML.innerText = setA;

                    Swal.fire({
                        title: `${nomeTimeA} ganhou este Set`,
                    })
                    zerarPlacar()
                    fimDoSet()
                }
                else if (pontoB >= 2) {
                    setB += 1;
                    setB_HTML.innerText = setB;

                    Swal.fire({
                        title: `${nomeTimeB} ganhou este Set`,
                    })
                    zerarPlacar()
                    fimDoSet()
                }
            }
            function zerarPlacar() {
                pontoA = 0;
                pontoB = 0;
                pontoA_HTML.innerText = pontoA;
                pontoB_HTML.innerText = pontoB;
            }
            function fimDoSet() {
                if (setA >= 3) {
                    Swal.fire({
                        title: `${nomeTimeA} ganhou!`,
                        imageUrl: 'images/trofeu.png',
                        imageWidth: 230,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        animation: false
                    })
                }
                else if (setB >= 3) {
                    Swal.fire({
                        title: `${nomeTimeB} ganhou!`,
                        imageUrl: 'images/trofeu.png',
                        imageWidth: 230,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        animation: false
                    })
                }
            }
        }
    })
}