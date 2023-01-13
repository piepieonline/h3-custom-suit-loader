import { generate } from './generate.js';

function loadInitial() {
    window.e_modName = document.getElementById('modname');
    window.e_author = document.getElementById('author');
    window.e_GUID = document.getElementById('guid');
    window.e_repoId = document.getElementById('repoid');
    window.e_suitName = document.getElementById('suitname');
    window.e_suitDesc = document.getElementById('suitdesc');
    window.e_suitEntityHash = document.getElementById('suitentityhash');
    window.e_suitImage = document.getElementById('suitimage');

    fetch('https://raw.githubusercontent.com/piepieonline/h3-custom-suit-loader/main/readme.md')
        .then(res => res.text())
        .then(text => document.getElementById('readme-content').innerText = text);


    e_GUID.value = self.crypto.randomUUID();
    e_repoId.value = self.crypto.randomUUID();
}

document.getElementById('generate').onclick = generate;

loadInitial();