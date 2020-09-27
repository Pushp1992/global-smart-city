
const styles = {
    tagline: {
        color: 'white'
    },
    heading: {
        fontFamily: 'Abel, sansSerif',
        fontSize: '2.4vw',
        lineHeight: '5vw',
        direction: 'rtl'
    },
    subheading: {
        fontSize: '1.4vw',
        lineHeight: '2vw',
        direction: 'rtl'
    },
}

const TagLine = () => {
    return (
        <div style={styles.tagline}>
            <div style={styles.heading}>Simplyfying Life</div>
            <div style={styles.heading}>Making City Smart</div>
            <div style={styles.subheading}>
                <label>GSC</label> &nbsp;
                <label style={styles.wordbreak}>data-powered platform enables local <br />
                governments to effectively procure technology solutions
                </label>
            </div>
        </div>
    )
}

export default TagLine;