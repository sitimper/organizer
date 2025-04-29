import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

export default function LineChart({ options, data }) {
    return (
        <div className="w-full max-w-256 h-auto">
            <Line options={options} data={data} />
        </div>
    );
}