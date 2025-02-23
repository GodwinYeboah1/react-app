import React from 'react'



type ITableData = {
    name: string;
    age: number;
};

type FilterTableProps = {
    data: ITableData[]; // Expect an array of table data
};

export const FilterTable = ({ data }: FilterTableProps) => {

    // const tableData = [{name: 'Mark', age: 23}, {name: 'Jacob', age: 34}, {name: 'Larry', age: 45}];


  return (
    <><table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">age</th>
      </tr>
    </thead>
    <tbody>
        {
            data.map((data, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                    </tr>
                )
            })
        }
    </tbody>
  </table></>
  )
}
