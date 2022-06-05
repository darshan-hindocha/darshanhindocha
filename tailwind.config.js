const {spacing, fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
    darkMode: 'class',
    theme: {
        extend: {
            gridTemplateColumns: {
                // Simple 2 column grid
                '2': 'repeat(2, minmax(100px, 1fr))'
            },
            colors: {
                'blue-opaque': 'rgb(13 42 148 / 18%)',
                old: {
                    0: '#BABBBD',
                    50: '#C8D1D9',
                    100: '#BABBBD',
                    200: '#F78166',
                    300: '#238636',
                    400: '#175225',
                    500: '#30363D',
                    600: '#30363D',
                    700: '#161B22',
                    800: '#0D1116',
                    900: '#020408'
                },
                gray: {
                    50: '#f0f6fc',
                    100: '#C2C8CF',
                    200: '#9BA2AA',
                    300: '#7D7D7F',
                    400: '#30363d',
                    500: '#30363D',
                    600: '#30363D',
                    700: '#151a22',
                    800: '#0d1116',
                    900: '#01040a',
                },
                green: {
                    light: '#f78166',
                    mid: '#238636',
                    dark: '#242710',
                }
            },
            fontFamily: {
                sans: ['IBM Plex Sans', ...fontFamily.sans]
            },
            css: {
                color: 'colors.gray.200',
                a: {
                    color: 'colors.blue.400',
                    '&:hover': {
                        color: 'colors.blue.600'
                    },
                    code: {color: 'colors.blue.400'}
                },
                blockquote: {
                    borderLeftColor: 'colors.gray.700',
                    color: 'colors.gray.300'
                },
                'h2,h3,h4': {
                    color: 'colors.gray.100',
                    'scroll-margin-top': spacing[32]
                },
                hr: {borderColor: 'colors.gray.700'},
                ol: {
                    li: {
                        '&:before': {color: 'colors.gray.500'}
                    }
                },
                ul: {
                    li: {
                        '&:before': {backgroundColor: 'colors.gray.500'}
                    }
                },
                strong: {color: 'colors.gray.100'},
                thead: {
                    th: {
                        color: 'colors.gray.100'
                    },
                    borderBottomColor: 'colors.gray.600'
                },
                tbody: {
                    tr: {
                        borderBottomColor: 'colors.gray.700'
                    }
                }
            },
        }
    },
    plugins: [require('@tailwindcss/typography')],
    important: '#__next',
};