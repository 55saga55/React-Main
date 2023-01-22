import React, { useState } from "react";
import StudentForm from "./Useformik";
// import jsonData from './data.json';
import EditableRow from "./EditableRow";

function TableData() {
  const [studentData, setStudentData] = useState([]);
  console.log(studentData);
  const tableRows = studentData.map((info, item) => {
    return (
      <>
        {edit === info.id ? (
          <tbody>
            {" "}
            <EditableRow />
          </tbody>
        ) : (
          <tr key={item.id}>
            <td>{info.id}</td>
            <td>{info.name}</td>
            <td>{info.name2}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handleDeleteClick(item)}
              >
                Delete
              </button>
            </td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handelEditClick()}
              >
                Edit
              </button>
            </td>
          </tr>
        )}
      </>
    );
  });

  const addRows = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };
  const handleDeleteClick = (id) => {
    const newData = [...studentData];

    newData.splice(id, 1);

    setStudentData([...newData]);
  };

  const [edit, setedit] = useState(1);
  const handelEditClick = () => {};

  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Delete item</th>
            <th>Edit item</th>
          </tr>
        </thead>
        <tbody> {tableRows}</tbody>
        <tbody>
          {" "}
          <EditableRow />
        </tbody>
      </table>
      <StudentForm func={addRows} />
    </div>
  );
}

export default TableData;
