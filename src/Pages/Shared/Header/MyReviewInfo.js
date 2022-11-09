import React from "react";

const MyReviewInfo = ({ review, handelDelete, handelEdit }) => {
  const { customer, massage, photo, _id, serviceName } = review;

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <tbody>
          <tr>
            <th>
              <button onClick={() => handelDelete(_id)}>X</button>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold w-full">{customer}</div>
                </div>
              </div>
            </td>
            <td className="w-full text-center">{massage}</td>
            <td className="w-full text-center">
              {serviceName ? serviceName : ""}
            </td>
            <th>
              <button
                onClick={() => handelEdit(_id)}
                className="btn btn-ghost btn-xs"
              >
                Edit
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyReviewInfo;
