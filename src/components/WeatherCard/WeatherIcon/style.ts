import { style } from 'typestyle';

export const weatherRoot = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    $debugName: 'weatherRoot',
    flexGrow: 0,
})
export const weatherText = style({
    fontSize: '0.1em',
    alignSelf:'center',
})
export const weatherIconDiv = style({
    overflow:'hidden',
})
