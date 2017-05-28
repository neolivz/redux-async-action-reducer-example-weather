import { style } from 'typestyle';

export const settingsRoot = style({
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: '#263238',
    color: '#fff',
    flexGrow: 1,
});
export const settingsMain = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    $debugName: 'settingsRoot',
    flexGrow: 1,
    paddingLeft: '1em',
    paddingRight: '1em',
});
export const settingsClose = style({
    width: '1.2em',
    paddingTop: '0.4em',
});
export const city = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexGrow: 0,
    $debugName: 'city',
});
export const cityField = style({
    flexGrow: 1,
});
export const allUnits = style({
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    flexGrow: 1,
    $debugName: 'allUnits',
});
export const unitsContainer = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    $debugName: 'unitsContainer',
    fontSize: '3em',
    minWidth: '5em',
    $nest: {
        '&>span': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            $nest: {
                '&>i': {
                    paddingLeft: '0.5em',
                }
            }
        }
    }
});


export const unitsValues = style({
    flexGrow: 1,
});
export const selected = style({
    color: '#76FF03',
});
export const smallText = style({
    alignSelf: 'center',
    fontSize: '0.5em',
    paddingLeft: '0.5em',
});
export const windUnits = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    $debugName: 'city',
});
