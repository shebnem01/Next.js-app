
import Slider from '@mui/material/Slider';
interface PriceFilterProps {
  title: string
}
const PriceFilter: React.FC<PriceFilterProps> = ({ title }) => {
  return (
    <div className="mb-4 pb-4 border-b border-border-gray">
      <div className="font-semibold mb-2">
        {title}
      </div>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      </div>
  )
}

export default PriceFilter