export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

export const fadeIn = {
    hidden: { 
        opacity: 0, 
        filter: 'blur(8px)' 
    },
    show: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.7,
            ease: 'easeInOut',
        },
    },
}

export const fadeInUp = {
    hidden: { 
        opacity: 0, 
        y: 20, 
        filter: 'blur(8px)' 
    },
    show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.7,
            ease: 'easeInOut',
        },
    },
}