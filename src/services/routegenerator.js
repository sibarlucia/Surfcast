const baseUrl = 'http://159.223.143.166/'

// usado para manejar el dominio de las urls
export const routeGenerator = (url) => {
    if (url[0] === '/') {
        url = url.slice(1)
    }
    return `${baseUrl}${url}`
}