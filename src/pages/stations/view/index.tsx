import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import StationTable from '../components/stationTable';

const Station = () => {
  return (
    <>
      <Breadcrumb pageName="المحطات" />

      <div className="flex flex-col gap-10" dir="rtl">
        <StationTable />
      </div>
    </>
  );
};

export default Station;
