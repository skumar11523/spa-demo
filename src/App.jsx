import react,{ useState } from "react";


function App()
{
  const [employees,setEmployees]=useState([]);
  const [name,setName] = useState("");  
  const [role,setRole]= useState("");

  const addEmployee = () => 
    {
      if(name && role)
      {
        setEmployees([...employees,{name,role}]);
        setName("");
        setRole("");
      }
    };
    return (
      <div className="container">
       
        <h3>EmployeeDetails</h3>
        <input
        type="text"
        placeholder="Enter Employee name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
         <input
        type="text"
        placeholder="Enter Employee Role"
        value={role}
        onChange={(e)=>setRole(e.target.value)}
        />
        <button onClick={addEmployee}>Add Employee</button>
        <ul>
          {employees.map((emp,index) => <li key={index}>{emp.name}-{emp.role}</li>)}
        </ul>
      </div>
    );
}
export default App;