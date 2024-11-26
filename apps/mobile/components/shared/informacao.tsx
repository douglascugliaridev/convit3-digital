import {  border, borderZinc800, fontBold, gapY1,  px4, py2, roundedLg, textLg, textWhite, textXl, textZinc400 } from "@/style";
import { View, Text } from "react-native";

export interface InformacaoProps {
    label: string;
    children: string;
}
export default function Informacao(props: InformacaoProps) {
    return (
        <View style={[px4,py2,gapY1, roundedLg, border, borderZinc800]}>
            <Text style={[textXl, fontBold, textWhite]}>{props.label}</Text>
            <Text style={[textZinc400, textLg]}>{props.children}</Text>
        </View>
    )
}