import AddCourseToTheBootcampModal from "./AddCourseToTheBootcampModal";
import CreateNewBootcampModal from "./CreateNewBootcampModal";

type HandleModalToShowPropsType = {
  selectedRadioButton: string;
};
const HandleModalToShow = ({
  selectedRadioButton,
}: HandleModalToShowPropsType) => {
  return (
    <div>
      {selectedRadioButton === "yes" ? (
        <AddCourseToTheBootcampModal />
      ) : (
        <CreateNewBootcampModal />
      )}
    </div>
  );
};

export default HandleModalToShow;
