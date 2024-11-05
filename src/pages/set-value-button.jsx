import ButtonSeconadry from "../components/common/button-secondary";

const SetValueButton = () => {
  return (
    <div className="flex  justify-center bg-text w-full flex-col  items-start text-text-dark">
      <table className="w-full border border-gray-300 border-collapse">
        <thead>
          <tr className="bg-primary text-text text-xs border-b border-gray-300">
            <th className="py-2 px-3 text-left border-r border-gray-300">ID</th>
            <th className="py-2 px-3 text-left border-r border-gray-300">
              Button Name
            </th>
            <th className="py-2 text-left px-3">Button Value</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <tr
              key={id}
              className="text-text-dark text-sm border-b border-gray-300"
            >
              <td className="py-2 px-3 border-r border-gray-300">{id}</td>
              <td className="py-2 px-3 border-r border-gray-300">
                <input
                  className="py-2 border-none outline-1 outline outline-text-light  w-full rounded-md px-4 "
                  value={100}
                />
              </td>
              <td className="py-2 px-3">
                <input
                  className="py-2 border-none outline-1 outline outline-text-light w-full rounded-md px-4 "
                  value={100}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-32 py-3 px-4">
      <ButtonSeconadry>
        <span className="text-sm">Submit</span>
      </ButtonSeconadry>
      </div>
    </div>
  );
};

export default SetValueButton;
