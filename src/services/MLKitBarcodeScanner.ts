import {BarcodeScanner as Scanner} from "@/interfaces/BarcodeScanner";
import {BarcodeFormat, BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";

class MLKitBarcodeScanner implements Scanner {
    async scanBarcode(): Promise<string | null> {
        const { barcodes } = await BarcodeScanner.scan({
            formats: [
                BarcodeFormat.UpcE,
                BarcodeFormat.UpcA,
                BarcodeFormat.Ean13,
            ],
        });

        return barcodes[0].rawValue;
    }

    /**
     * Request Permission to use the camera.
     */
    async requestCameraPermission(): Promise<boolean> {
        const permissionStatus = await BarcodeScanner.requestPermissions();

        return permissionStatus.camera === 'granted';
    }
}

export default new MLKitBarcodeScanner() as MLKitBarcodeScanner;