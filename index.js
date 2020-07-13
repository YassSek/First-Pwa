if( "serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("enregistrement ok");
        console.log(registration);
    }).catch(error => {
        console.log(error);
    })
}
