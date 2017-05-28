import { style } from 'typestyle';

export const rootContent = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    $debugName: 'rootContent',
    flexGrow: 0,
    paddingLeft: '1em',
});
export const rootSection = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    $debugName: 'rootContent',
    flexGrow: 0,
    fontSize: '2em',
    $nest: {
        '&>*': {
            paddingRight: '0.2em',
        },
        '&>span': {
            fontSize: '0.5em',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            paddingBottom: '0.2em',
            paddingLeft: '0.2em',
        }
    }
});
