const MyReviewInfo = ({ review, handelDelete, handelEditReview }) => {
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
                <label htmlFor="my-modal-3" className="btn btn-ghost btn-xs">
                  Edit
                </label>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Write your edit review</h3>
          <form onSubmit={(event) => handelEditReview(event, _id)}>
            <textarea
              name="massage"
              className="textarea textarea-info w-1/2"
              placeholder="your edit review"
            ></textarea>{" "}
            <br />
            <input
              type="submit"
              className="btn btn-primary mt-4"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyReviewInfo;
