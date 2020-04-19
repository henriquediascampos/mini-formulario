var fs=require('fs');

function writeFile(newObject) {
    const folder='./list'
    const file='/list.json'
    createFolder(folder);
    saveOrUpdateFile(folder, file, newObject);
}

function writeNewList(list) {
    const folder='./list'
    const file='/list.json'
    createFolder(folder);

    let modifiedjson=JSON.stringify(list);
    writeJson(path, modifiedjson);
}


function saveOrUpdateFile(folder, file, newObject) {
    const path = folder.concat(file);
    let newJson;

    validatorFileExists(path);

    const { json } = getObjectJsonFile(path);


    const exists = json.filter(e => e.id==newObject.id);

    if (exists.length) {
        newJson = updateObjectJson(json, newObject);
    } else {
        newJson = saveNewObjectJson(json, newObject);
    }
    if (!newJson) {
        return;
    }

    let modifiedjson=JSON.stringify(newJson);
    // modifiedjson=indentCode(modifiedjson);

    writeJson(path, modifiedjson);
}

function indentCode(modifiedjson) {
    modifiedjson=modifiedjson.replace(/,/g, ',\n');
    modifiedjson=modifiedjson.replace('[', '[\n');
    modifiedjson=modifiedjson.replace(']', '\n]');
    modifiedjson=modifiedjson.replace(/{/g, '    {\n');
    modifiedjson=modifiedjson.replace(/},/g, '\n    },');
    modifiedjson=modifiedjson.replace(/\n"/g, '\n        "');
    return modifiedjson;
}

function saveNewObjectJson(json, newObject) {
    const existsMesmoName = json.filter(e => e.name == newObject.name).length;
    if (existsMesmoName) {
        console.error(`there is already an object registered with that name.`);
        return;
    } else {
        let ultimoIndex = json
            .map(e => parseInt(e.id))
            .sort((a, b) => b-a)[0];
        newObject.id=ultimoIndex+1;
        const newJson = [...json, newObject];
        return newJson;
    }
}

function updateObjectJson(json, newObject) {
    return json.reduce((accumulator, current) => {
        if (current.id===newObject.id) {
            if (newObject.name)
                current.name=newObject.name;
        }
        return accumulator=[...accumulator, current];
    });
}

function getObjectJsonFile(path) {
    const fileRead=fs.readFileSync(path);
    const json=JSON.parse(fileRead.toString());
    return { json, fileRead };
}

function writeJson(path, modifiedjson) {
    fs.writeFileSync(path, modifiedjson);
}

function validatorFileExists(path) {
    if (!fs.existsSync(path)) {
        fs.writeFile(path, '{}', function (err) {
            if (err)
                throw err;
            console.log('Saved!');
        });
    }
}

function createFolder(folder) {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
}

module.exports={
    writeFile, writeNewList
};