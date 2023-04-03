const fs = require('fs');
const { getBasicInfo } = require('ytdl-core');
const ytdl = require('ytdl-core')

// criando variaveis, para poder não ficar embaralhando quando estiver fazendo as alterações no codigo

let url_do_video = 'https://www.youtube.com/watch?v=uivFFnCI8tM';
const info_do_video = ytdl.getBasicInfo(url_do_video)

// preparando um opção pré produzida, ja que o ytdl ja ira fazer o download, porem ele não emite um output para download, porem é mais facil ja deixar salvo aqui
const opcoes_do_video = {
    quality: 'highestaudio',
    filter: 'audioonly',
    format: 'mp3'
};

const baixar_video = ytdl(url_do_video, opcoes_do_video);

const stream_do_arquivo = fs.createWriteStream('output.mp3');

// para finalmente fazer o download
baixar_video.pipe(stream_do_arquivo)

stream_do_arquivo.on('Finalizado', () => {
    console.log('O download foi finalizado.');
});

