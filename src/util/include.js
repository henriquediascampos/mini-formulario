var fs = require('fs');
const { Script } = require('vm');

function include() {
    const includes = document.getElementsByTagName('include')
    Array.from(includes)
        .forEach(function (include_) {
            let url = include_.attributes.item(0).value;
            if (url.indexOf("./") !== 0) {
                url = './' + url;
            }

            const xmlhttp  = new XMLHttpRequest();
            xmlhttp.onload=(resq) => {
                const html = new DOMParser().parseFromString(xmlhttp.responseText, "text/html");
                const h = html.documentElement
                h.id = 'patos'
                
                include_.insertAdjacentElement('afterend', h);
                const a = document.createElement('div');
                const patos =  document.getElementById('patos')

                Array.from(document.getElementsByTagName('script')).forEach(element =>{
                    patos.appendChild(element)
                })

            }
            xmlhttp.open("GET",url ,true);
            xmlhttp.send();

        });
}



module.exports = { include }

