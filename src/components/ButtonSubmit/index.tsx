type Props = {
  nameBtn: string;
};

export function ButtonSubmit({ nameBtn }: Props) {
  return (
    <button
      type="submit"
      className=" text-white-50 transition duration-300 bg-fun-blue-900 hover:bg-fun-orange-400
      font-medium rounded-lg 
      text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {nameBtn}
    </button>
  );
}
