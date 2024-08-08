import React from "react";

export const State = (props) => {
  return (
    <div className="text-center font-serif m-auto">
      <div>
        <table className="table-fixed">
          <th>State:</th>
          <tr>
            <td>
              {props.list2?.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
