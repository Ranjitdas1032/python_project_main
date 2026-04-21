import { useEffect,useState } from "react";
import axios from 'axios'

import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

function StatusGraph(){
    const [chartdata, setChartdata] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/dashboard-data/")
        .then((res) => {
            const { mean = 0, std = 0 } = res.data.stats || {};

            setChartdata({
                labels: ["Mean", "Standard Deviation"],
                datasets: [
                    {
                        label: "Statistics",
                        data: [mean, std],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    }
                ]
            });

            setLoading(false);
        })
        .catch((err) => {
            console.log("Fetching data error", err);
            setLoading(false);
        });
    }, []);

    if (loading || !chartdata) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ width:'80%', margin:'0 auto' }}>
            <h2 data-cy="title">Sales Analytic</h2>
            <div style={{ height:'400px' }} data-cy="bar-graph">
                <Bar data={chartdata} />
            </div>
        </div>
    );
}
export default StatusGraph;