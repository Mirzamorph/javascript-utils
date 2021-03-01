function cookieGet(key) {
    const encodedKey = window.encodeURIComponent(key)
    const cookieStr = document.cookie;

    if (!cookieStr.includes(encodedKey)) {
        return null
    }

    const res = cookieStr
        .split(';')
        .find(keyValue => keyValue.includes(`${encodedKey}=`))
        .split('=', 2)[1]

    return window.decodeURI(res)
}

function cookieSet(key, value, options = {}) {
    const encodedKey = window.encodeURIComponent(key)
    const encodedValue = window.encodeURIComponent(value)

    let updatedCookie = `${encodedKey}=${encodedValue}`

    options = {
        path: '/',
        ...options
    }

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    for (let optionKey in options) {
        if (options.hasOwnProperty(optionKey)) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }
      }

    document.cookie = updatedCookie
}

function cookieRemove(key) {
    cookieSet(key, '', {
        'max-age': -1
    })
}
