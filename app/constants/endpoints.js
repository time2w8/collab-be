const endpoints = {
    API_NAME: '/api',
    API_VERSION: '/v1.0',
    COLLABORATORS_URL: {
        MAIN: '/collaborators',
        OPERATIONS: {
            LIST: '/',
            GET_ONE: '/:idCollaborator',
            SAVE: '/save',
            UPDATE: '/save/:idCollaborator',
            DELETE: '/delete/:idCollaborator'
        }
    },
    POSITIONS_URL: {
        MAIN: '/positions',
        OPERATIONS: {
            LIST: '/',
            GET_ONE: '/:idPosition',
            SAVE: '/save',
            UPDATE: '/save/:idPosition',
            DELETE: '/delete/:idPosition'
        }
    },
}

module.exports = {
    endpoints
}