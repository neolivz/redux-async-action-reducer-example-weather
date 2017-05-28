import { style } from 'typestyle';

export const rootContent = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    $debugName: 'rootContent',
    flexGrow: 0,
    paddingLeft:'1em',
})
export const maxMinContainer = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    $debugName: 'maxMinContainer',
    flexGrow: 0,
    fontSize:'1.2em',
})
export const maxMin = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    $debugName: 'maxMin',
    flexGrow: 0,
    fontSize:'1.2em',
})
export const thermoMeter = style({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    $debugName: 'thermoMeter',
    flexGrow: 0,
    })

export const currentTemperature = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    $debugName: 'currentTemperature',
    flexGrow: 0,
    fontSize:'2em',
    paddingRight:'1em',
    alignSelf:'center',
    $nest:{
        '&>i':{
            alignSelf:'center',
        }
    }
})
