async function loadCrashs() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const dateTime = new Date().toLocaleString("pt-BR").padStart(2, '0').split(' ');

    const page = urlParams.get('pagina');;

    await fetch(`/${page ? `crash?page=${page}` : 'crash'}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    })
    .then(response => response.json())
    .then((data) => renderData(data))

    const loading = document.querySelector('.loading');

    loading.style.display = 'none';

    function renderData(data) {
        for(crash of data) {
            const crashSection = document.querySelector('.wrapper');

            const crashDiv = document.createElement('div');
            const crashSpan = document.createElement('span');
            const crashP = document.createElement('p');

            crashDiv.classList = `${crash.bad_crash ? 'crash red' : 'crash'}`;

            crashSpan.innerText = `${crash.crash_point}X`
            crashP.innerText = `${dateTime[0]} \n ${dateTime[1]}`;

            crashDiv.append(crashSpan, crashP)
            crashSection.append(crashDiv);
        }

    }
}

loadCrashs();