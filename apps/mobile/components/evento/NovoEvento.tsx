import { bgBlack, button, centerGrow, gapY1, gapY2, gapY4, itemsCenter, py1, roundedFull, textWhite } from "@/style";
import { Image, Pressable, Text, View } from "react-native";
import { useCameraPermissions } from "expo-camera";
import { Link } from "expo-router";

export default function NovoEvento() {

    const [permissao, solicitarPermissao] = useCameraPermissions();

    if (!permissao || !permissao.granted) {
        return (
            <View style={[centerGrow, bgBlack]}>
                <Text style={[textWhite]}>Permissão de câmera negada!</Text>
                <Pressable onPress={solicitarPermissao} style={[button]}>
                    <Text style={[textWhite]}>Solicitar permissão</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={[itemsCenter, gapY4]}>
            <Link href="/qrcode" asChild>
                <Pressable>
                    <Image
                        source={require('../../assets/images/qrcode.png')}
                        style={{ width: 80, height: 80 }}
                    />
                </Pressable>
            </Link>
            <View>
                <Text style={[button, py1, roundedFull, textWhite]}>Novo Evento</Text>
            </View>
        </View>
    )
}