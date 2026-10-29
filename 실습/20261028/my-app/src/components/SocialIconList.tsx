import socialData from '../data/socialData';          // ✨ 주문서 묶음 가져오기
import SocialIconItem from './SocialIconItem';         // ✨ 붕어빵 틀 가져오기
export default function SocialIconList() {
    return (
        <ul>
            {socialData.map((social) => (               // ✏️ <li> 4개(약 50줄)를 지우고 이 3줄로
                <SocialIconItem key={social.id} social={social} target='_blank' />
            ))}
        </ul>
    )
}
