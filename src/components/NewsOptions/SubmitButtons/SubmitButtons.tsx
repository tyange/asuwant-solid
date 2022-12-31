type SubmitButtonsProps = {
  onClickSubmitHandler: () => void;
};

const SubmitButtons = ({ onClickSubmitHandler }: SubmitButtonsProps) => {
  return (
    <div class="w-full flex justify-center items-center p-10">
      <button
        class="border shadow-md p-5 rounded-xl bg-sky-100 hover:bg-sky-200 transition-all"
        onClick={onClickSubmitHandler}
      >
        뉴스 보기
      </button>
    </div>
  );
};

export default SubmitButtons;
