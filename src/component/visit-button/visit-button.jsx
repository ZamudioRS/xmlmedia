import styles from './visit-button.module.css'

export default function VisitButton() {

    return (
        <>
        <button className={styles.visitButton}>
        <p className="text-center text-light">Visit Site</p>
        </button>
        </>
    );
}