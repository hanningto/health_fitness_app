import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts';
import axios from 'axios';

const SleepChartComponents = () => {
  const [sleepData, setSleepData] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchSleepData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/sleep');
        const data = response.data;
        const sleepDurations = data.map(entry => entry.sleep_duration);
        const sleepDates = data.map(entry => new Date(entry.sleep_date).toLocaleDateString());

        setSleepData(sleepDurations);
        setDates(sleepDates);
      } catch (error) {
        console.error('Error fetching sleep data:', error);
      }
    };

    fetchSleepData();
  }, []);

  return (
    <div>
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: dates,
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: sleepData,
          },
        ]}
        width={600}
        height={400}
      />
    </div>
  );
};

export default SleepChartComponents;
