function displayContentByIndex(i) {
    document.getElementById('content-box').innerHTML = `
    <div style="text-align: center; font-size: 300%; margin-bottom: 10px;">${post[i].name}</div>
    <img src="${post[i].img}" alt="Img not found"
        style="display: block; margin-left: auto; margin-right: auto; width: 100%; height: auto;">
    <p>${introductionContent()}</p>
    `
    function introductionContent() {
        let contentHTML = '';
            if (typeof(post[i].content) == 'object') {
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
            if (typeof(post[i].activities[k].des) == 'object') {
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
        document.getElementById('content-box').insertAdjacentHTML('beforeend', activitiesHTML);
    }
    closeAdminPanel();
}