import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import "./app.css";
import {Link} from '@material-ui/core'


function App() {

  const [data, setData] = useState([])
  const columns = [
    { title: "First Name", field: "first_name", searchable:true },
    { title: "Last Name", field: "last_name", searchable:true },
    { title: "Age", field: "age", searchable:false },
    { title: "Email", field: "email", searchable:false },
    { title: "Website", field:"web",render:rowData=><Link href={`${rowData.web}`} target="_blank">{rowData.web}</Link>, searchable:false}
  ]
  useEffect(() => {
    fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])

  return (
    <div className="App">
      <h1 align="center">Frontend Assignment (React.js)</h1>
      <MaterialTable
        title="Users"
        data={data}
        columns={columns}
        options={{searchFieldAlignment: "left", searchFieldVariant: "outlined", pageSize: 10,pageSizeOptions:false,paginationCount:5 ,paginationType:"outline", showFirstLastPageButtons:false}}
      />
    </div>
  );
}

export default App;
