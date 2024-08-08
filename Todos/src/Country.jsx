import React from "react";

const Country = (props) => {
  const menu = props;
  console.log(menu);
  

  return (
    <div className="text-center my-5 font-bold">
      Country List:
      <div>
        {props.menu?.map((item) => (
          <div key={item.id}>
            <ul>
              <li>{item.name}</li>
            </ul>
          </div>
        ))}
      </div>

            <div>
                Props List: 
                <div>
                    {props.data?.map((item1)=>(
                        <div key={item1.name2.id}>
                            <ul>
                                <li>
                                    {item1.name1.name}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
    </div>
  );
};

export default Country;
