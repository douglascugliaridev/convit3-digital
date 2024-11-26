import { Text } from "react-native";
import { fontBold, textXl, py4, textZinc400, selfStart } from "@/style";

export interface TituloSecaoProps {
    texto: string
}
export default function TituloSecao(props: TituloSecaoProps) {
    return (
        <Text style={[textXl, fontBold, py4, textZinc400, selfStart]}>{props.texto}</Text>
    )
}