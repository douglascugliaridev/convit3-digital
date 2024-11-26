import useEventos from "@/data/hooks/useEventos";
import { flex1 } from "@/style";
import { CameraView } from "expo-camera";
import { useRouter } from "expo-router";

export default function TelaQrCode() {
    const { adicionarEventoViaQrCode } = useEventos();
    const router = useRouter();

    return (
        <CameraView 
            style={[flex1]} 
            facing="back"
            onBarcodeScanned={({ data }) => {
                adicionarEventoViaQrCode(data);
                router.back();
            }}
        />
    );
}