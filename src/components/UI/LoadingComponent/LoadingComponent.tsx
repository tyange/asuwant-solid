import expandingCircle from "../../../assets/the_expanding_circle.png";
import expandingCircleInPerson from "../../../assets/the_expanding_circle_in_person.png";
const LoadingComponent = () => {
  return (
    <div class="w-full h-full flex justify-center items-center relative">
      <img
        class="w-3/5 animate-spin-slow"
        src={expandingCircle}
        alt="확장하는 원"
      />
      <div class="absolute w-32 sm:w-52 md:w-2/5">
        <img class="w-full" src={expandingCircleInPerson} alt="확장하는 원" />
      </div>
    </div>
  );
};

export default LoadingComponent;
