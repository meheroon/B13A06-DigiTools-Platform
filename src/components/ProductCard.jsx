import {
  FaCamera,
  FaCheck,
  FaPenNib,
  FaRegFileLines,
  FaRegImages,
  FaWandMagicSparkles
} from 'react-icons/fa6'
import { BsGrid1X2Fill } from 'react-icons/bs'
import { RiRobot2Line } from 'react-icons/ri'

const tagStyles = {
  'Best Seller': 'bg-[#fff1db] text-[#d98a09]',
  Popular: 'bg-[#ece7ff] text-[#7a4df5]',
  New: 'bg-[#ddf7e7] text-[#28a956]'
}

const iconMap = {
  writing: <RiRobot2Line className="text-[#f1c64d]" />,
  design: <FaWandMagicSparkles className="text-[#f8b53a]" />,
  camera: <FaCamera className="text-[#1aa2ff]" />,
  automation: <BsGrid1X2Fill className="text-[#4a7cf6]" />,
  resume: <FaRegFileLines className="text-[#f0c63f]" />,
  social: <FaRegImages className="text-[#78a6ff]" />
}

const ProductCard = ({ product, handleAddToCart }) => {
  const { name, description, price, period, tagType, features, icon } = product

  return (
    <div className="soft-card rounded-[18px] p-5 md:p-6">
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ececf2] bg-white text-[19px]">
          {iconMap[icon] || <FaPenNib />}
        </div>

        <span className={`rounded-full px-3 py-1 text-[11px] font-medium ${tagStyles[tagType]}`}>
          {tagType}
        </span>
      </div>

      <h3 className="text-[18px] font-bold leading-7 text-[#20293d] md:text-[20px]">
        {name}
      </h3>

      <p className="mt-3 min-h-[66px] text-[14px] leading-6 text-[#7a8395]">
        {description}
      </p>

      <div className="mt-4 flex items-end">
        <span className="text-[38px] font-extrabold tracking-[-0.03em] text-[#20293d]">
          ${price}
        </span>
        <span className="mb-2 ml-1 text-[15px] text-[#8d95a5]">/{period}</span>
      </div>

      <ul className="mt-5 space-y-2.5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2.5 text-[14px] text-[#667085]">
            <FaCheck className="mt-1 text-[12px] text-[#22c55e]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleAddToCart(product)}
        className="mt-6 w-full rounded-full purple-gradient px-5 py-3.5 text-sm font-semibold text-white shadow-[0_14px_24px_rgba(111,54,246,0.16)]"
      >
        Buy Now
      </button>
    </div>
  )
}

export default ProductCard