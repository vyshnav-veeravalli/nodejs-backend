const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false;

            if(success){
                resolve({name: "sailaja", age: 23});
            }
            else{
                reject("failed to fetch");
            }
        }, 1000);
    });
};

const fetch = async () => {
    try{
        const user = await getUser();
        console.log("user: ", user);
    }
    catch(err){
        console.log("error: ", err);
    }
};

fetch();