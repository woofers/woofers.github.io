export const swipeTopDirection = (direction, reverse, offset = 100) => {
    const polarityPos = reverse ? '-' : '+'
    const polarityNeg = reverse ? '+' : '-'

    switch (direction) {
        case 'down':
            return { y: `${polarityPos}=100vh`, ease: "power1.easeIn" }
        case 'up':
            return { y: `${polarityNeg}=100vh`, ease: "power1.easeIn" }
        case 'left':
            return { x: `${polarityNeg}=${offset}%`, ease: "power1.easeIn" }
        default:
            return { x: `${polarityPos}=${offset}%`, ease: "power1.easeIn" }
    }
}

export const swipeBottomDirection = (direction, reverse = false, offset = 40) => {
    const polarityPos = reverse ? '-' : ''
    const polarityNeg = reverse ? '' : '-'

    switch (direction) {
        case 'down':
            return { y: `${polarityNeg}${offset}vh`, ease: "power1.easeIn" }
        case 'up':
            return { y: `${polarityPos}${offset}vh`, ease: "power1.easeIn" }
        case 'left':
            return { x: `${polarityPos}${offset}%`, ease: "power1.easeIn" }
        default:
            return { x: `${polarityNeg}${offset}%`, ease: "power1.easeIn" }
    }
}
