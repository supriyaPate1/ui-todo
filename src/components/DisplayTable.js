import React, { useEffect, useState } from "react";
export default function DisplayTable() {
  const [data, setData] = useState([]);
  const[,selectionType,setSelectionType]=useState(false)
  useEffect(() => {
    fetch(
      `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`,
    ).then((response) => response.json())
     .then((data) => {
        if (data.length) setData(data);
        const sel=false
        data.forEach(item => (item.sel=false));
      })
      .catch((e) => console.log(e));
  }, []);

  const selectedRows=(()=>{

  })
  const handleDelete=((val)=>{
    console.log("val",val)
    const tempData=data
  setData(tempData.filter((value)=> value.id!==val))

  })
  console.log(data)
  return <div><h1>Admin Data</h1>
 <div>
 <table id='myTable'>
      <thead>
      <tr id='headings'>
        <td>Check</td>
          <td>ID</td>
          <td>Name</td>  
          <td>Email</td>  
          <td>Role</td>    
          <td>Action</td>    
		  </tr>
      </thead>
      <tbody>
      
        {data.map((val)=>{
             
          return<tr id='trcontent'>
            <td><input type="checkbox"/></td>
            <td className='brd'>{val.id}</td>
            <td className='brd'><input value={val.name}/></td>
            <td className='brd'><input value={val.email}/></td>
            <td className='brd'><input value={val.role}/></td>
            <td className='brd'><button>Edit</button><button onClick={()=>{handleDelete(val.id)}}>Delete</button></td>
            
          </tr>
            })}
      </tbody>
    </table>

     
    </div>
  </div>;
}
