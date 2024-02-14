module.exports = {
    success: {
        s0: {
            code: "DogCreated",
            http: 201,
            type: "success"
        },
        s1: {
            http: 200,
            code: "DogUpdated",
            type: "success"
        },
        s2: {
            http: 200,
            code: "DogFound",
            type: "success"
        },
        s3: {
            http: 200,
            code: "DogDeleted",
            type: "success"
        },
        s4: {
            http: 200,
            code: "Deactivated",
            type: "success"
        },
        s5: {
            http: 204,
            code: "NoDogs",
            type: "success"
        },
        s6: {
            http: 200,
            code: "Activated",
            type: "success"
        }
    },
    error: {
        e0: {
            http: 404,
            code: "DogNotFound",
            type: "error"
        }
    }
}