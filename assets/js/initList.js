import {playlist} from "./playlist.js";



function initList() {

    playlist.forEach(function(value,index) {
        const list = document.querySelector("#list");
        const divItems = document.createElement('div');
        const divElement = document.createElement('div');
        const imgItems = document.createElement('img');
        const titreItems = document.createElement('span');
        const barreItems = document.createElement('span');
        const artiste = document.createElement('span');
        const divIcon = document.createElement('div');
        const playIcon = document.createElement('i');
        const loveIcon = document.createElement('i');
        let isPLay = false;
        let isLove = false;
        divItems.classList.add("divItems");
        divElement.classList.add("divElement");
        imgItems.classList.add("imgItems");
        divIcon.classList.add("divIcon");


        list.append(divItems);
        divItems.append(divElement);
        imgItems.src = playlist[index].cover;
        divElement.append(imgItems);
        titreItems.textContent = playlist[index].titre
        divElement.append(titreItems);
        barreItems.textContent = "-"
        divElement.append(barreItems);
        artiste.textContent = playlist[index].artiste
        divElement.append(artiste);

        // Icons
        divItems.append(divIcon);
        playIcon.classList.add("fa-solid");
        playIcon.classList.add("fa-play");
        divIcon.append(playIcon);
        loveIcon.classList.add("fa-heart");
        loveIcon.classList.add("fa-regular");
        divIcon.append(loveIcon);

        playIcon.addEventListener("click", () => {
            let i = index;

            // enverse de 
            isPLay = !isPLay
            
            nextTrack(false);
                if (isPLay) {
                    playIcon.classList.replace("fa-pause", "fa-play");
                } else {
                    playIcon.classList.replace("fa-play", "fa-pause");
                }
        });
        
        loveIcon.addEventListener("click", () => {
            let i = index;
            isLove = !isLove
            if (isLove) {
                loveIcon.classList.replace("fa-regular", "fa-solid");
            } else {
                loveIcon.classList.replace("fa-solid", "fa-regular");
            }
        });
    });
}


export {initList};