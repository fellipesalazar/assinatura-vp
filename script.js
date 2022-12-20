$(function () {

    $("#nome").on("input", function () {
        $(".nome").text($(this).val());
    });

    $("#cargo").on("input", function () {
        $(".cargo").text($(this).val());
    });

    $("#setor").on("input", function () {
        $(".setor").text($(this).val() + " | Vamos Parcelar");
    });

    $("#telefone").on("input", function () {
        $(".telefone").text($(this).val());
    });

    $("#email").on("input", function () {
        $(".email").text($(this).val());
    });

    $(".baixar").on("click", function (e) {
        gerarImagem($(".nome").text());
    });

    function gerarImagem(nome) {
        html2canvas(document.querySelector('.assinatura')).then(function (canvas) {
            var name = 'assinatura-'+nome.toLowerCase().replace(" ","-");
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function () {
                let a = document.createElement('a');
                a.href = window.URL.createObjectURL(xhr.response);
                a.download = name + '.png';
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                a.remove()
            };
            xhr.open('GET', canvas.toDataURL("image/png", 1.0));
            xhr.send();
        });

    }



});