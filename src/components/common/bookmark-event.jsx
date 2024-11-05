import { useUpdateItemMutation } from "../../services/api/sports";

// eslint-disable-next-line react/prop-types
export const BookmarkEventDestop = ({ resize, id, item }) => {
  const [updateItem] = useUpdateItemMutation();

  // Assuming `item` is the object you want to update
  const handleUpdate = async () => {
    // eslint-disable-next-line react/prop-types
    await updateItem({
      matchId: id,
      queryKey: `seth/getMatchs/${id}`,
      ...item,
    });
  };

  const { isSelected } = item || {};
  return (
    <>
      <div
        onClick={() => {
          handleUpdate();
        }}
        className="border-[1px] cursor-pointer md:block hidden border-text-dark border-solid rounded-sm"
      >
        <img
          src={
            isSelected
              ? "https://images.staticcontent.io/rde/uimg/d-pin-mobile.svg"
              : "https://images.staticcontent.io/rde/uimg/a-pin-mobile.svg"
          }
          className={`${resize ? "h-4" : "h-5"} rounded-sm`}
          alt={"pin"}
        />
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
export const BookmarkEventMobile = ({ resize, item }) => {
  const { isSelected } = item || {};

  return (
    <>
      <div className="border-[1px] cursor-pointer md:hidden block border-text-dark border-solid rounded-sm">
        <img
          src={
            isSelected
              ? "https://images.staticcontent.io/rde/uimg/d-pin-mobile.svg"
              : "https://images.staticcontent.io/rde/uimg/a-pin-mobile.svg"
          }
          className={`${resize ? "h-4" : "h-5"} rounded-sm`}
          alt={"pin"}
        />
      </div>
    </>
  );
};
