export interface BarcodeScanner {
    /**
     * Scans a barcode and returns the result.
     */
    scanBarcode(): Promise<string | null>;

    /**
     * Request Permission to use the camera.
     */
    requestCameraPermission(): Promise<boolean>;
}