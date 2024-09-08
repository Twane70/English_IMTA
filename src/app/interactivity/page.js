'use client'
import { useEffect, useState } from 'react';

function DeviceOrientation() {
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [orientation, setOrientation] = useState({ alpha: 0, beta: 0, gamma: 0, absolute: false });
    const [motion, setMotion] = useState({ x: 0, y: 0, z: 0 });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleOrientation = (event) => {
                setOrientation({
                    alpha: event.alpha || 0,
                    beta: event.beta || 0,
                    gamma: event.gamma || 0,
                    absolute: event.absolute || false,
                });
            };

            const handleMotion = (event) => {
                setMotion({
                    x: event.accelerationIncludingGravity.x || 0,
                    y: event.accelerationIncludingGravity.y || 0,
                    z: event.accelerationIncludingGravity.z || 0,
                });
            };

            const requestPermission = async () => {
                if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                    try {
                        const response = await DeviceOrientationEvent.requestPermission();
                        if (response === 'granted') {
                            setPermissionGranted(true);
                            window.addEventListener('deviceorientation', handleOrientation);
                            window.addEventListener('devicemotion', handleMotion);
                        }
                    } catch (error) {
                        console.error('Permission denied', error);
                    }
                } else {
                    // For browsers that do not require permission
                    setPermissionGranted(true);
                    window.addEventListener('deviceorientation', handleOrientation);
                    window.addEventListener('devicemotion', handleMotion);
                }
            };

            requestPermission();

            return () => {
                window.removeEventListener('deviceorientation', handleOrientation);
                window.removeEventListener('devicemotion', handleMotion);
            };
        }
    }, []);

    return (
        <div>
            {permissionGranted ? (
                <div>
                    <h1>Device Orientation</h1>
                    <p>Alpha: {orientation.alpha.toFixed(2)}</p>
                    <p>Beta: {orientation.beta.toFixed(2)}</p>
                    <p>Gamma: {orientation.gamma.toFixed(2)}</p>
                    <p>Absolute: {orientation.absolute ? 'Yes' : 'No'}</p>
                    <h1>Device Motion</h1>
                    <p>Acceleration X: {motion.x.toFixed(2)}</p>
                    <p>Acceleration Y: {motion.y.toFixed(2)}</p>
                    <p>Acceleration Z: {motion.z.toFixed(2)}</p>
                </div>
            ) : (
                <p>Permission to access device orientation and motion is required.</p>
            )}
        </div>
    );
}

export default DeviceOrientation;
