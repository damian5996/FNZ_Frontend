const NotStandardErrors = {
    401: "Ta funkcja jest dostępna tylko dla moderatorów serwisu",
    500: "Ups, coś poszło nie tak. Sprawdź połączenie z internetem."
};

ErrorHandler = {
    handleError: function(errorObject) {
    if(!errorObject && errorObject.status !== 200){
        return NotStandardErrors[500];
    }

    if(!errorObject.data && errorObject.status !== 200){
        return NotStandardErrors[500];
    }

    if(errorObject.status === 401){
        return NotStandardErrors[401];
    }

    if(errorObject.data.errorOccurred !== undefined){
        return Object.values(errorObject.data.errors)[0];
    }

    return NotStandardErrors[500];
}
};