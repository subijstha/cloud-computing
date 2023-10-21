import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  const [students, setstudents] = useState([]);
  useEffect(() => {
    async function fetchStudents() {
      const studentsFromLambda = (
        await axios.get(
          "<your lambda URL>"
        )
      ).data;
      setstudents(studentsFromLambda);
      console.log(studentsFromLambda);
    }
    fetchStudents();
  }, []);
  return (
    <div>
      Cloud Computing course
      <ol>
        {students.map((student) => (
          <li>{student}</li>
        ))}
      </ol>
    </div>
  );
}