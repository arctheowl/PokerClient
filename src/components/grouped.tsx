import Slider from './slider'
import Buttons from './buttons'

type Props = {}

const Grouped = (props: Props) => {
  return (
    <div className='flex flex-col md:w-1/2 w-2/3'>
        <Slider />
        <Buttons />
    </div>
  )
}

export default Grouped