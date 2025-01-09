import Breadcrumb from '../components/Breadcrumb';
const FormElements = () => {
  return (
    <>
      <Breadcrumb pageName="اضافة محطة" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Input Fields
          </h3>
        </div>
        <div className="flex gap-5.5 p-6.5">
          <div className="flex flex-col">
            <label className="mb-3 block text-black dark:text-white">
              Default Input
            </label>
            <input
              type="text"
              placeholder="Default Input"
              className="rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-3 block text-black dark:text-white">
              Active Input
            </label>
            <input
              type="text"
              placeholder="Active Input"
              className="rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-3 block text-black dark:text-white">
              Active Input
            </label>
            <input
              type="text"
              placeholder="Active Input"
              className="rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-3 block font-medium text-black dark:text-white">
              Disabled label
            </label>
            <input
              type="text"
              placeholder="Disabled label"
              disabled
              className="rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
            />
          </div>
        </div>
        <button className="m-4 inline-flex items-center justify-center rounded-full bg-primary py-2 px-8 m-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
          حفظ
        </button>
      </div>
    </>
  );
};

export default FormElements;
