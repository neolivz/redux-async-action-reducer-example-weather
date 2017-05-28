import * as React from 'react';
import * as style from './style';

interface WindWithUnits extends Wind {
    unit: WindSpeedUnits;
}

const beaufortScale = (speed: number): number => {
    if (speed <= 0.3) {
        return 0
    } else if (speed <= 1.5) {
        return 1
    } else if (speed <= 3.3) {
        return 2
    } else if (speed <= 5.5) {
        return 3
    } else if (speed <= 7.9) {
        return 4
    } else if (speed <= 10.7) {
        return 5
    } else if (speed <= 13.8) {
        return 6
    } else if (speed <= 17.1) {
        return 7
    } else if (speed <= 20.7) {
        return 8
    } else if (speed <= 24.4) {
        return 9
    } else if (speed <= 28.4) {
        return 10
    } else if (speed <= 32.6) {
        return 11
    } else {
        return 12
    }
}


const sectors: Direction[] = ['North', 'East', 'South', 'West'];

const calculateN = (deg: number): number => {
    //Total division is 16 so every 22.5 degreess
    //-11.25(348.75) to 11.25 is north 11.25 to 33.75 nne 33.75 56.25 ne etc...
    // So formula would 11.25+ n * 22.5 would give us the quarter the degree lies in
    // Given degree would lie betweem 11.25 + (n-1) * 22.5 and 11.25 + n * 22.5
    //Finding n would give us which eight the degree lie
    //Since 
    return Math.floor((((deg + 11.25) / 22.5))) % 16;
}

const degreeCalculator = (deg: number): number => {
    const n = calculateN(deg)
    //Since the class names are 23 and 68 instead of 22.5 and 67.5 we round the numbers
    //NOTE: 
    return Math.round((n * 22.5));
}

//So for quarter 0 sector 1 , we will get North North East
const sectorAndSectionToWords = (quarter: number, sector: number): string => {
    if (sector === 0) {
        return `${sectors[quarter % 4]}`;
    } else if (sector === 1) {
        return `${sectors[quarter % 4]} ${sectors[quarter % 4]} ${sectors[(quarter + 1) % 4]}`
    } else if (sector === 2) {
        return `${sectors[quarter % 4]} ${sectors[(quarter + 1) % 4]}`
    } else if (sector === 3) {
        return `${sectors[quarter % 4]} ${sectors[(quarter + 1) % 4]} ${sectors[(quarter + 1) % 4]}`
    }
}

const degreeToWords = (deg: number): string => {
    const n = calculateN(deg);
    const quarter = Math.floor(n / 4);
    const sector = n % 4;
    return sectorAndSectionToWords(quarter, sector);
}

const convert = (speed: number, unit: WindSpeedUnits): number => {
    if (unit === 'm/s') return speed;
    else if (unit === 'kmph') return Math.round(speed * 3.6 * 100) / 100;
    else if (unit === 'mph') return Math.round(speed * 2.23694 * 100) / 100;
}

export const Wind: React.StatelessComponent<WindWithUnits> = (props) => {
    const { deg, speed, unit } = props;
    const scale = beaufortScale(speed);
    const degree = degreeCalculator(deg);

    return (
        <div className={style.rootContent}>
            <div className={style.rootSection}>
                <span>
                    <i className={`wi wi-wind-beaufort-${scale}`}></i>
                </span>
                <span>
                    {convert(speed, unit)}
                    <span>
                        {unit}
                    </span>
                </span>
            </div>
            <div className={style.rootSection}>
                <span>
                    <i className={`wi wi-wind towards-${degree}-deg`}></i>
                </span>
                <span className={style.windDescription}>
                    {degreeToWords(deg)}
                </span>
            </div >
        </div>
    )
}