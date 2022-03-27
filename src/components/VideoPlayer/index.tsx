import styles from './styles.module.css';

const SRC = 'https://v16-webapp.tiktok.com/f76126dfeb41afcb7184124a2488b730/62411429/video/tos/useast2a/tos-useast2a-pve-0068/72392db2cbb04bf7b162355bf1eb3c61/?a=1988&amp;br=1874&amp;bt=937&amp;cd=0%7C0%7C0%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=2&amp;er=&amp;ft=XOQ9-3W_nz7Th8wNgDXq&amp;l=202203271949180102230770220F6C476E&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=ampoczM6Zjg2OjMzNzczM0ApZmhpNDxoZGU7N2RpZWk3NWc1Xm5mcjQwLmBgLS1kMTZzc2NjLjQuXmExNTFjNDAvNS86Yw%3D%3D&amp;vl=&amp;vr='

export default function VideoPlayer ():  JSX.Element{
    return (
        <video className={styles.video} src= {SRC} controls={false} />
    )
}

