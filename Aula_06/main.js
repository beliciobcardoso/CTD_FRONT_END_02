const dark = document.querySelector('.dark')

function modoEscuro(){
    dark.classList.toggle('dark')
}

let posts = [
    {
        titulo: "O tigre",
        texto: "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.",
        imagem: "./imagens/tiger.jpg"
    },
    {
        titulo: "O leão",
        texto: "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.",
        imagem: "./imagens/leon.jpg"
    },
    {
        titulo: "O leopardo",
        texto: "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).",
        imagem: "./imagens/leopardo.jpg"
    },
    {
        titulo: "A pantera negra",
        texto: " A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.",
        imagem: "./imagens/pantera-negra.jpg"
    },
    {
        titulo: "O jaguar",
        texto: " O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).",
        imagem: "./imagens/jaguar.jpg"
    },
    {
        titulo: "O guepardo",
        texto: "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.",
        imagem: "./imagens/chita.jpg"
    },
    {
        titulo: "Maine Coon",
        texto: "Todas os gatos fotografados são da raça Maine Coon, originária dos Estados Unidos e considerada a raça americana de pelo longo mais antiga, além de ser a maior de todas as raças de gato do mundo. Também conhecido como ‘gigante gentil’, apesar do tamanho este costuma ser um dos gatos mais dóceis do mundo.",
        imagem: "./imagens/maine_coon.jpg"
    },
    {
        titulo: "Onça Pintada",
        texto: "A onça-pintada (Panthera onca) são animais carnívoros que apresentam corpo e cauda com pelo curto, as patas são adaptadas a vida cursorial, o focinho é curto e as orelhas pequenas e arredondadas. Os sentidos mais apurados são a visão e a audição, apesar do olfato também ser bem desenvolvido, quando comparado com outros animais, apresenta uma inferioridade. A mandíbula e os dentes são bem fortes, o que lhe permite a captura de animais maiores do que eles. O comprimento total (cabeça à cauda) é de até 2,70 metros e pesa entre 35 kg e 158 kg. Sua pelagem varia do amarelo-claro ao castanho e é caracterizada por manchas pretas em.",
        imagem: "./imagens/onca_pintada.jpg"
    }
]

let mainContent = document.querySelector('#mainContent')

for (let post of posts) {
    mainContent.innerHTML += `
    <div class="item">
        <img src="${post.imagem}">
        <h2>${post.titulo}</h2>
        <p>${post.texto}</p>
    </div>
    `
}