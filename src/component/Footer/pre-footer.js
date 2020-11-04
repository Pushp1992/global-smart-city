
import styles from '../../../styles/home.module.scss';
const FOOTER_BASE_URL = "https://res.cloudinary.com/pushpcloud/image/upload/v1601970539/smart-city/footer";

function PreFooter() {
    
    return (
        <>
            <div>
                <img src={`${FOOTER_BASE_URL}/banner-image_xzisp1`} alt="image" className={styles.footerImageStyle} />
            </div>
        </>
    )
};

function BannerImage() {
    return (
        <>
            <div>
                <img src={`${FOOTER_BASE_URL}/banner-image_xzisp1`} alt="image" className={styles.footerImageStyle} />
            </div>
        </>
    )
};

export {PreFooter, BannerImage}