//   --------------- To SAVE LOGIN INFO  ---------------------------------------------------- // 

export const loginon = (data) => {
    return {
        type: "logedin",
        payload:data
    }
} 

export const loginoff = () => {
    return {
        type: "logedout"
    }
}

// ------------------------------------------------------------------------------------------ //


// ------------- To SHOW CART ON DASHBOARD --------------------------------------------------- // 

export const cartvisibilityon = () => {
    return {
        type: "carticonclickon"
    }
}

export const cartvisibilityoff = () => {
    return {
        type: "carticonclickoff"
    }
}


// ------------------------------------------------------------------------------------------- //