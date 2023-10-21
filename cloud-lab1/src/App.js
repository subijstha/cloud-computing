import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  const [students, setstudents] = useState([]);
  useEffect(() => {
    async function fetchStudents() {
      const studentsFromLambda = (
        await axios.get(
          "https://pfh52btqgmdxbiybdrjs7mvbai0nrgqz.lambda-url.us-east-1.on.aws/"
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
          <li><h4>{student}</h4></li>
        ))}
      </ol>
    </div>
  );
}