
import styles from '../../../styles/home.module.scss';

export default function PreFooter() {
    const FOOTER_BASE_URL = "https://res.cloudinary.com/pushpcloud/image/upload/v1601970539/smart-city/footer";
    return (
        <>
            <div>
                <img src={`${FOOTER_BASE_URL}/pre-footer_kirdxc`} alt="image" className={styles.footerImageStyle} />
            </div>
        </>
    )
}