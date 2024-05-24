import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import Stat from './Stat'

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //1. number of bookings
  const numBookings = bookings.length;

  // 2. total sales
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  // 3. total chekins
  const checkins = confirmedStays.length;

  //4. occupancyRate
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

Stats.propTypes = {
  bookings: PropTypes.array,
  confirmedStays: PropTypes.number,
  numDays: PropTypes.number,
  cabinCount: PropTypes.number,
};

export default Stats;
