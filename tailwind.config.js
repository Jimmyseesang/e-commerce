/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                nunito: ["Nunito", "sans-serif"]
            },
            keyframes: {
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '25%': { transform: 'translateX(-5px)' },
                    '75%': { transform: 'translateX(5px)' },
                },
                leftSiteXl: {
                    '0%': {left: '-33.333333%'},
                    '100%': {left: '0'}
                },
                leftSiteSm: {
                    '0%': {left: '-50%'},
                    '100%': {left: '0'}
                },
                oreoMove: {
                    '0%': {left: '0'},
                    '100%': {left: '50%'}
                },
                leftSiteLogin: {
                    '0%': {left: '-33.33%'},
                    '100%': {left: '0'}
                },
                cakeAppearSm: {
                    '0%': {width: '0%'},
                    '100%': {width: '450px'}
                },
                formAppear: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'}
                },
                alertBox: {
                    '0%': {top: '-30%'},
                    '50%': {top: '10%'},
                    '100%': {top: '5%'}
                },
                closeAlert: {
                    '0%': {top: '5%'},
                    '50%': {top: '10%'},
                    '100%': {top: '-30%'}
                },
                animation1: {
                    '0%': { top: '50%', right: '50%' },
                    '100%': { top: '30%', right: '30%' }
                },
                animation2: {
                    '0%': { top: '50%', right: '50%' },
                    '100%': { top: '30%', right: '70%' }
                },
                animation3: {
                    '0%': { top: '50%', right: '50%' },
                    '100%': { top: '65%', right: '60%' }
                },
                animation4: {
                    '0%': { top: '50%', right: '50%' },
                    '100%': { top: '82%', right: '20%' }
                }
            },
            animation: {
                shake: 'shake 300ms ease-in-out',
                leftSiteXl: 'leftSiteXl 1s ease-in-out',
                leftSiteSm: 'leftSiteSm 1s ease-in-out',
                oreoMove: 'oreoMove 1s ease-in-out',
                leftSiteLogin: 'leftSiteLogin 1s ease-in-out',
                cakeAppearSm: 'cakeAppearSm 1s ease-in-out',
                formAppear: 'formAppear 1s ease-in-out',
                alertBox: 'alertBox 500ms ease-in-out forwards',
                closeAlert: 'closeAlert 500ms ease-in-out forwards',
                animation1: 'animation1 300ms ease-in-out forwards',
                animation2: 'animation2 300ms ease-in-out forwards',
                animation3: 'animation3 300ms ease-in-out forwards',
                animation4: 'animation4 300ms ease-in-out forwards'
            }
        },
    },
    plugins: [],
}