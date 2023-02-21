import styles from './copy-button.module.css'
import { useState } from 'react'

export default function CopyButton(props) {

    const [state, setState] = useState(false)
    return (
        <>
            {!state ? (
                <button className={styles.copyButton} onClick={() => setState(true)}>
                    <p className="text-center text-primary">{props.code}  <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.5 0H6.5C5.4 0 4.5 0.9 4.5 2V16C4.5 17.1 5.4 18 6.5 18H16.5C17.6 18 18.5 17.1 18.5 16V2C18.5 0.9 17.6 0 16.5 0ZM2.5 4H0.5V20C0.5 21.1 1.4 22 2.5 22H14.5V20H2.5V4ZM6.5 16H16.5V2H6.5V16Z" fill="#575757" />
                    </svg></p>
                </button>
            ) : (<button className={styles.copiedButton}>
                <p className="text-center text-light">Copied</p>
            </button>)}

        </>
    );
}