function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function displayContentByIndex(i) {
    document.getElementById('main').hidden = true;
    document.getElementById('content-box').hidden = false;
    window.scrollTo(0, 0);
    // ___________________________________________________________
    document.getElementById('review-area').innerHTML = `
    <div style="text-align: center; font-size: 300%; margin-bottom: 10px;">${post[i].name}</div>
    <img src="${post[i].img}" alt="Img not found"
        style="display: block; margin-left: auto; margin-right: auto; width: 100%; height: auto;">
    <p>${introductionContent()}</p>
    `
    function introductionContent() {
        let contentHTML = '';
        if (typeof (post[i].content) == 'object') {
            for (j = 0; j < post[i].content.length; j++) {
                contentHTML = contentHTML + `
                <div>
                ${post[i].content[j]}
                </div>
                <br>`
            }
        } else {
            contentHTML = String(post[i].content);
        }
        return contentHTML;
    }
    for (k = 0; k < post[i].activities.length; k++) {
        function activityDesHTML() {
            let desHTML = '';
            if (typeof (post[i].activities[k].des) == 'object') {
                for (j = 0; j < post[i].activities[k].des.length; j++) {
                    desHTML = desHTML + `
                <div>
                ${post[i].activities[k].des[j]}
                </div>
                <br>`
                }
            } else {
                desHTML = String(post[i].activities[k].des);
            }
            return desHTML;
        }
        let activitiesHTML;
        activitiesHTML = `
                <div style="text-align: center; font-size: 200%; font-weight: bold; margin-bottom: 5px;">${post[i].activities[k].name}</div>
                <img src="${post[i].activities[k].img}" alt="Image not found"
                    style="display: block; margin-left: auto; margin-right: auto; width: 90%; height: auto;">
                <br>
                <div>${activityDesHTML()}</div>
                <br>
        `;
        let integerNo = 1;

        for (i2 in post[i].activities[k].sub_content) {
            function subcontentBullet() {
                let subcontentTitleText;
                if (post[i].activities[k].subcontentTitle == true) {
                    subcontentTitleText = `${integerNo}. ${i2}`;
                } else {
                    subcontentTitleText = '';
                }
                return subcontentTitleText;
            }
            activitiesHTML = activitiesHTML + `
            <div>
                    <div style="font-size: 80%; font-weight: bold;">
                        ${subcontentBullet()}</div>
                        <br>
                    <div>${post[i].activities[k].sub_content[i2][0]}</div>
                    <br>
                    <img src="${post[i].activities[k].sub_content[i2][1]}"
                        alt="Img not found"
                        style="display: block; margin-left: auto; margin-right: auto; width: 80%; height: auto;">
                    <div style="text-align: center; font-style: italic; font-size: 80%;">
                        ${post[i].activities[k].sub_content[i2][2]}</div>
                    <br>
                </div>
            `;
            integerNo++;
        }
        document.getElementById('review-area').insertAdjacentHTML('beforeend', activitiesHTML);
        let seeMoreIndex = [];
        let indexNotChosen = [];
        {
            for (k = 0; k < post.length; k++) {
                indexNotChosen.push(k);
            }
            indexNotChosen.splice(i, 1);
        }
        {
            for (k = 0; k < 4; k++) {
                let indexChosen = getRandomInt(0, indexNotChosen.length - 1);
                seeMoreIndex.push(indexNotChosen[indexChosen]);
                indexNotChosen.splice(indexChosen, 1);
            }
        }
        document.getElementById('see-more-box').innerHTML='';
        {
            for (k = 0; k < seeMoreIndex.length; k++) {
                document.getElementById('see-more-box').insertAdjacentHTML('beforeend',
                    `
                <div class="see-more-option" style="position: relative;
                text-align: center;
                color: white;
                margin: 10px"
                onclick="displayContentByIndex(${seeMoreIndex[k]})">
               <img src="${post[seeMoreIndex[k]].img}" alt="" style="width: 100%; 
               height: auto;
               border: white 3px solid;
               margin: 2px;
               box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.411), 0 0 rgba(0, 0, 0, 0.431);">
               <div style="position: absolute;
               bottom: 10px;
               left: 10px;
               font-weight: bolder;
               text-shadow: 1px 1px #000000;">${post[seeMoreIndex[k]].name}</div>
                </div>
                `)
            }
        }
    }
    closeAdminPanel();
}