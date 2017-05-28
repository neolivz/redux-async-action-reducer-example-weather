import { keyframes, media, style } from 'typestyle';

export const root = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    $debugName: 'root',
    flexGrow: 1,
    padding: '0.2em',
    backgroundColor: '#fff',
    fontWeight: 300,
});

const positionAnimation = keyframes({
    '0%': { bottom: 0, },
    '50%': { bottom: '-100%' },
    '100%': { bottom: 0 }
})

const positionAnimationSamll = keyframes({
    '0%': { bottom: 0, },
    '50%': { bottom: '-50%' },
    '100%': { bottom: 0 }
})
export const main = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    $debugName: 'mainRight',
    flexGrow: 1,
    padding: '0.2em',
    color: '#fff',
    position: 'relative',
});


export const mainBg = style({
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    opacity: 0.2,
    zIndex: 0,
    overflow: 'hidden',
});
export const mainBgImg = style({
    position: 'absolute',
    left: 0,
    animationName: positionAnimation,
    animationDuration: '20s',
    animationIterationCount: 'infinite',
}, media({ minWidth: 0, maxWidth: 650 }, { animationName: positionAnimationSamll }),
);

export const mainLeft = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    $debugName: 'mainLeft',
    flexGrow: 1,
    padding: '0.2em',
    zIndex: 1,
});

export const mainRight = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    $debugName: 'mainRight',
    flexGrow: 1,
    padding: '0.2em',
    zIndex: 1,
});

export const settings = style({
    display: 'flex',
    alignSelf: 'flex-end',
});

export const weatherIcon = style({
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '10em',
    alignSelf: 'center',
    $debugName: 'weatherIcon',
});
export const weatherDescription = style({
    alignSelf:'center',
    paddingBottom:'1em',
});

export const sunTimings = style({
    display: 'flex',
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
});


export const footer = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    $debugName: 'footer',
    flexGrow: 1,
    padding: '0.2em'
});

export const title = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    $debugName: 'title',
    padding: '0.2em',
    $nest: {
        '&>h1': {
            fontSize: '1.2em',
            margin: '0 0 20px',
            position: 'relative',
            fontWeight: 300,
            $nest: {
                '&::after': {
                    content: `''`,
                    position: 'absolute',
                    width: '20px',
                    height: '2px',
                    backgroundColor: '#fff',
                    left: 0,
                    bottom: '-11px',
                }
            }
        }
    }
});




export const rootContent = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    $debugName: 'rootContent',
    flexGrow: 0,
})
export const rootSection = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    $debugName: 'rootContent',
    flexGrow: 0,
    padding: '1em',
})
