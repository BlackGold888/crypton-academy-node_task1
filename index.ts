interface Student {
    name: string;
    avgMark: number;
}

interface Statistic {
    avgMark: number;
    highestMark: string;
    lowestMark: string;
}

function getStatistics(marks: Student[]): Statistic {
    let statistic: Statistic = {
        avgMark: 0,
        highestMark: '',
        lowestMark: '',
    };

    let max: number = 0;
    let min: number = marks[0].avgMark;

    marks.forEach(marks => {
        if (marks.avgMark > max) {
            statistic.highestMark = marks.name;
            max = marks.avgMark;
        }

        if (marks.avgMark <= min){
            min = marks.avgMark;
            statistic.lowestMark = marks.name;
        }

        statistic.avgMark += marks.avgMark;
    });
    statistic.avgMark /= marks.length;

    return statistic
}

const testMarks = [
    {
        name: 'Lena',
        avgMark: 4.89
    },
    {
        name: 'Vasya',
        avgMark: 3.75
    },
    {
        name: 'Andrew',
        avgMark: 8.75
    },
    {
        name: 'John',
        avgMark: 0.75
    },

];

console.log(getStatistics(testMarks));