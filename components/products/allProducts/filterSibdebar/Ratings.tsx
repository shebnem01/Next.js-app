import Rating from '@mui/material/Rating';
interface RatingProps {
    title: string
}
const Ratings: React.FC<RatingProps> = ({ title }) => {
    return (
        <div className="pb-4 ">
            <div className="font-semibold mb-2">
                {title}
            </div>
            <div className='flex flex-col gap-3'>
                <Rating name="read-only" value={1} readOnly />
                <Rating name="read-only" value={2} readOnly />
                <Rating name="read-only" value={3} readOnly />
                <Rating name="read-only" value={4} readOnly />
                <Rating name="read-only" value={5} readOnly />
            </div>
        </div>
    )
}

export default Ratings