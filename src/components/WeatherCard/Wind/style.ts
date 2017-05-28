import { style } from 'typestyle';



export const rootContent = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    $debugName: 'rootContent',
    flexGrow: 0,
    paddingLeft: '1em',
    paddingTop: '1em',
})
export const rootSection = style({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    $debugName: 'rootContent',
    fontSize: '2em',
    flexGrow: 0,
    $nest:{
        '&>span':{
            paddingLeft:'0.2em',
            $nest:{
                '&>span':{
                    fontSize:'0.5em'//m/s
                }
            }
        }
    }
})

export const windDescription = style({
    fontSize:'0.5em',
    alignSelf:'center',
})