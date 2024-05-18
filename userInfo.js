// this function takes in an arrays of names and returns an array of objects with the original name, modified name, and index of the name in the original array
function createUserProfiles(names, modifiedNames) {
    let userProfiles = [];
    names.forEach((name, id) => {
        userProfiles.push({
            originalName: name,
            modifiedName: modifiedNames[id],
            index: id + 1
        });
    });
    return userProfiles;
}


console.log(createUserProfiles(['Rahina', 'Bob', 'Ken', 'Lisa'], ['RAHINA', 'bob', 'KEN', 'lisa']));



