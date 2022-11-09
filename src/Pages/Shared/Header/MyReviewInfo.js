import React from "react";

const MyReviewInfo = ({ review, handelDelete, handelEdit }) => {
  const { customer, massage, photo, _id, serviceName } = review;

  return (
    <div>
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
                <label
                  htmlFor="my-modal"
                  onClick={() => handelEdit(_id)}
                  className="btn btn-ghost btn-xs"
                >
                  Edit
                </label>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
            />
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewInfo;
