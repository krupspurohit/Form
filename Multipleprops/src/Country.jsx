import React from "react";

const Country = (props) => {
  return (
    <div className="text-center font-serif m-auto w-6/12">
      <div>
        <table className="table-auto">
          <th>Country list: </th>
          <tr>
            
            <td>
              {props.list1.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Country;
