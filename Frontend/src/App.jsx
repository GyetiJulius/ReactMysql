import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/workers');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);  
  return (
    <div style={{ padding: "50px" }}>
      <table>
        <thead>
          <tr>
            <th>Employee Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job title</th>
            <th>Age</th>
            <th>Department Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.emp_no}</td>
              <td>{d.first_name}</td>
              <td>{d.last_name}</td>
              <td>{d.job_title}</td>
              <td>{d.age}</td>
              <td>{d.dept_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App