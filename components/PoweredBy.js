import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Powered by</span>
     © 2022–2025 <a
        href='https://blackcatfilm.cc'
        className='underline justify-start'>
        Blackcatfilm 黑猫Emby媒体库
      </a>
      .
    </div>
  )
}
