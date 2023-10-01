function debounce(fn: Function, delay: number = 500): Function {
    let timeout: null | NodeJS.Timeout = null
    return function() {
        if (timeout) {
            clearTimeout(timeout) 
        }
        timeout = setTimeout(() => {
            fn.apply(null, arguments
                )
        }, delay)
    } 
}
