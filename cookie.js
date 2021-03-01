function cookieGet(key) {
    const encodedKey = window.encodeURIComponent(key)
    const cookieStr = document.cookie;

    if (!cookieStr.includes(encodedKey)) {
        return null
    }

    const res =  cookieStr
        .split(';')
        .find(keyValue => keyValue.includes(`${encodedKey}=`))
        .split('=', 2)[1]

    return window.decodeURI(res)
}
