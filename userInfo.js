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



