import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Powered by</span>
      <a
        href='https://blackcatfilm.cc'
        className='underline justify-start' target='_blank'>
        黑猫Emby媒体库
      </a>
      .
    </div>
  )
}
