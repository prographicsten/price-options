import { LineChart as LChart, Line, XAxis } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        { id: 1, studentName: "Rokeya", math: 85, chemistry: 78, physics: 92 },
        { id: 2, studentName: "Fatema", math: 70, chemistry: 88, physics: 75 },
        { id: 3, studentName: "Suraya", math: 95, chemistry: 86, physics: 91 },
        { id: 4, studentName: "Khushi", math: 80, chemistry: 85, physics: 78 },
        { id: 5, studentName: "Bou", math: 92, chemistry: 70, physics: 88 },
    ];

      
    return (
        <div className='px-4'>
            <LChart width={250} height={300} data={studentMarks}>
                <XAxis dataKey="studentName" />
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke="green"></Line>
                <Line dataKey="physics" stroke="red"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;