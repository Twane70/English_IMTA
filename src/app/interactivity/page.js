'use client'
import { useEffect, useState } from 'react';
import styles from './interactivity.module.scss';

function DeviceOrientation() {
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [motion, setMotion] = useState({ x: 0, y: 0, z: 0 });

    useEffect(() => {
        if (typeof window !== 'undefined' && location.protocol !== "https:") {
            location.href = "https:" + window.location.href.substring(window.location.protocol.length);
        }

        const handleMotion = (event) => {
            setMotion({
                x: event.accelerationIncludingGravity.x || 0,
                y: event.accelerationIncludingGravity.y || 0,
                z: event.accelerationIncludingGravity.z || 0,
            });
        };

        const requestPermission = async () => {
            if (typeof DeviceMotionEvent !== "undefined" && typeof DeviceMotionEvent.requestPermission === "function") {
                try {
                    const response = await DeviceMotionEvent.requestPermission();
                    if (response === "granted") {
                        setPermissionGranted(true);
                        window.addEventListener("devicemotion", handleMotion);
                    }
                } catch (error) {
                    console.error('Permission denied', error);
                }
            } else {
                alert("DeviceMotionEvent is not defined");
            }
        };

        const btn = document.getElementById("requestPermissionButton");
        if (btn) {
            btn.addEventListener("click", requestPermission);
        }

        return () => {
            window.removeEventListener("devicemotion", handleMotion);
        };
    }, []);

    return (
        <div className={styles.container}>
            <button id="requestPermissionButton" className={styles.button}>Request Permission</button>
            {permissionGranted ? (
                <div className={styles.dataContainer}>
                    <h1>Device Motion</h1>
                    <p>Acceleration X: {motion.x.toFixed(2)}</p>
                    <p>Acceleration Y: {motion.y.toFixed(2)}</p>
                    <p>Acceleration Z: {motion.z.toFixed(2)}</p>
                </div>
            ) : (
                <p>Permission to access device motion is required.</p>
            )}
        </div>
    );
}

export default DeviceOrientation;
