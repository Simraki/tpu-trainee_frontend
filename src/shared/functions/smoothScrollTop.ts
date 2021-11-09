let globLastC = Infinity

function smoothScrollTopRec(): void {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0 && globLastC > c) {
        globLastC = c
        window.requestAnimationFrame(smoothScrollTopRec)
        window.scrollTo(0, c - c / 8)
    } else {
        globLastC = Infinity
    }
}

function smoothScrollTop(timeout = 10): void {
    setTimeout(() => {
        smoothScrollTopRec()
    }, timeout)
}

export default smoothScrollTop
