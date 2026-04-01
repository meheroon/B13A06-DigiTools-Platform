import {
  FaCamera,
  FaRegFileLines,
  FaRegImages,
  FaWandMagicSparkles
} from 'react-icons/fa6'
import { BsGrid1X2Fill } from 'react-icons/bs'
import { RiRobot2Line } from 'react-icons/ri'

const iconMap = {
  writing: <RiRobot2Line className="text-[#f1c64d]" />,
  design: <FaWandMagicSparkles className="text-[#f8b53a]" />,
  camera: <FaCamera className="text-[#1aa2ff]" />,
  automation: <BsGrid1X2Fill className="text-[#4a7cf6]" />,
  resume: <FaRegFileLines className="text-[#f0c63f]" />,
  social: <FaRegImages className="text-[#78a6ff]" />
}

const CartItem = ({ item, handleRemoveFromCart }) => {
  return (
    <div className="flex flex-col gap-4 rounded-[14px] bg-[#f5f6fa] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ececf2] bg-white text-[18px]">
          {iconMap[item.icon]}
        </div>

        <div>
          <h4 className="text-[17px] font-semibold text-[#20293d]">{item.name}</h4>
          <p className="mt-1 text-[14px] text-[#7a8395]">${item.price}</p>
        </div>
      </div>

      <button
        onClick={() => handleRemoveFromCart(item.id)}
        className="self-start text-[14px] font-medium text-[#ff2b78] sm:self-auto"
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem