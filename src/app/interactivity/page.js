import { useEffect, useState } from 'react';

function DeviceOrientation() {
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [orientation, setOrientation] = useState({ alpha: 0, beta: 0, gamma: 0 });

    useEffect(() => {
        const handleOrientation = (event) => {
            setOrientation({
                alpha: event.alpha,
                beta: event.beta,
                gamma: event.gamma,
            });
        };

        const requestPermission = async () => {
            if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                try {
                    const response = await DeviceOrientationEvent.requestPermission();
                    if (response === 'granted') {
                        setPermissionGranted(true);
                        window.addEventListener('deviceorientation', handleOrientation);
                    }
                } catch (error) {
                    console.error('Permission denied', error);
                }
            } else {
                // For browsers that do not require permission
                setPermissionGranted(true);
                window.addEventListener('deviceorientation', handleOrientation);
            }
        };

        requestPermission();

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    }, []);

    return (
        <div>
            {permissionGranted ? (
                <div>
                    <h1>Device Orientation</h1>
                    <p>Alpha: {orientation.alpha.toFixed(2)}</p>
                    <p>Beta: {orientation.beta.toFixed(2)}</p>
                    <p>Gamma: {orientation.gamma.toFixed(2)}</p>
                </div>
            ) : (
                <p>Permission to access device orientation is required.</p>
            )}
        </div>
    );
}

export default DeviceOrientation;
